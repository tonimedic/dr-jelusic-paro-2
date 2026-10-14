import { Link } from "@tanstack/react-router";
import { LOGO_URL, PHONE_DISPLAY, PHONE_HREF } from "../lib/site.constants";

export function SiteHeader() {
  return (
    <header style={{ background: "#1C1B19", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>
      <div
        className="site-header-bar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        <Link to="/" aria-label="Institut Dentalna Jelušić — naslovnica">
          <img
            src={LOGO_URL}
            alt="Institut Dentalna Jelušić"
            className="header-logo"
            style={{ display: "block", borderRadius: 0 }}
          />
        </Link>
        <a
          href={PHONE_HREF}
          style={{
            color: "#FFFFFF",
            fontSize: 17,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
