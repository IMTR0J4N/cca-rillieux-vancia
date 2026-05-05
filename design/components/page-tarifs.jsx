/* global React */

const TarifsPage = () => {
  const formules = [
    {
      name: "Sociétaire 1ère année",
      tagline: "Votre première saison au club",
      featured: true,
      prices: { un: 170, deux: 85, licence: 27 },
    },
    {
      name: "Renouvellement",
      tagline: "À partir de la 2ème année",
      featured: false,
      prices: { un: 130, deux: 65, licence: 27 },
    },
  ];

  const horaires = {
    matin: [
      { h: "09h30", n: "Sauvetage", note: "test préalable pour intégrer la section" },
      { h: "09h30", n: "Obéissance", note: "test préalable pour intégrer la section" },
    ],
    apresMidi: [
      { h: "13h30 / 15h00", n: "Chiens adultes", note: "groupe selon niveau et attente" },
      { h: "14h00", n: "Chiots 1ère année", note: "" },
      { h: "15h00", n: "Chiots 2ème année", note: "" },
    ],
  };

  return (
    <Page active="Tarifs & Horaires">
      {/* Page header */}
      <section style={{ padding: "72px 56px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="cca-eyebrow">Adhésion 2025/2026</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1.05, marginTop: 12, fontWeight: 400, maxWidth: 800 }}>
          Tarifs &amp; horaires
        </h1>
        <p style={{ marginTop: 18, color: "var(--ink-2)", fontSize: 17, maxWidth: 640 }}>
          Saison de septembre à juin. Cotisation et licence CUN-CBC obligatoire pour les
          compétiteurs, facultative pour les adhérents.
        </p>
      </section>

      {/* TARIFS — 2 cards */}
      <section style={{ padding: "0 56px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {formules.map((f) => (
            <div key={f.name} style={{
              padding: 36,
              borderRadius: "var(--r-xl)",
              background: f.featured ? "var(--forest)" : "var(--surface)",
              color: f.featured ? "#fbf7ef" : "var(--ink)",
              border: f.featured ? "none" : "1px solid var(--line)",
              boxShadow: f.featured ? "var(--shadow-3)" : "var(--shadow-1)",
              position: "relative",
            }}>
              {f.featured && (
                <span style={{
                  position: "absolute", top: 24, right: 24,
                  background: "var(--terracotta)", color: "#fbf7ef",
                  padding: "4px 12px", borderRadius: 100,
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                }}>Nouveau</span>
              )}
              <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.75, fontWeight: 600 }}>
                {f.tagline}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, marginTop: 8, fontWeight: 500, lineHeight: 1.15 }}>
                {f.name}
              </h3>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 0 }}>
                <Row label="1er chien" value={`${f.prices.un} €`} featured={f.featured} big />
                <Row label="2ème chien" value={`${f.prices.deux} €`} featured={f.featured} />
                <Row label="Licence par chien" value={`${f.prices.licence} €`} featured={f.featured} last />
              </div>

              <a style={{
                marginTop: 28, display: "inline-block",
                padding: "12px 22px", borderRadius: "var(--r-md)",
                background: f.featured ? "#fbf7ef" : "var(--ink)",
                color: f.featured ? "var(--forest-deep)" : "#fbf7ef",
                fontSize: 14, fontWeight: 600,
              }}>S'inscrire à cette formule</a>
            </div>
          ))}
        </div>

        {/* Documents à fournir */}
        <div style={{
          marginTop: 24,
          background: "var(--terracotta-soft)",
          padding: "28px 32px",
          borderRadius: "var(--r-lg)",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 28,
          alignItems: "center",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "var(--r-md)",
            background: "var(--terracotta)", color: "#fbf7ef",
            display: "grid", placeItems: "center", fontSize: 24,
          }}>📋</div>
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, color: "var(--terracotta-deep)" }}>
              Documents à prévoir lors de l'inscription
            </h4>
            <ul style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: "10px 24px", color: "var(--ink-2)", fontSize: 14 }}>
              <li>✓ &nbsp; Copie de la carte ICAD</li>
              <li>✓ &nbsp; Copie du carnet de santé (vaccination à jour)</li>
              <li>✓ &nbsp; Attestation d'assurance responsabilité civile</li>
            </ul>
            <p style={{ marginTop: 12, fontSize: 13, color: "var(--ink-3)", fontStyle: "italic" }}>
              Pour les inscriptions en cours d'année, tarif dégressif. Nous contacter pour les détails.
            </p>
          </div>
        </div>
      </section>

      {/* HORAIRES */}
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", padding: "80px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32 }}>
            <div>
              <div className="cca-eyebrow">Tous les samedis</div>
              <h2 className="cca-h-section">Le planning <em>du club.</em></h2>
            </div>
            <span style={{ fontSize: 14, color: "var(--ink-3)" }}>Sauf jours fériés et vacances scolaires</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <ScheduleBlock title="Matin" subtitle="9h00 — 12h30" items={horaires.matin} icon="☀" />
            <ScheduleBlock title="Après-midi" subtitle="13h30 — 17h00" items={horaires.apresMidi} icon="◐" />
          </div>
        </div>
      </section>

      {/* MAP + ADRESSE + CONTACT */}
      <section style={{ padding: "80px 56px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32 }}>
          <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden", border: "1px solid var(--line)", minHeight: 420, position: "relative" }}>
            {/* Map placeholder — stylized */}
            <div style={{
              width: "100%", height: "100%",
              background: `
                radial-gradient(circle at 65% 45%, rgba(184, 92, 60, 0.18) 0, transparent 8%),
                repeating-linear-gradient(60deg, rgba(61, 90, 61, 0.06) 0 2px, transparent 2px 12px),
                repeating-linear-gradient(-30deg, rgba(122, 90, 58, 0.04) 0 1px, transparent 1px 8px),
                linear-gradient(180deg, #e6ede1 0%, #efe7d5 100%)
              `,
              position: "relative",
              minHeight: 420,
            }}>
              {/* Streets */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none" viewBox="0 0 600 420">
                <path d="M 0 200 Q 200 180, 400 220 T 600 240" stroke="#fbf7ef" strokeWidth="14" fill="none"/>
                <path d="M 100 0 Q 250 200, 280 420" stroke="#fbf7ef" strokeWidth="10" fill="none"/>
                <path d="M 0 80 L 600 90" stroke="#fbf7ef" strokeWidth="6" fill="none" opacity=".7"/>
                <path d="M 380 0 L 410 420" stroke="#fbf7ef" strokeWidth="6" fill="none" opacity=".7"/>
              </svg>
              {/* Pin */}
              <div style={{
                position: "absolute", left: "62%", top: "42%",
                transform: "translate(-50%, -100%)",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50% 50% 50% 0",
                  background: "var(--terracotta)",
                  transform: "rotate(-45deg)",
                  boxShadow: "0 6px 14px rgba(0,0,0,.2)",
                  display: "grid", placeItems: "center",
                }}>
                  <span style={{ transform: "rotate(45deg)", color: "#fbf7ef", fontSize: 18 }}>📍</span>
                </div>
              </div>
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                background: "var(--surface)", padding: "10px 14px",
                borderRadius: "var(--r-sm)", boxShadow: "var(--shadow-2)",
                fontSize: 12, fontWeight: 500,
              }}>
                📍 1180 Chem. de Sathonay Village, Vancia
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="cca-card" style={{ padding: 28 }}>
              <div className="cca-eyebrow" style={{ color: "var(--forest)" }}>Adresse</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 8, fontWeight: 500, lineHeight: 1.3 }}>
                1180 Chemin de Sathonay Village
              </h3>
              <p style={{ color: "var(--ink-2)", marginTop: 4 }}>69140 Rillieux-la-Pape · Vancia</p>
              <a className="cca-btn cca-btn--secondary" style={{ marginTop: 18 }}>
                Itinéraire Google Maps →
              </a>
            </div>
            <div className="cca-card" style={{ padding: 28, background: "var(--forest)", color: "#fbf7ef", borderColor: "transparent" }}>
              <div className="cca-eyebrow" style={{ color: "var(--terracotta-soft)" }}>Contactez-nous</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 8, fontWeight: 500 }}>
                Une question ?
              </h3>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                <a style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "rgba(255,255,255,.1)", borderRadius: "var(--r-md)", fontSize: 14 }}>
                  <span style={{ width: 32, height: 32, background: "rgba(255,255,255,.15)", borderRadius: "50%", display: "grid", placeItems: "center" }}>☎</span>
                  06 11 13 03 52
                </a>
                <a style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "rgba(255,255,255,.1)", borderRadius: "var(--r-md)", fontSize: 13 }}>
                  <span style={{ width: 32, height: 32, background: "rgba(255,255,255,.15)", borderRadius: "50%", display: "grid", placeItems: "center" }}>✉</span>
                  cca.vancia.secretariat@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

const Row = ({ label, value, featured, big, last }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    padding: big ? "16px 0" : "12px 0",
    borderBottom: last ? "none" : `1px solid ${featured ? "rgba(255,255,255,.15)" : "var(--line)"}`,
  }}>
    <span style={{ fontSize: 14, opacity: featured ? 0.85 : 1, color: featured ? "#fbf7ef" : "var(--ink-2)" }}>{label}</span>
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: big ? 32 : 22,
      fontWeight: 500,
    }}>{value}</span>
  </div>
);

const ScheduleBlock = ({ title, subtitle, items, icon }) => (
  <div className="cca-card" style={{ padding: 28 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
      <div style={{
        width: 40, height: 40, borderRadius: "50%",
        background: "var(--forest-soft)", color: "var(--forest)",
        display: "grid", placeItems: "center", fontSize: 18,
      }}>{icon}</div>
      <div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500 }}>{title}</h3>
        <span style={{ fontSize: 13, color: "var(--ink-3)" }}>{subtitle}</span>
      </div>
    </div>
    <ul style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((it, i) => (
        <li key={i} style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          gap: 16,
          padding: "16px 0",
          borderBottom: i === items.length - 1 ? "none" : "1px solid var(--line)",
          alignItems: "baseline",
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--terracotta-deep)", fontWeight: 600 }}>
            {it.h}
          </span>
          <div>
            <div style={{ fontWeight: 500, fontSize: 15 }}>{it.n}</div>
            {it.note && <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{it.note}</div>}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

window.TarifsPage = TarifsPage;
