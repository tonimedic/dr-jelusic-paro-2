import {
  GOOGLE_MAPS_URL,
  APPLE_MAPS_URL,
  MAP_ICON_GOOGLE,
  MAP_ICON_APPLE,
} from "../lib/site.constants";

export function MapButtons({ onDark = false }: { onDark?: boolean }) {
  const color = onDark ? "#FFFFFF" : "#1C1B19";
  return (
    <div className="map-btns" style={{ marginTop: 8 }}>
      <a
        className="map-btn"
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ borderColor: color, color, background: "#FFFFFF" }}
      >
        <img src={MAP_ICON_GOOGLE} alt="" width={28} height={28} className="map-btn-logo" />
        <span>Google karte</span>
      </a>
      <a
        className="map-btn"
        href={APPLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ borderColor: color, color, background: "#FFFFFF" }}
      >
        <img src={MAP_ICON_APPLE} alt="" width={28} height={28} className="map-btn-logo" />
        <span>Apple karte</span>
      </a>
    </div>
  );
}
