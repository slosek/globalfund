import "server-only";

export type ClientRoom = {
  name: string;
  url: string;
  description?: string;
};

const sharePointHostSuffixes = [
  ".sharepoint.com",
  ".sharepoint.us",
  ".sharepoint.de",
  ".sharepoint.cn",
];

function isClientRoom(value: unknown): value is ClientRoom {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<ClientRoom>;
  if (typeof candidate.name !== "string" || typeof candidate.url !== "string") return false;
  if (candidate.description !== undefined && typeof candidate.description !== "string") return false;

  try {
    const url = new URL(candidate.url);
    return url.protocol === "https:" && sharePointHostSuffixes.some((suffix) => url.hostname.toLowerCase().endsWith(suffix));
  } catch {
    return false;
  }
}

export function getClientRooms(email?: string | null): ClientRoom[] {
  if (!email) return [];

  const raw = process.env.CLIENT_PORTAL_ROOMS;
  if (!raw) return [];

  try {
    const directory = JSON.parse(raw) as Record<string, unknown>;
    const rooms = directory[email.trim().toLowerCase()];
    return Array.isArray(rooms) ? rooms.filter(isClientRoom) : [];
  } catch {
    console.error("CLIENT_PORTAL_ROOMS is not valid JSON.");
    return [];
  }
}
