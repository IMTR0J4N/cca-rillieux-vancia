/* global React */

const ManagerHeader = ({ title, subtitle, count, countLabel, addLabel }) => (
  <header style={{ marginBottom: 24 }}>
    <a style={{ fontSize: 13, color: "var(--ink-3)" }}>← Retour au tableau de bord</a>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 12 }}>
      <div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500 }}>{title}</h1>
        <p style={{ marginTop: 6, color: "var(--ink-2)", fontSize: 14 }}>{subtitle}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span className="cca-pill cca-pill--neutral">{count} {countLabel}</span>
        <a className="cca-btn cca-btn--primary">+ {addLabel}</a>
      </div>
    </div>
  </header>
);

const Th = ({ children, style }) => (
  <th style={{
    textAlign: "left", padding: "14px 22px",
    fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--ink-3)",
    ...style,
  }}>{children}</th>
);

const RowActions = () => (
  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
    <a className="cca-btn cca-btn--secondary cca-btn--sm">✎ Modifier</a>
    <a className="cca-btn cca-btn--sm" style={{ background: "var(--danger-soft)", color: "var(--danger)" }}>✕</a>
  </div>
);

const ActualitesManagerPage = () => {
  const items = [
    { name: "C'est la rentrée !!!", date: "04 sept. 2024", img: "assets/images/actualites/9729768703forum.jpg" },
    { name: "Concours de sauvetage de Paray-le-Monial", date: "24 mai 2024", img: "assets/images/actualites/766083888sanka.jpg" },
    { name: "Voici la nouvelle équipe du comité", date: "09 janv. 2024", img: "assets/images/actualites/2687171090equipe.jpg" },
    { name: "Sortie d'entraînement Sanka", date: "12 oct. 2023", img: "assets/images/actualites/2112855702IMG_5252.jpg" },
  ];
  return (
    <AdminShell active="Actualités">
      <ManagerHeader title="Gestion des actualités" subtitle="Publiez, modifiez et archivez les actualités du club."
        count={items.length} countLabel="actualités" addLabel="Nouvelle actualité" />
      <div className="cca-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--line)" }}>
            <Th style={{ width: 80 }}></Th><Th>Titre</Th><Th style={{ width: 160 }}>Date</Th><Th style={{ width: 200, textAlign: "right" }}>Actions</Th>
          </tr></thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid var(--line)" }}>
                <td style={{ padding: "12px 22px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "var(--r-sm)", overflow: "hidden", background: "var(--surface-2)" }}>
                    <ImgOrPH src={it.img} label={it.name} />
                  </div>
                </td>
                <td style={{ padding: "16px 12px", fontSize: 14, fontWeight: 500 }}>{it.name}</td>
                <td style={{ padding: "16px 12px", fontSize: 13, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>{it.date}</td>
                <td style={{ padding: "12px 22px" }}><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
};

const EquipeManagerPage = () => {
  const items = [
    { ord: 1, name: "Jean-Jacques", role: "Président · Sauvetage", img: "assets/images/equipe/2447462495jean-jacques.jpg" },
    { ord: 2, name: "André", role: "Vice-président", img: "assets/images/equipe/4293387310andre.jpg" },
    { ord: 3, name: "Annabel", role: "Secrétaire · Adultes", img: "assets/images/equipe/8630681708annabel.jpg" },
    { ord: 4, name: "Cyrille", role: "École du chiot", img: "assets/images/equipe/8429331899cyrille.jpg" },
    { ord: 5, name: "Antonio", role: "Mc Gyver du club", img: "assets/images/equipe/5233834815antonio.jpg" },
    { ord: 6, name: "Noëlle", role: "Trésorière", img: "assets/images/equipe/3370807258noelle.jpg" },
    { ord: 7, name: "Fabrice", role: "Moniteur adultes", img: "assets/images/equipe/9449958571fabrice.jpg" },
  ];
  return (
    <AdminShell active="Équipe">
      <ManagerHeader title="Gestion de l'équipe" subtitle="Glissez pour réorganiser. 50 emplacements maximum."
        count={`${items.length} sur 50`} countLabel="" addLabel="Nouveau membre" />
      <div className="cca-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--line)" }}>
            <Th style={{ width: 70 }}>#</Th><Th style={{ width: 80 }}></Th><Th>Nom</Th><Th>Rôle</Th><Th style={{ width: 200, textAlign: "right" }}>Actions</Th>
          </tr></thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid var(--line)" }}>
                <td style={{ padding: "12px 22px", color: "var(--ink-3)", fontSize: 13, fontFamily: "var(--font-mono)" }}>
                  ⋮⋮ {it.ord.toString().padStart(2, "0")}
                </td>
                <td style={{ padding: "12px 0" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", background: "var(--surface-2)" }}>
                    <ImgOrPH src={it.img} label={it.name} />
                  </div>
                </td>
                <td style={{ padding: "16px 12px", fontWeight: 500 }}>{it.name}</td>
                <td style={{ padding: "16px 12px", fontSize: 14, color: "var(--ink-2)" }}>{it.role}</td>
                <td style={{ padding: "12px 22px" }}><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
};

const TarifsManagerPage = () => {
  const items = [
    { name: "Sociétaire 1ère année", un: 170, deux: 85, lic: 27 },
    { name: "Renouvellement 2ème année", un: 130, deux: 65, lic: 27 },
  ];
  return (
    <AdminShell active="Tarifs">
      <ManagerHeader title="Gestion des tarifs" subtitle="Tarifs affichés sur la page publique."
        count={items.length} countLabel="formules" addLabel="Nouveau tarif" />
      <div className="cca-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--line)" }}>
            <Th>Nom</Th><Th style={{ width: 130 }}>1er chien</Th><Th style={{ width: 130 }}>2ème chien</Th><Th style={{ width: 130 }}>Licence</Th><Th style={{ width: 200, textAlign: "right" }}>Actions</Th>
          </tr></thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid var(--line)" }}>
                <td style={{ padding: "18px 22px", fontWeight: 500 }}>{it.name}</td>
                <td style={{ padding: "18px 12px", fontFamily: "var(--font-display)", fontSize: 18 }}>{it.un} €</td>
                <td style={{ padding: "18px 12px", fontFamily: "var(--font-display)", fontSize: 18 }}>{it.deux} €</td>
                <td style={{ padding: "18px 12px", fontFamily: "var(--font-display)", fontSize: 18 }}>{it.lic} €</td>
                <td style={{ padding: "12px 22px" }}><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
};

const HorairesManagerPage = () => {
  const items = [
    { temps: "Matin", h: "09h30", n: "Sauvetage (test préalable)" },
    { temps: "Matin", h: "09h30", n: "Obéissance (test préalable)" },
    { temps: "Après-midi", h: "13h30 / 15h00", n: "Chiens adultes (groupe selon niveau)" },
    { temps: "Après-midi", h: "14h00", n: "Chiots 1ère année" },
    { temps: "Après-midi", h: "15h00", n: "Chiots 2ème année" },
  ];
  return (
    <AdminShell active="Horaires">
      <ManagerHeader title="Gestion des horaires" subtitle="Planning du samedi."
        count={`${items.length} sur 10`} countLabel="" addLabel="Nouveau créneau" />
      <div className="cca-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--line)" }}>
            <Th style={{ width: 130 }}>Moment</Th><Th style={{ width: 160 }}>Heure</Th><Th>Activité</Th><Th style={{ width: 200, textAlign: "right" }}>Actions</Th>
          </tr></thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid var(--line)" }}>
                <td style={{ padding: "16px 22px" }}>
                  <span className="cca-pill" style={{
                    background: it.temps === "Matin" ? "var(--terracotta-soft)" : "var(--forest-soft)",
                    color: it.temps === "Matin" ? "var(--terracotta-deep)" : "var(--forest-deep)",
                  }}>{it.temps}</span>
                </td>
                <td style={{ padding: "16px 12px", fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600 }}>{it.h}</td>
                <td style={{ padding: "16px 12px", fontSize: 14 }}>{it.n}</td>
                <td style={{ padding: "12px 22px" }}><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
};

const AdminsManagerPage = () => {
  const items = [
    { name: "Jean-Jacques", role: 1, last: "Aujourd'hui" },
    { name: "Noëlle", role: 1, last: "Hier" },
    { name: "Annabel", role: 0, last: "Il y a 3 jours" },
  ];
  return (
    <AdminShell active="Admins">
      <ManagerHeader title="Gestion des admins" subtitle="Personnes ayant accès à l'espace de gestion."
        count={items.length} countLabel="admins" addLabel="Nouvel admin" />
      <div className="cca-card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--line)" }}>
            <Th>Nom</Th><Th style={{ width: 200 }}>Rôle</Th><Th style={{ width: 200 }}>Dernière connexion</Th><Th style={{ width: 200, textAlign: "right" }}>Actions</Th>
          </tr></thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid var(--line)" }}>
                <td style={{ padding: "16px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--forest-soft)", color: "var(--forest)", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 600 }}>
                      {it.name.slice(0,2).toUpperCase()}
                    </div>
                    <span style={{ fontWeight: 500 }}>{it.name}</span>
                  </div>
                </td>
                <td style={{ padding: "16px 12px" }}>
                  {it.role === 1
                    ? <span className="cca-pill" style={{ background: "var(--terracotta-soft)", color: "var(--terracotta-deep)" }}>👑 Super-admin</span>
                    : <span className="cca-pill cca-pill--neutral">Admin</span>}
                </td>
                <td style={{ padding: "16px 12px", fontSize: 13, color: "var(--ink-3)" }}>{it.last}</td>
                <td style={{ padding: "12px 22px" }}><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
};

window.ActualitesManagerPage = ActualitesManagerPage;
window.EquipeManagerPage = EquipeManagerPage;
window.TarifsManagerPage = TarifsManagerPage;
window.HorairesManagerPage = HorairesManagerPage;
window.AdminsManagerPage = AdminsManagerPage;
