import { CERT_ALLON4, CERT_NOBEL, CERT_INVISALIGN, CERT_KVARNER } from "../lib/site.constants";

const LOGOS = [
  { src: CERT_ALLON4, alt: "All-on-4 Center of Excellence", variant: "square" },
  { src: CERT_NOBEL, alt: "Nobel Biocare", variant: "wide" },
  { src: CERT_INVISALIGN, alt: "Platinum Invisalign Provider", variant: "square" },
  { src: CERT_KVARNER, alt: "Kvarner Health Member", variant: "kvarner" },
];

export function CertificatesSection() {
  return (
    <section style={{ background: "#1C1B19", padding: "40px 20px" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: 17,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            margin: "0 0 24px",
          }}
        >
          Certificirana klinika
        </p>
        <div className="cert-grid">
          {LOGOS.map((l) => (
            <div key={l.src} className="cert-cell">
              <img src={l.src} alt={l.alt} className={`cert-logo cert-logo-${l.variant}`} />
            </div>
          ))}
        </div>
        <p
          style={{
            color: "rgba(244,243,241,0.78)",
            fontSize: 17,
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            lineHeight: 1.5,
            margin: "24px auto 0",
            maxWidth: 640,
          }}
        >
          Certificirani All-on-4 Center of Excellence, partner Nobel Biocarea i Platinum Invisalign
          Provider.
        </p>
      </div>
    </section>
  );
}
