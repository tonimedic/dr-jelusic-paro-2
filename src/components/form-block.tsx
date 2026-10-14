import { useState } from "react";
import { PRIVACY_URL } from "../lib/site.constants";
import { normalizePhone, isPhoneValid, submitBooking } from "../lib/submit-booking";
import { PrimaryButton, WhatsAppButton, CallButton } from "./buttons";

type Errors = { ime?: string; telefon?: string; consent?: string };

export function FormBlock({
  position,
  asCard = false,
}: {
  position: "hero" | "dno";
  asCard?: boolean;
}) {
  const [ime, setIme] = useState("");
  const [telefon, setTelefon] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  function validate(): boolean {
    const e: Errors = {};
    if (!ime.trim()) e.ime = "Upišite ime i prezime.";
    if (!isPhoneValid(normalizePhone(telefon))) e.telefon = "Upišite ispravan broj mobitela.";
    if (!consent) e.consent = "Za nastavak potvrdite privolu.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (sending) return;
    if (!validate()) return;
    setSending(true);
    await submitBooking({
      ime: ime.trim(),
      telefon: normalizePhone(telefon),
      position,
    });
  }

  return (
    <div
      id={position === "hero" ? "rezervacija" : "rezervacija-2"}
      className={`form-block${asCard ? " form-block-card" : ""}`}
    >
      <form onSubmit={onSubmit} noValidate className="form-fields">
        <div>
          <label htmlFor={`ime-${position}`} className="field-label">
            Ime i prezime
          </label>
          <input
            id={`ime-${position}`}
            name="ime"
            className="field-input"
            placeholder="npr. Ana Horvat"
            autoComplete="name"
            required
            value={ime}
            onChange={(e) => setIme(e.target.value)}
          />
          {errors.ime && <p className="field-error">{errors.ime}</p>}
        </div>

        <div>
          <label htmlFor={`tel-${position}`} className="field-label">
            Broj mobitela
          </label>
          <input
            id={`tel-${position}`}
            name="telefon"
            type="tel"
            inputMode="tel"
            className="field-input"
            placeholder="npr. 091 234 5678"
            autoComplete="tel"
            required
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
          {errors.telefon && <p className="field-error">{errors.telefon}</p>}
        </div>

        <div>
          <label className="consent-row">
            <input
              type="checkbox"
              className="consent-box"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span className="consent-text">
              Pristajem da me kontaktirate radi termina.{" "}
              <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">
                Politika privatnosti
              </a>
            </span>
          </label>
          {errors.consent && <p className="field-error">{errors.consent}</p>}
        </div>

        <p className="urgency-line">
          Pregled radi specijalist parodontologije, zato je broj termina u listopadu ograničen.
        </p>

        <PrimaryButton type="submit" disabled={sending}>
          {sending ? "Šaljemo" : "Nazovite me"}
        </PrimaryButton>
      </form>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <WhatsAppButton />
        <CallButton label="Nazovite nas" />
      </div>
    </div>
  );
}
