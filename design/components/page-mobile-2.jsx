/* global React */

// ============= MOBILE NAV (reused) =============
const MobileNav2 = ({ open = false }) => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "14px 20px", background: "var(--surface)",
    borderBottom: "1px solid var(--line)",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 36, height: 36, background: "var(--forest)", color: "#fbf7ef", borderRadius: "50%", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: 18 }}>cca</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 14, lineHeight: 1.15, fontWeight: 500 }}>
        CCA Vancia
        <small style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", fontWeight: 500 }}>Depuis 1959</small>
      </div>
    </div>
    <button style={{ width: 40, height: 40, borderRadius: "var(--r-sm)", background: "var(--surface-2)", color: "var(--ink)", fontSize: 18 }}>☰</button>
  </div>
);

// ============= MOBILE — ÉQUIPE =============
const MobileEquipe = () => {
  const team = [
    { name: "Jean-Jacques", role: "Président · Section sauvetage", img: "assets/images/equipe/2447462495jean-jacques.jpg", desc: "Avec ses bouviers bernois, il guide la section sauvetage depuis 15 ans." },
    { name: "André", role: "Vice-président", img: "assets/images/equipe/4293387310andre.jpg" },
    { name: "Annabel", role: "Secrétaire · Section adultes", img: "assets/images/equipe/8630681708annabel.jpg" },
    { name: "Cyrille", role: "École du chiot", img: "assets/images/equipe/8429331899cyrille.jpg" },
    { name: "Antonio", role: "Mc Gyver du club", img: "assets/images/equipe/5233834815antonio.jpg" },
    { name: "Noëlle", role: "Trésorière", img: "assets/images/equipe/3370807258noelle.jpg" },
    { name: "Fabrice", role: "Moniteur adultes", img: "assets/images/equipe/9449958571fabrice.jpg" },
  ];
  return (
    <>
      <MobileNav2 />
      <section style={{ padding: "24px 20px 8px" }}>
        <div className="cca-eyebrow">7 bénévoles</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 34, marginTop: 8, fontWeight: 400, lineHeight: 1.05 }}>
          L'équipe<br/>
          <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>du club.</em>
        </h1>
        <p style={{ marginTop: 12, color: "var(--ink-2)", fontSize: 13, lineHeight: 1.6 }}>
          Sept passionnés bénévoles qui font vivre le club chaque samedi depuis le terrain de Vancia.
        </p>
      </section>

      {/* Featured — president */}
      <article style={{ margin: "16px 20px 24px", borderRadius: "var(--r-lg)", overflow: "hidden", background: "var(--surface)", boxShadow: "var(--shadow-1)" }}>
        <div style={{ aspectRatio: "4/3" }}>
          <ImgOrPH src={team[0].img} label={team[0].name} />
        </div>
        <div style={{ padding: 18 }}>
          <span className="cca-pill" style={{ background: "var(--terracotta-soft)", color: "var(--terracotta-deep)" }}>Président</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 10, fontWeight: 500 }}>{team[0].name}</h2>
          <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{team[0].role}</div>
          <p style={{ marginTop: 10, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55 }}>{team[0].desc}</p>
        </div>
      </article>

      <section style={{ padding: "0 20px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {team.slice(1).map((t, i) => (
          <article key={i} style={{ background: "var(--surface)", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "var(--shadow-1)" }}>
            <div style={{ aspectRatio: "1/1" }}>
              <ImgOrPH src={t.img} label={t.name} />
            </div>
            <div style={{ padding: "10px 12px 14px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, lineHeight: 1.1 }}>{t.name}</h3>
              <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 2, lineHeight: 1.3 }}>{t.role}</div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

// ============= MOBILE — TARIFS / MAP & CONTACT =============
const MobileMapContact = () => (
  <>
    <MobileNav2 />
    {/* Map block */}
    <section style={{ padding: "20px 16px 8px" }}>
      <div className="cca-eyebrow">Le terrain</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, marginTop: 6, fontWeight: 500 }}>
        Nous trouver
      </h1>
      <p style={{ marginTop: 8, color: "var(--ink-2)", fontSize: 13 }}>
        Au cœur du parc de Vancia, dans une clairière qui sent la résine.
      </p>
    </section>

    <div style={{
      margin: "12px 16px",
      height: 220, borderRadius: "var(--r-lg)",
      overflow: "hidden", position: "relative",
      background: `
        radial-gradient(ellipse 80% 60% at 30% 70%, color-mix(in oklab, var(--forest) 25%, var(--surface-2)) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 75% 30%, color-mix(in oklab, var(--terracotta) 20%, var(--surface-2)) 0%, transparent 60%),
        var(--surface-2)`,
      border: "1px solid var(--line)",
    }}>
      {/* fake roads */}
      <svg viewBox="0 0 400 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
        <path d="M0 90 Q 120 60 200 100 T 400 130" stroke="var(--ink-3)" strokeWidth="2" fill="none" />
        <path d="M0 160 L 400 140" stroke="var(--ink-3)" strokeWidth="1.5" fill="none" />
        <path d="M180 0 L 220 220" stroke="var(--ink-3)" strokeWidth="1" fill="none" />
      </svg>
      {/* Pin */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -100%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{ background: "var(--surface)", padding: "6px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, boxShadow: "var(--shadow-2)", whiteSpace: "nowrap" }}>
          🐾 CCA Vancia
        </div>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--terracotta)", border: "3px solid var(--surface)", boxShadow: "var(--shadow-2)" }} />
      </div>
      <button style={{ position: "absolute", top: 12, right: 12, padding: "6px 12px", background: "var(--surface)", borderRadius: "var(--r-sm)", fontSize: 12, fontWeight: 500, boxShadow: "var(--shadow-1)", display: "flex", alignItems: "center", gap: 6 }}>
        ↗ Itinéraire
      </button>
    </div>

    {/* Address card */}
    <section style={{ padding: "12px 16px 0" }}>
      <div className="cca-card" style={{ padding: 18 }}>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: "var(--r-sm)", background: "var(--forest-soft)", color: "var(--forest)", display: "grid", placeItems: "center", fontSize: 18, flexShrink: 0 }}>📍</div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500 }}>Adresse du club</h3>
            <address style={{ marginTop: 4, fontStyle: "normal", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
              Chemin de Vancia<br/>
              69140 Rillieux-la-Pape
            </address>
            <a style={{ marginTop: 10, display: "inline-block", color: "var(--forest)", fontSize: 13, fontWeight: 600 }}>Voir sur Google Maps →</a>
          </div>
        </div>
      </div>
    </section>

    {/* Contact buttons */}
    <section style={{ padding: "20px 16px 32px" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500 }}>Nous contacter</h2>
      <p style={{ marginTop: 6, color: "var(--ink-2)", fontSize: 13 }}>
        Une question avant de s'inscrire ? On répond vite.
      </p>

      <a style={{
        marginTop: 16, display: "flex", alignItems: "center", gap: 14, padding: "16px 18px",
        background: "var(--forest)", color: "#fbf7ef", borderRadius: "var(--r-md)",
        boxShadow: "var(--shadow-1)",
      }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.15)", display: "grid", placeItems: "center", fontSize: 18 }}>☎</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, opacity: 0.8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Téléphone</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, marginTop: 2 }}>06 11 13 03 52</div>
        </div>
        <span style={{ opacity: 0.7 }}>→</span>
      </a>

      <a style={{
        marginTop: 10, display: "flex", alignItems: "center", gap: 14, padding: "16px 18px",
        background: "var(--surface)", color: "var(--ink)", borderRadius: "var(--r-md)",
        border: "1px solid var(--line)",
      }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--forest-soft)", color: "var(--forest)", display: "grid", placeItems: "center", fontSize: 18 }}>✉</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Email</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>cca.vancia.secretariat@gmail.com</div>
        </div>
        <span style={{ color: "var(--ink-3)" }}>→</span>
      </a>

      <div style={{
        marginTop: 18, padding: 16, background: "var(--terracotta-soft)",
        borderRadius: "var(--r-md)", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55,
      }}>
        <strong style={{ color: "var(--terracotta-deep)" }}>Le mieux,</strong> c'est de venir au club un samedi après-midi rencontrer Annabel.
        Sans rendez-vous, on accueille tout le monde.
      </div>
    </section>
  </>
);

window.MobileEquipe = MobileEquipe;
window.MobileMapContact = MobileMapContact;
