import {
  LOGO_URL,
  PRIVACY_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  CERT_ALLON4,
  CERT_NOBEL,
  CERT_INVISALIGN,
  CERT_KVARNER,
} from "../lib/site.constants";
import { MapButtons } from "./map-buttons";
import { WorkingHours } from "./working-hours";

const FOOTER_LOGOS = [
  { src: CERT_ALLON4, alt: "All-on-4 Center of Excellence", variant: "square" },
  { src: CERT_NOBEL, alt: "Nobel Biocare", variant: "wide" },
  { src: CERT_INVISALIGN, alt: "Platinum Invisalign Provider", variant: "square" },
  { src: CERT_KVARNER, alt: "Kvarner Health Member", variant: "kvarner" },
];

export function SiteFooter() {
  const line: React.CSSProperties = {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: 1.6,
    textDecoration: "none",
    display: "block",
  };
  return (
    <footer
      style={{
        background: "#1C1B19",
        padding: "40px 20px 110px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        {/* Certificate logos strip */}
        <div className="footer-logos">
          {FOOTER_LOGOS.map((l) => (
            <img
              key={l.src}
              src={l.src}
              alt={l.alt}
              className={`footer-logo footer-logo-${l.variant}`}
            />
          ))}
        </div>

        <div className="footer-grid">
          {/* Column 1: logo + name + address + map buttons */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}
          >
            <img
              src={LOGO_URL}
              alt="Institut Dentalna Jelušić"
              style={{
                width: 56,
                height: 56,
                borderRadius: 0,
                marginBottom: 8,
                display: "block",
              }}
            />
            <span style={line}>Institut Dentalna Jelušić</span>
            <span style={line}>Matuljska cesta 1, 51410 Opatija</span>
            <MapButtons onDark />
          </div>

          {/* Column 2: phone + email + privacy */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}
          >
            <a href={PHONE_HREF} style={line}>
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} style={line}>
              {EMAIL}
            </a>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...line, textDecoration: "underline" }}
            >
              Pravila privatnosti
            </a>
          </div>

          {/* Column 3: working hours */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <WorkingHours onDark />
          </div>

          {/* Copyright full width */}
          <span style={{ ...line, marginTop: 24 }}>© 2026 Dentalna poliklinika dr. Jelušić</span>
        </div>
      </div>
    </footer>
  );
}
