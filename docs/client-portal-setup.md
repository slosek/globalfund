# Global Fund client portal setup

The portal uses Microsoft Entra ID for sign-in, encrypted JWT cookies for the website session, and SharePoint for document permissions. It does not require a database.

## Microsoft Entra application

1. Register a single-tenant web application named `Global Fund Client Portal`.
2. Add `https://globalfundreg.com/api/auth/callback/microsoft-entra-id` as a web redirect URI.
   For local sign-in testing, optionally add `http://localhost:3000/api/auth/callback/microsoft-entra-id`.
3. Create a client secret and store its value in Vercel. Do not commit it.
4. Use the tenant-specific issuer URL so only directory members and invited guests can authenticate.

## SharePoint rooms

Use one private SharePoint site per client when possible. Invite clients as Entra B2B guests and grant access to authenticated guests only. Do not use anonymous or `Anyone with the link` sharing.

## Environment variables

- `AUTH_SECRET`: encryption secret for portal session cookies.
- `AUTH_MICROSOFT_ENTRA_ID_ID`: Entra application client ID.
- `AUTH_MICROSOFT_ENTRA_ID_SECRET`: Entra client-secret value.
- `AUTH_MICROSOFT_ENTRA_ID_ISSUER`: `https://login.microsoftonline.com/<tenant-id>/v2.0`.
- `CLIENT_PORTAL_ROOMS`: server-only JSON mapping lower-case invited email addresses to one or more SharePoint rooms.

Example room directory:

```json
{
  "client@example.com": [
    {
      "name": "Example Client File Room",
      "description": "Secure transaction documents",
      "url": "https://yourtenant.sharepoint.com/sites/example-client"
    }
  ]
}
```

Changing the room directory in Vercel requires a redeployment. SharePoint permissions take effect independently and remain the final authorization layer.

## Production resources

- Entra app: `Global Fund Client Portal`
- Application ID: `09b6378d-0f03-4b9b-9a88-3438f3497b98`
- Tenant ID: `7de72ffc-f810-42a1-9399-8b14ea41e329`
- Pilot SharePoint site: `https://globalfundregcom.sharepoint.com/sites/GlobalFundClientRooms`
- Pilot portal account: `sam@globalfundreg.com`

The pilot site is private. External sharing is limited to new and existing authenticated guests, the default link type is **Specific people**, and the default permission is **View**. Anonymous `Anyone` links are disabled for the site.

## Add a client

1. Create a private SharePoint site for the client, or a folder with unique permissions when a separate site is not practical.
2. Share it with the client's exact email address using **Specific people**. Do not create an `Anyone` link.
3. Add the lower-case email and SharePoint URL to `CLIENT_PORTAL_ROOMS` in Vercel.
4. Redeploy the production site so the portal directory is refreshed.
5. Test the invitation in a private browser window before sending it to the client.
