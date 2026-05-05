/* global React */

// ============= ADMIN SHELL =============
const AdminShell = ({ active, children, width = 1280 }) => (
  <div style={{ width, minHeight: "100%", background: "var(--bg)", display: "grid", gridTemplateColumns: "260px 1fr" }}>
    <aside style={{
      background: "var(--forest-deep)", color: "#e7e0d2",
      padding: "28px 22px", display: "flex", flexDirection: "column", gap: 24,
      position: "sticky", top: 0, alignSelf: "start", minHeight: "100vh",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 40, height: 40, background: "rgba(255,255,255,.1)", borderRadius: "50%", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontStyle: "italic", color: "#fbf7ef", fontWeight: 600 }}>cca</div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "#fbf7ef", fontWeight: 500 }}>Admin</div>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8c0a8" }}>CCA Vancia</div>
        </div>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[
          { name: "Tableau de bord", icon: "▦" },
          { name: "Actualités", icon: "✦" },
          { name: "Tarifs", icon: "€" },
          { name: "Horaires", icon: "◷" },
          { name: "Équipe", icon: "♟" },
          { name: "Admins", icon: "🛡" },
        ].map((it) => {
          const isActive = it.name === active;
          return (
            <a key={it.name} style={{
              padding: "10px 12px",
              fontSize: 14,
              borderRadius: "var(--r-sm)",
              display: "flex", alignItems: "center", gap: 12,
              background: isActive ? "rgba(255,255,255,.1)" : "transparent",
              color: isActive ? "#fbf7ef" : "#c8c0a8",
              fontWeight: isActive ? 600 : 500,
            }}>
              <span style={{ width: 18, opacity: 0.85, fontSize: 13 }}>{it.icon}</span>
              {it.name}
            </a>
          );
        })}
      </nav>

      <div style={{ marginTop: "auto", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 4px" }}>
          <div style={{ width: 32, height: 32, background: "var(--terracotta)", borderRadius: "50%", display: "grid", placeItems: "center", color: "#fbf7ef", fontWeight: 600, fontSize: 13 }}>JJ</div>
          <div style={{ fontSize: 13, lineHeight: 1.2 }}>
            <div style={{ color: "#fbf7ef" }}>Jean-Jacques</div>
            <div style={{ color: "#c8c0a8", fontSize: 11 }}>👑 Super-admin</div>
          </div>
        </div>
        <a style={{ display: "block", marginTop: 8, padding: "8px 12px", fontSize: 13, color: "#c8c0a8", borderRadius: "var(--r-sm)" }}>
          ↪ Déconnexion
        </a>
      </div>
    </aside>

    <main style={{ padding: "32px 40px", overflow: "auto" }}>{children}</main>
  </div>
);

// ============= LOGIN =============
const AdminLoginPage = () => (
  <div style={{
    width: 1280, minHeight: 800, background: "var(--bg)",
    display: "grid", gridTemplateColumns: "1fr 1fr",
  }}>
    <div style={{
      backgroundImage: `linear-gradient(135deg, rgba(45,70,48,.85), rgba(45,70,48,.95)), url(assets/images/header.webp)`,
      backgroundSize: "cover", backgroundPosition: "center",
      padding: 56, color: "#fbf7ef",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.15)", borderRadius: "50%", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}>cca</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>CCA Rillieux-Vancia</div>
      </div>
      <div>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8c0a8" }}>Espace réservé</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 52, lineHeight: 1.05, marginTop: 12, fontWeight: 400 }}>
          Gestion<br/>du club.
        </h1>
        <p style={{ marginTop: 18, color: "#c8c0a8", maxWidth: 400, fontSize: 15 }}>
          Connectez-vous pour gérer les actualités, l'équipe, les tarifs et les horaires.
        </p>
      </div>
      <div style={{ fontSize: 12, color: "#c8c0a8" }}>© 2026 CCA Vancia · Accès restreint</div>
    </div>

    <div style={{ display: "grid", placeItems: "center", padding: 40 }}>
      <form style={{ width: 380, display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500 }}>Connexion</h2>
        <p style={{ color: "var(--ink-2)", marginTop: -4, fontSize: 14 }}>Entrez vos identifiants administrateur.</p>

        <div className="cca-field" style={{ marginTop: 12 }}>
          <label>Nom d'admin</label>
          <input className="cca-input" placeholder="Jean-Jacques" />
        </div>
        <div className="cca-field">
          <label>Mot de passe</label>
          <div style={{ position: "relative" }}>
            <input type="password" className="cca-input" placeholder="••••••••" defaultValue="password123" />
            <button type="button" style={{ position: "absolute", right: 10, top: 8, padding: 6, color: "var(--ink-3)" }}>👁</button>
          </div>
        </div>
        <button className="cca-btn cca-btn--primary cca-btn--lg" style={{ marginTop: 12, justifyContent: "center" }}>Connexion →</button>
        <div style={{ marginTop: 12, padding: 14, borderRadius: "var(--r-md)", background: "var(--surface-2)", fontSize: 13, color: "var(--ink-3)", display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span>ⓘ</span>
          <span>Pas de compte ? Demandez l'accès auprès du président du club.</span>
        </div>
      </form>
    </div>
  </div>
);

// ============= DASHBOARD =============
const AdminDashboardPage = () => {
  const cards = [
    { title: "Actualités", count: 24, icon: "✦", color: "var(--terracotta)" },
    { title: "Tarifs", count: 2, icon: "€", color: "var(--forest)" },
    { title: "Horaires", count: 5, max: 10, icon: "◷", color: "var(--terracotta)" },
    { title: "Équipe", count: 7, max: 50, icon: "♟", color: "var(--forest)" },
    { title: "Admins", count: 3, icon: "🛡", color: "var(--terracotta)" },
  ];
  return (
    <AdminShell active="Tableau de bord">
      <header style={{ marginBottom: 32 }}>
        <div className="cca-eyebrow">Espace admin</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 40, marginTop: 8, fontWeight: 500 }}>
          Bonjour Jean-Jacques 👋
        </h1>
        <p style={{ marginTop: 8, color: "var(--ink-2)" }}>Gérez le contenu du site depuis cet espace.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {cards.map((c) => (
          <a key={c.title} className="cca-card" style={{
            padding: 28,
            display: "flex", flexDirection: "column", gap: 16,
            cursor: "pointer", minHeight: 180,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "var(--r-md)",
              background: `color-mix(in oklab, ${c.color} 15%, transparent)`,
              color: c.color,
              display: "grid", placeItems: "center", fontSize: 20,
            }}>{c.icon}</div>
            <div style={{ marginTop: "auto" }}>
              <div style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}>Gestion des</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, marginTop: 4, fontWeight: 500 }}>{c.title}</h3>
              <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500 }}>
                  {c.count}{c.max && <span style={{ fontSize: 14, color: "var(--ink-3)", fontWeight: 400 }}> / {c.max}</span>}
                </span>
                <span style={{ fontSize: 13, color: "var(--forest)", fontWeight: 600 }}>Gérer →</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, marginBottom: 16 }}>Activité récente</h2>
        <div className="cca-card" style={{ padding: 0, overflow: "hidden" }}>
          {[
            { who: "Annabel", what: "a publié l'actualité « C'est la rentrée !!! »", when: "il y a 2 jours" },
            { who: "Jean-Jacques", what: "a modifié le tarif Sociétaire 1ère année", when: "il y a 5 jours" },
            { who: "Noëlle", what: "a ajouté Fabrice à l'équipe", when: "il y a 1 semaine" },
          ].map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "auto 1fr auto",
              gap: 14, padding: "16px 22px", alignItems: "center",
              borderBottom: i === 2 ? "none" : "1px solid var(--line)",
            }}>
              <div style={{ width: 32, height: 32, background: "var(--forest-soft)", color: "var(--forest)", borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600 }}>
                {row.who.slice(0,2).toUpperCase()}
              </div>
              <div style={{ fontSize: 14 }}>
                <strong>{row.who}</strong> <span style={{ color: "var(--ink-2)" }}>{row.what}</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{row.when}</div>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
};

window.AdminLoginPage = AdminLoginPage;
window.AdminDashboardPage = AdminDashboardPage;
window.AdminShell = AdminShell;
