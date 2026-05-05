/* global React */

// ============= MOBILE FRAME =============
const MobileFrame = ({ children, label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    <div style={{
      width: 390, height: 844,
      background: "#1a1a1a", borderRadius: 48, padding: 12,
      boxShadow: "0 30px 60px rgba(60,40,20,.18), 0 4px 12px rgba(60,40,20,.1)",
    }}>
      <div style={{
        width: "100%", height: "100%",
        background: "var(--bg)", borderRadius: 36, overflow: "hidden",
        position: "relative",
      }}>
        {/* Status bar */}
        <div style={{
          height: 44, padding: "12px 28px",
          display: "flex", justifyContent: "space-between",
          fontSize: 14, fontWeight: 600, color: "var(--ink)",
          position: "relative", zIndex: 5,
        }}>
          <span>9:41</span>
          <span>● ▮▮ 100%</span>
        </div>
        <div style={{ height: "calc(100% - 44px)", overflow: "auto" }}>
          {children}
        </div>
      </div>
    </div>
    <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)", letterSpacing: ".05em" }}>
      {label}
    </div>
  </div>
);

// ============= MOBILE NAV =============
const MobileNav = ({ open = false }) => (
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
    <button style={{ width: 40, height: 40, borderRadius: "var(--r-sm)", background: open ? "var(--forest)" : "var(--surface-2)", color: open ? "#fbf7ef" : "var(--ink)", fontSize: 18 }}>
      {open ? "✕" : "☰"}
    </button>
  </div>
);

// ============= MOBILE — HOMEPAGE =============
const MobileHome = () => (
  <>
    <MobileNav />
    {/* Hero */}
    <section style={{
      height: 380, position: "relative",
      backgroundImage: "url(assets/images/header.webp)",
      backgroundSize: "cover", backgroundPosition: "center 35%",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(42,37,32,.1) 0%, rgba(42,37,32,.55) 100%)" }} />
      <div style={{ position: "absolute", left: 16, right: 16, bottom: 16, color: "#fbf7ef" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85 }}>Rillieux-la-Pape</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.05, marginTop: 6, fontWeight: 400 }}>
          Le club canin <em style={{ fontStyle: "italic" }}>familial</em> au cœur de la nature.
        </h1>
      </div>
    </section>
    <div style={{ padding: 16 }}>
      <a className="cca-btn cca-btn--primary" style={{ width: "100%", justifyContent: "center" }}>Tarifs &amp; horaires →</a>
    </div>

    {/* Actualité */}
    <section style={{ padding: "16px 16px 24px" }}>
      <div className="cca-eyebrow">Dernière actualité</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, marginTop: 6, fontWeight: 500 }}>Ce qu'il se passe.</h2>
      <article className="cca-card" style={{ marginTop: 14 }}>
        <div style={{ aspectRatio: "16/9" }}>
          <ImgOrPH src="assets/images/actualites/9729768703forum.jpg" label="forum" />
        </div>
        <div style={{ padding: 18 }}>
          <span className="cca-pill cca-pill--neutral">04 sept. 2024</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, marginTop: 10, fontWeight: 500, lineHeight: 1.2 }}>
            C'est la rentrée !!!
          </h3>
          <p style={{ marginTop: 10, color: "var(--ink-2)", fontSize: 13, lineHeight: 1.55 }}>
            Forum des associations le 7 septembre. Inscriptions avec Annabel.
          </p>
          <a style={{ marginTop: 12, display: "inline-block", color: "var(--forest)", fontWeight: 600, fontSize: 13 }}>Lire la suite →</a>
        </div>
      </article>
    </section>

    {/* Activités */}
    <section style={{ padding: "20px 16px 24px", background: "var(--surface-2)" }}>
      <div className="cca-eyebrow">Nos activités</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 6, fontWeight: 500 }}>Quatre disciplines.</h2>
      <div style={{ display: "flex", gap: 8, marginTop: 14, overflowX: "auto", paddingBottom: 4 }}>
        {["Chiots", "Adultes", "Sauvetage", "Obéissance"].map((t, i) => (
          <button key={t} style={{
            padding: "8px 14px", borderRadius: 100, fontSize: 13, fontWeight: 500,
            background: i === 0 ? "var(--forest)" : "var(--surface)",
            color: i === 0 ? "#fbf7ef" : "var(--ink-2)",
            border: `1px solid ${i === 0 ? "var(--forest)" : "var(--line)"}`,
            whiteSpace: "nowrap", flexShrink: 0,
          }}>{t}</button>
        ))}
      </div>
      <article className="cca-card" style={{ marginTop: 14 }}>
        <div style={{ aspectRatio: "16/10" }}>
          <ImgOrPH src="assets/images/activites/education.webp" label="education" />
        </div>
        <div style={{ padding: 18 }}>
          <span className="cca-pill">École du chiot</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, marginTop: 10, fontWeight: 500 }}>Éducation chiots</h3>
          <p style={{ marginTop: 10, color: "var(--ink-2)", fontSize: 13, lineHeight: 1.55 }}>
            De 2 à 12 mois, on pose les bases dans la douceur — socialisation, premiers ordres.
          </p>
        </div>
      </article>
    </section>

    {/* CTA */}
    <section style={{ padding: "32px 16px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, lineHeight: 1.15, fontWeight: 400 }}>
        Venez nous rencontrer<br/>
        <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>un samedi.</em>
      </h2>
      <a className="cca-btn cca-btn--accent" style={{ marginTop: 18, width: "100%", justifyContent: "center" }}>☎ 06 11 13 03 52</a>
    </section>
  </>
);

// ============= MOBILE — TARIFS =============
const MobileTarifs = () => (
  <>
    <MobileNav />
    <section style={{ padding: "20px 16px" }}>
      <div className="cca-eyebrow">Adhésion 2025/2026</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, marginTop: 8, fontWeight: 400, lineHeight: 1.1 }}>
        Tarifs &amp; horaires
      </h1>
      <p style={{ marginTop: 10, color: "var(--ink-2)", fontSize: 13 }}>
        Saison de septembre à juin. Licence CUN-CBC obligatoire pour les compétiteurs.
      </p>

      {/* Tarif card 1 */}
      <div style={{ marginTop: 20, padding: 22, borderRadius: "var(--r-lg)", background: "var(--forest)", color: "#fbf7ef", position: "relative" }}>
        <span style={{ position: "absolute", top: 16, right: 16, background: "var(--terracotta)", padding: "3px 10px", borderRadius: 100, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Nouveau</span>
        <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.8, fontWeight: 600 }}>Première saison</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 6, fontWeight: 500 }}>Sociétaire 1ère année</h3>
        <div style={{ marginTop: 18 }}>
          <Mrow label="1er chien" value="170 €" big />
          <Mrow label="2ème chien" value="85 €" />
          <Mrow label="Licence par chien" value="27 €" last />
        </div>
      </div>

      <div style={{ marginTop: 12, padding: 22, borderRadius: "var(--r-lg)", background: "var(--surface)", border: "1px solid var(--line)" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-3)", fontWeight: 600 }}>À partir de la 2ème année</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 6, fontWeight: 500 }}>Renouvellement</h3>
        <div style={{ marginTop: 18 }}>
          <Mrow label="1er chien" value="130 €" big />
          <Mrow label="2ème chien" value="65 €" />
          <Mrow label="Licence par chien" value="27 €" last />
        </div>
      </div>

      <div style={{ marginTop: 16, background: "var(--terracotta-soft)", padding: 18, borderRadius: "var(--r-md)" }}>
        <h4 style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--terracotta-deep)", fontWeight: 500 }}>Documents à prévoir</h4>
        <ul style={{ marginTop: 8, fontSize: 13, color: "var(--ink-2)", display: "flex", flexDirection: "column", gap: 4 }}>
          <li>✓ Carte ICAD</li>
          <li>✓ Carnet de santé (vaccins à jour)</li>
          <li>✓ Assurance responsabilité civile</li>
        </ul>
      </div>

      {/* Horaires */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, marginTop: 28, fontWeight: 500 }}>Le planning du samedi</h2>
      <div className="cca-card" style={{ marginTop: 12, padding: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--terracotta-soft)", color: "var(--terracotta-deep)", display: "grid", placeItems: "center" }}>☀</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500 }}>Matin</h3>
        </div>
        <ul style={{ marginTop: 12 }}>
          <li style={{ padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--terracotta-deep)", fontWeight: 600 }}>09h30</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Sauvetage</div>
          </li>
          <li style={{ padding: "10px 0" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--terracotta-deep)", fontWeight: 600 }}>09h30</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Obéissance</div>
          </li>
        </ul>
      </div>
    </section>
  </>
);

const Mrow = ({ label, value, big, last }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    padding: big ? "10px 0" : "8px 0",
    borderBottom: last ? "none" : "1px solid rgba(255,255,255,.15)",
  }}>
    <span style={{ fontSize: 13, opacity: 0.85 }}>{label}</span>
    <span style={{ fontFamily: "var(--font-display)", fontSize: big ? 24 : 17, fontWeight: 500 }}>{value}</span>
  </div>
);

// ============= MOBILE — NAV OPEN =============
const MobileNavOpen = () => (
  <>
    <MobileNav open />
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 6 }}>
      {[
        { name: "Accueil", active: true },
        { name: "Tarifs & Horaires" },
        { name: "Histoire du club" },
        { name: "L'équipe" },
      ].map((l) => (
        <a key={l.name} style={{
          padding: "16px 18px", borderRadius: "var(--r-md)",
          fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500,
          background: l.active ? "var(--forest-soft)" : "transparent",
          color: l.active ? "var(--forest-deep)" : "var(--ink)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          {l.name}
          <span style={{ color: "var(--ink-3)", fontSize: 16 }}>→</span>
        </a>
      ))}
    </div>
    <div style={{ padding: "20px 20px 0", marginTop: 16, borderTop: "1px solid var(--line)" }}>
      <div className="cca-eyebrow">Contact</div>
      <a style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--forest)", color: "#fbf7ef", borderRadius: "var(--r-md)", fontSize: 14 }}>
        <span>☎</span> 06 11 13 03 52
      </a>
      <a style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--surface-2)", borderRadius: "var(--r-md)", fontSize: 13, color: "var(--ink-2)" }}>
        <span>✉</span> cca.vancia.secretariat@gmail.com
      </a>
    </div>
  </>
);

window.MobileFrame = MobileFrame;
window.MobileHome = MobileHome;
window.MobileTarifs = MobileTarifs;
window.MobileNavOpen = MobileNavOpen;
