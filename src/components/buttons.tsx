import { WA_LINK, PHONE_HREF } from "../lib/site.constants";
import { WhatsAppGlyph } from "../lib/whatsapp-glyph";

export function PrimaryButton({
  children,
  type = "button",
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button type={type} className="btn btn-primary" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export function WhatsAppButton({ full = true }: { full?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-wa"
      style={full ? undefined : { width: "auto" }}
    >
      <WhatsAppGlyph size={24} style={{ color: "#FFFFFF" }} />
      Pišite nam na WhatsApp
    </a>
  );
}

export function CallButton({
  full = true,
  label = "Nazovite nas: 051 718 050",
}: {
  full?: boolean;
  label?: string;
}) {
  return (
    <a href={PHONE_HREF} className="btn btn-call" style={full ? undefined : { width: "auto" }}>
      {label}
    </a>
  );
}
