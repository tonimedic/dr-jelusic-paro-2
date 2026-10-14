import { useEffect, useState } from "react";
import { WA_LINK } from "../lib/site.constants";
import { WhatsAppGlyph } from "../lib/whatsapp-glyph";

export function StickyChrome() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("rezervacija");

    let heroVisible = false;

    const update = () => {
      setShowBar(!heroVisible);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
        }
        update();
      },
      { threshold: 0 },
    );
    if (hero) io.observe(hero);
    update();

    return () => io.disconnect();
  }, []);

  function scrollToHero() {
    const hero = document.getElementById("rezervacija");
    hero?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      const input = document.getElementById("ime-hero") as HTMLInputElement | null;
      input?.focus();
    }, 500);
  }

  return (
    <>
      {/* Mobile sticky bar */}
      <div
        className="sticky-bar"
        aria-hidden={!showBar}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          background: "#1C1B19",
          padding: 2,
          zIndex: 50,
          transition: "opacity 150ms linear",
          opacity: showBar ? 1 : 0,
          pointerEvents: showBar ? "auto" : "none",
        }}
      >
        <button
          type="button"
          onClick={scrollToHero}
          className="btn btn-primary sticky-bar-btn"
          style={{ width: "60%", height: 60, padding: 0, minWidth: 0 }}
        >
          Rezervirajte pregled
        </button>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa sticky-bar-btn"
          style={{ width: "40%", height: 60, padding: 0, minWidth: 0 }}
        >
          <WhatsAppGlyph size={20} style={{ color: "#FFFFFF" }} />
          WhatsApp
        </a>
      </div>

      {/* Desktop floating WhatsApp */}
      <FloatingWhatsApp />
    </>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pišite nam na WhatsApp"
      className="float-wa"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <WhatsAppGlyph size={30} style={{ color: "#FFFFFF" }} />
    </a>
  );
}
