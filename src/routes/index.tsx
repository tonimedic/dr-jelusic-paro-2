import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FormBlock } from "../components/form-block";
import { GoogleRating } from "../components/google-rating";
import { StickyChrome } from "../components/sticky-chrome";
import { SymptomsSection } from "../components/symptoms-section";
import { CertificatesSection } from "../components/certificates-section";
import { TeamSection } from "../components/team-section";
import { MapButtons } from "../components/map-buttons";
import { WorkingHours } from "../components/working-hours";
import { PHOTO_PANORAMA, PHONE_HREF } from "../lib/site.constants";

const GTM_SNIPPET =
  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T376S9KJ');";

const TRACKING_SNIPPET =
  "(function(){try{var p=new URLSearchParams(window.location.search);var keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid'];keys.forEach(function(k){var v=p.get(k);if(v){sessionStorage.setItem('tp_'+k,v);}});var adset=p.get('Ad set');if(adset){sessionStorage.setItem('tp_ad_set',adset);}var paramMap={utm_source:'utm_source',utm_medium:'utm_medium',utm_campaign:'utm_campaign',utm_content:'utm_content',utm_term:'utm_term',fbclid:'fbclid',gclid:'gclid',ad_set:'Ad set'};window.__resolveTrackingParams=function(){var out={utm_source:'',utm_medium:'',utm_campaign:'',utm_content:'',utm_term:'',fbclid:'',gclid:'',ad_set:''};Object.keys(paramMap).forEach(function(k){var urlVal=p.get(paramMap[k]);var stored=sessionStorage.getItem('tp_'+k);out[k]=urlVal||stored||'';});return out;};}catch(e){window.__resolveTrackingParams=function(){return{utm_source:'',utm_medium:'',utm_campaign:'',utm_content:'',utm_term:'',fbclid:'',gclid:'',ad_set:''};};}})();";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "noindex, nofollow" },
      { title: "Parodontološki pregled uz popust | Institut Dentalna Jelušić" },
      {
        name: "description",
        content:
          "25 % popusta na terapiju desni i 50 % na prvi specijalistički parodontološki pregled. Za rezervacije do 31.10.2026.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { children: "window.dataLayer = window.dataLayer || [];" },
      { children: GTM_SNIPPET },
      { children: TRACKING_SNIPPET },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      <SiteHeader />

      {/* 1. HERO */}
      <section style={{ background: "#1C1B19", color: "#FFFFFF" }}>
        <div className="hero-wrap">
          {/* Offer text (left column on desktop, top band on mobile) */}
          <div className="hero-offer">
            <h1 className="hero-h1">
              <span className="gold">25 %</span> popusta na terapiju desni do 31.10.
            </h1>
            <p className="hero-desc">
              Prvi pregled upola cijene. Ostavite ime i broj, nazovemo Vas i dogovorimo termin.
            </p>
          </div>

          {/* Form block (rendered ONCE; placement handled by CSS) */}
          <div className="hero-form-slot">
            <FormBlock position="hero" asCard />
          </div>
        </div>
      </section>

      {/* 1b. CERTIFICIRANA KLINIKA — odmah ispod forme */}
      <CertificatesSection />

      {/* 2. SYMPTOMS */}
      <SymptomsSection />

      {/* 3. GOOGLE RATING */}
      <section className="section" style={{ background: "#F4F3F1", padding: "40px 20px" }}>
        <GoogleRating />
      </section>

      {/* 4. ŠTO DOBIVATE (merged) */}
      <section className="section" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: 28 }}>
            Što dobivate
          </h2>
          <div className="get-grid">
            {/* Tile 1 — dominant, dark, full width */}
            <div className="get-tile get-tile-dark">
              <div className="get-tile-num gold">25 %</div>
              <p className="get-tile-title get-tile-title-light">popusta na terapiju desni</p>
              <p className="get-tile-line get-tile-line-light">
                Za terapiju koju preporučimo na pregledu.
              </p>
            </div>
            {/* Tile 2 — light */}
            <div className="get-tile get-tile-light">
              <div className="get-tile-num get-tile-num-ink">50 %</div>
              <p className="get-tile-title">na prvi specijalistički pregled</p>
            </div>
            {/* Tile 3 — light, photo on top */}
            <div className="get-tile get-tile-light">
              <img
                src={PHOTO_PANORAMA}
                alt="Pregled panoramske snimke zuba"
                loading="lazy"
                className="get-tile-photo"
              />
              <div className="get-tile-body">
                <div className="get-tile-num get-tile-num-ink">45 min</div>
                <p className="get-tile-title">pregled i panoramska snimka</p>
                <p className="get-tile-line">Plan terapije odmah, u ruke.</p>
              </div>
            </div>
          </div>
          <p className="urgency-line" style={{ marginTop: 28 }}>
            Pregled radi specijalist parodontologije, zato je broj termina u listopadu ograničen.
          </p>
        </div>
      </section>

      {/* 4b. TIM — neposredno iznad FAQ */}
      <TeamSection />

      {/* 5. FAQ */}
      <section className="section" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 className="h2" style={{ marginBottom: 8 }}>
            Najčešća pitanja
          </h2>
          <Faq />
        </div>
      </section>

      <SiteFooter />
      <StickyChrome />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T376S9KJ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </div>
  );
}

type FaqItem = { q: string; a: React.ReactNode };

function Faq() {
  const groups: { heading: string; items: FaqItem[] }[] = [
    {
      heading: "O pregledu",
      items: [
        {
          q: "Što je parodontološki pregled?",
          a: "Pregled zubnog mesa i kosti koja drži zube. Specijalist provjeri desni oko svakog zuba i kaže Vam je li potrebna terapija.",
        },
        {
          q: "Što dobivam na pregledu?",
          a: "Panoramsku snimku zuba, pregled desni oko svakog zuba, razgovor o nalazu i plan terapije u ruke.",
        },
        { q: "Koliko traje pregled?", a: "Oko 45 minuta." },
        {
          q: "Boli li pregled?",
          a: "Pregled je nježan. Ako ste osjetljivi, recite nam na početku i prilagodit ćemo se.",
        },
        {
          q: "Trebam li se pripremiti?",
          a: "Posebna priprema nije potrebna. Ponesite popis lijekova koje uzimate i stare nalaze ako ih imate.",
        },
        {
          q: "Tko radi pregled?",
          a: "Specijalist parodontologije iz našeg tima.",
        },
      ],
    },
    {
      heading: "Popust i cijena",
      items: [
        {
          q: "Koliki je popust?",
          a: "25 % na terapiju desni koju preporučimo na pregledu. Uz to 50 % na prvi specijalistički pregled.",
        },
        { q: "Do kada vrijedi ponuda?", a: "Za rezervacije do 31.10.2026." },
        {
          q: "Kako dobivam popust na terapiju?",
          a: "Na pregledu dobivate plan terapije. Popust od 25 % vrijedi za terapiju iz tog plana. Točne uvjete dobivate uz plan.",
        },
        {
          q: "Koliko košta pregled?",
          a: "Točnu cijenu kažemo Vam kad Vas nazovemo. Popust od 50 % odbija se od redovne cijene pregleda.",
        },
        {
          q: "Je li pregled besplatan?",
          a: "Ne. Ovo je specijalistički pregled, a u listopadu ga plaćate upola manje.",
        },
        {
          q: "Moram li odmah započeti terapiju?",
          a: "Ne. Plan dobivate odmah, a o terapiji odlučujete u miru.",
        },
      ],
    },
    {
      heading: "Termin i dolazak",
      items: [
        {
          q: "Kako rezerviram termin?",
          a: (
            <>
              Ostavite ime i broj u formi. Nazovemo Vas radnim danom i dogovorimo termin. Možete nam
              pisati i na WhatsApp ili nazvati{" "}
              <a href={PHONE_HREF} style={{ color: "#1C1B19", textDecoration: "underline" }}>
                051 718 050
              </a>
              .
            </>
          ),
        },
        {
          q: "Kada radite?",
          a: <WorkingHours />,
        },
        {
          q: "Gdje se nalazite?",
          a: (
            <>
              <p style={{ margin: "0 0 4px" }}>Matuljska cesta 1, 51410 Opatija.</p>
              <MapButtons />
            </>
          ),
        },
        {
          q: "Ne živim u Opatiji. Kako to organizirati?",
          a: "Pacijenti nam dolaze iz cijele Hrvatske. Recite nam odakle dolazite i termin složimo prema Vašem putu. Radimo i subotom.",
        },
        {
          q: "Mogu li se javiti porukom?",
          a: "Da, na WhatsApp. Odgovaramo radnim danom.",
        },
      ],
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  let runningIdx = 0;

  return (
    <div>
      {groups.map((g) => {
        const groupStart = runningIdx;
        runningIdx += g.items.length;
        return (
          <div key={g.heading}>
            <p className="faq-group-sub">{g.heading}</p>
            {g.items.map((item, i) => {
              const idx = groupStart + i;
              const isOpen = openIdx === idx;
              return (
                <div key={idx}>
                  <button
                    type="button"
                    className="faq-item-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="faq-answer">{item.a}</div>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
