import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { WhatsAppButton, CallButton } from "../components/buttons";
import { FloatingWhatsApp } from "../components/sticky-chrome";

const GTM_SNIPPET =
  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T376S9KJ');";

const TRACKING_SNIPPET =
  "(function(){try{var p=new URLSearchParams(window.location.search);var keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid'];keys.forEach(function(k){var v=p.get(k);if(v){sessionStorage.setItem('tp_'+k,v);}});var adset=p.get('Ad set');if(adset){sessionStorage.setItem('tp_ad_set',adset);}var paramMap={utm_source:'utm_source',utm_medium:'utm_medium',utm_campaign:'utm_campaign',utm_content:'utm_content',utm_term:'utm_term',fbclid:'fbclid',gclid:'gclid',ad_set:'Ad set'};window.__resolveTrackingParams=function(){var out={utm_source:'',utm_medium:'',utm_campaign:'',utm_content:'',utm_term:'',fbclid:'',gclid:'',ad_set:''};Object.keys(paramMap).forEach(function(k){var urlVal=p.get(paramMap[k]);var stored=sessionStorage.getItem('tp_'+k);out[k]=urlVal||stored||'';});return out;};}catch(e){window.__resolveTrackingParams=function(){return{utm_source:'',utm_medium:'',utm_campaign:'',utm_content:'',utm_term:'',fbclid:'',gclid:'',ad_set:''};};}})();";

const THANK_YOU_SNIPPET =
  "window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'thank_you_view',form_source:'paro-lp-c-kratko'});";

export const Route = createFileRoute("/hvala")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "noindex, nofollow" },
      { title: "Hvala | Institut Dentalna Jelušić" },
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
      { children: THANK_YOU_SNIPPET },
    ],
  }),
  component: Thanks,
});

function Thanks() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#1C1B19",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SiteHeader />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 560,
          margin: "0 auto",
          padding: "48px 20px",
          width: "100%",
        }}
      >
        <h1
          className="thanks-h1"
          style={{
            fontFamily: "Instrument Serif, serif",
            fontSize: 44,
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.1,
            color: "#1C1B19",
          }}
        >
          Hvala. Zaprimili smo Vaš upit.
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            color: "#1C1B19",
            fontSize: 20,
            margin: "16px 0 24px",
            lineHeight: 1.5,
          }}
        >
          Nazovemo Vas radnim danom i zajedno dogovorimo termin.
        </p>
        <div
          style={{
            background: "#F4F3F1",
            borderLeft: "2px solid #7A6A45",
            padding: 20,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 1.5,
            color: "#1C1B19",
            width: "100%",
          }}
        >
          Vaša ponuda: 25 % popusta na terapiju desni i 50 % na prvi specijalistički pregled, za
          rezervacije do 31.10.2026.
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            color: "#1C1B19",
            fontSize: 20,
            margin: "24px 0 16px",
            lineHeight: 1.5,
          }}
        >
          Ako Vam je draže, javite se sami:
        </p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
          <WhatsAppButton />
          <CallButton />
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
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
