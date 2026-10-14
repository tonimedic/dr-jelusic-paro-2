import { REVIEWS_URL, GOOGLE_G_LOGO } from "../lib/site.constants";

function Stars() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {[0, 1, 2, 3].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width={28} height={28} aria-hidden="true">
          <path
            fill="#FBBC04"
            d="M12 17.27l5.18 3.73-1.64-6.81L21.5 9.5l-6.88-.61L12 2.5 9.38 8.89 2.5 9.5l5.96 4.69-1.64 6.81z"
          />
        </svg>
      ))}
      <div style={{ position: "relative", width: 28, height: 28 }}>
        <svg
          viewBox="0 0 24 24"
          width={28}
          height={28}
          aria-hidden="true"
          style={{ position: "absolute", inset: 0 }}
        >
          <path
            fill="#D6D3CD"
            d="M12 17.27l5.18 3.73-1.64-6.81L21.5 9.5l-6.88-.61L12 2.5 9.38 8.89 2.5 9.5l5.96 4.69-1.64 6.81z"
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, width: "80%", overflow: "hidden" }}>
          <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true">
            <path
              fill="#FBBC04"
              d="M12 17.27l5.18 3.73-1.64-6.81L21.5 9.5l-6.88-.61L12 2.5 9.38 8.89 2.5 9.5l5.96 4.69-1.64 6.81z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function GoogleRating() {
  return (
    <a
      href={REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rating-card"
      aria-label="Ocjena 4,8 od 5 na Googleu, 137 recenzija"
      style={{ maxWidth: 560, margin: "0 auto" }}
    >
      <div className="rating-row">
        <img
          src={GOOGLE_G_LOGO}
          alt=""
          width={32}
          height={32}
          style={{ width: 32, height: 32, flexShrink: 0 }}
        />
        <span className="rating-num">4,8</span>
        <Stars />
        <span className="rating-count">137 recenzija na Googleu</span>
      </div>
      <blockquote className="rating-quote">
        „Izuzetno ljubazni i profesionalni. Svaka pohvala svima, od recepcije do zubara.“
      </blockquote>
      <p className="rating-attribution">Google recenzija pacijenta</p>
      <span className="rating-read-btn">Pročitajte sve recenzije na Googleu</span>
    </a>
  );
}
