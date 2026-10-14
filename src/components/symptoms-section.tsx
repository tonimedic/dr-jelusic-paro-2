const SYMPTOMS = [
  "desni krvare kad perete zube ili koristite konac",
  "zub se klima ili se pomaknuo",
  "desni su se povukle, zubi izgledaju duži",
  "zadah ne prolazi ni nakon pranja",
  "zubi su osjetljivi na hladno",
];

function scrollToForm() {
  const el = document.getElementById("rezervacija");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    const input = document.getElementById("ime-hero") as HTMLInputElement | null;
    input?.focus();
  }, 500);
}

export function SymptomsSection() {
  return (
    <section className="section" style={{ background: "#FFFFFF" }}>
      <div className="container">
        <p className="symptom-eyebrow">ČESTI ZNAKOVI</p>
        <h2 className="h2">Prepoznajete li nešto od ovoga?</h2>

        <div className="symptom-cards">
          {SYMPTOMS.map((s) => (
            <div className="symptom-card" key={s}>
              <span className="symptom-card-dot" />
              <p className="symptom-card-text">{s}</p>
            </div>
          ))}
        </div>

        <h3 className="symptom-sub">Zašto ne čekati</h3>
        <p className="symptom-body">
          Krvarenje desni često je <strong>prvi znak upale</strong>. Upala obično ne boli, pa se
          pregled lako odgađa. Ako zahvati kost koja drži zub,{" "}
          <strong>kost se ne vraća sama</strong>. Zato je liječenje na vrijeme jednostavnije i
          povoljnije od kasnijeg nadoknađivanja zuba.
        </p>

        <button type="button" className="btn btn-primary symptom-cta" onClick={scrollToForm}>
          Rezervirajte pregled
        </button>
      </div>
    </section>
  );
}
