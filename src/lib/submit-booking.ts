import { WEBHOOK_URL } from "./site.constants";

export function normalizePhone(raw: string): string {
  let s = (raw || "").replace(/[\s\-./()]/g, "");
  if (s.startsWith("00")) s = "+" + s.slice(2);
  else if (s.startsWith("385")) s = "+" + s;
  else if (s.startsWith("0")) s = "+385" + s.slice(1);
  else if (/^\d/.test(s)) s = "+385" + s;
  return s;
}

export function isPhoneValid(normalized: string): boolean {
  if (!normalized.startsWith("+")) return false;
  const digits = normalized.replace(/\D/g, "");
  let national: string;
  if (normalized.startsWith("+385")) national = digits.slice(3);
  else national = digits;
  return national.length >= 8;
}

let redirected = false;

function redirectToThanks() {
  if (redirected) return;
  redirected = true;
  const qs = window.location.search || "";
  window.location.href = "/hvala" + qs;
}

export async function submitBooking({
  ime,
  telefon,
  position,
}: {
  ime: string;
  telefon: string;
  position: "hero" | "dno";
}): Promise<void> {
  const w = window as unknown as {
    dataLayer: unknown[];
    fbq?: (...args: unknown[]) => void;
    __resolveTrackingParams?: () => Record<string, string>;
  };

  const tracking =
    typeof w.__resolveTrackingParams === "function" ? w.__resolveTrackingParams() : {};

  const payload = {
    ime,
    telefon,
    stranica: window.location.pathname,
    page_url: window.location.href,
    referrer: document.referrer,
    form_source: "paro-lp-c-kratko",
    kampanja_akcija: "parodontologija-10-2026",
    language: "hr",
    forma_pozicija: position,
    ...tracking,
  };

  const parts = ime.trim().split(/\s+/);
  const firstName = parts[0] || ime.trim();
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "form_submission",
    firstName,
    lastName,
    email: "",
    phone: telefon,
  });
  if (typeof w.fbq === "function") w.fbq("track", "Lead");

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    redirectToThanks();
  };
  window.setTimeout(finish, 4000);

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    /* ignore — redirect regardless */
  }
  finish();
}
