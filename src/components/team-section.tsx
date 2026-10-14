import { PHOTO_TEAM } from "../lib/site.constants";

export function TeamSection() {
  return (
    <section className="section" style={{ background: "#FFFFFF" }}>
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 24 }}>
          Tim kojem pacijenti vjeruju više od 25 godina
        </h2>
        <img
          src={PHOTO_TEAM}
          alt="Tim Instituta Dentalna Jelušić"
          loading="lazy"
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
            display: "block",
            borderRadius: 0,
          }}
        />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 19,
            lineHeight: 1.5,
            color: "#1C1B19",
            margin: "20px 0 0",
          }}
        >
          Pregled radi specijalist parodontologije iz našeg tima. Pregled Vas ne obvezuje na
          terapiju.
        </p>
      </div>
    </section>
  );
}
