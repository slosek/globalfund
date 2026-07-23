import type { Metadata } from "next";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { getClientRooms } from "@/lib/client-rooms";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Secure document access for Global Fund Real Estate Group clients.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export const dynamic = "force-dynamic";

function MicrosoftMark() {
  return (
    <span className="grid h-5 w-5 grid-cols-2 gap-0.5" aria-hidden="true">
      <span className="bg-[#f25022]" />
      <span className="bg-[#7fba00]" />
      <span className="bg-[#00a4ef]" />
      <span className="bg-[#ffb900]" />
    </span>
  );
}

export default async function PortalPage() {
  const session = await auth();
  const rooms = getClientRooms(session?.user?.email);

  if (!session?.user) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-ink pb-16 pt-[85px] text-white">
        <Image
          src="/images/about-fort-lauderdale-v3.webp"
          alt="Fort Lauderdale waterfront commercial district"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="ink-fade absolute inset-0" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-85px)] max-w-[1500px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-white/55">Private client access</p>
            <h1 className="mt-9 max-w-4xl font-display text-[clamp(4.2rem,8vw,8.4rem)] leading-[0.82] tracking-[-0.045em] text-white">
              Your secure<br />file <span className="spectrum-text italic">room.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Sign in with the email address that received your invitation. Documents and permissions are securely managed through Microsoft 365.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-[2rem] border border-white/15 bg-white/95 p-7 text-ink shadow-float backdrop-blur-xl sm:p-10">
              <div className="flex items-center gap-3">
                <span className="spectrum-line h-1 w-12 rounded-full" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-faint">Client portal</span>
              </div>
              <h2 className="mt-7 font-display text-4xl leading-none">Access your documents</h2>
              <p className="mt-5 text-sm leading-7 text-ink-muted">
                Microsoft verifies your identity before opening any shared material. Global Fund never stores your password.
              </p>
              <form
                className="mt-8"
                action={async () => {
                  "use server";
                  await signIn("microsoft-entra-id", { redirectTo: "/portal" });
                }}
              >
                <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.13em] text-white transition-colors hover:bg-ink-soft">
                  <MicrosoftMark /> Sign in with Microsoft
                </button>
              </form>
              <div className="mt-8 border-t border-ink/10 pt-6">
                <p className="text-xs leading-6 text-ink-faint">
                  Need an invitation? Contact <a className="font-semibold text-ink hover:text-violet" href="mailto:info@globalfundreg.com">info@globalfundreg.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-stone-50 pb-24 pt-[85px]">
      <div className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12 lg:py-16">
          <div>
            <p className="eyebrow">Secure client portal</p>
            <h1 className="mt-6 font-display text-[clamp(3.6rem,7vw,7rem)] leading-[0.85] tracking-[-0.045em] text-ink">
              Welcome<span className="spectrum-text italic"> back.</span>
            </h1>
            <p className="mt-6 text-sm text-ink-muted">Signed in as {session.user.email}</p>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/portal" });
            }}
          >
            <button type="submit" className="rounded-full border border-ink/15 bg-white px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink hover:border-ink/30">
              Sign out
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between border-b border-ink/15 pb-6">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink-faint">Available file rooms</p>
                <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Your shared documents</h2>
              </div>
              <span className="font-display text-3xl text-ink-faint">{rooms.length.toString().padStart(2, "0")}</span>
            </div>

            {rooms.length > 0 ? (
              <div className="mt-8 space-y-4">
                {rooms.map((room, index) => (
                  <a
                    key={room.url}
                    href={room.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card-lift group grid gap-6 rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-float sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:p-9"
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-ink-faint">{(index + 1).toString().padStart(2, "0")}</span>
                    <span>
                      <span className="block font-display text-3xl leading-none text-ink sm:text-4xl">{room.name}</span>
                      {room.description && <span className="mt-3 block text-sm leading-6 text-ink-muted">{room.description}</span>}
                    </span>
                    <span className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink group-hover:text-violet">
                      Open room <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[1.75rem] border border-ink/10 bg-white p-8 sm:p-10">
                <p className="font-display text-3xl text-ink">Your account is verified.</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink-muted">
                  No file room has been assigned to this email address yet. If you recently received an invitation, contact our team and we will connect the room.
                </p>
                <a href="mailto:info@globalfundreg.com?subject=Client%20portal%20access" className="mt-7 inline-flex rounded-full bg-ink px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white hover:bg-ink-soft">
                  Request access
                </a>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10">
              <div className="relative z-10">
                <p className="eyebrow !text-white/40">Protected by Microsoft 365</p>
                <h2 className="mt-7 font-display text-4xl leading-[0.95]">Private by design.</h2>
                <ul className="mt-8 space-y-5 text-sm leading-6 text-white/60">
                  <li className="border-t border-white/15 pt-5">Identity verified through Microsoft Entra ID</li>
                  <li className="border-t border-white/15 pt-5">Access limited to specifically invited people</li>
                  <li className="border-t border-white/15 pt-5">Permissions and documents remain in SharePoint</li>
                </ul>
                <p className="mt-8 text-xs leading-6 text-white/40">Never forward document links. Access is associated with your invited email address.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
