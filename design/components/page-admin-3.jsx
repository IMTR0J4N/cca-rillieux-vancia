/* global React */

const FormShell = ({ active, title, subtitle, children, returnTo = "Tableau de bord" }) => (
  <AdminShell active={active}>
    <header style={{ marginBottom: 24 }}>
      <a style={{ fontSize: 13, color: "var(--ink-3)" }}>← Retour à la liste</a>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, marginTop: 12 }}>{title}</h1>
      <p style={{ marginTop: 6, color: "var(--ink-2)", fontSize: 14 }}>{subtitle}</p>
    </header>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}>
      <div className="cca-card" style={{ padding: 36 }}>{children}</div>
      <aside className="cca-card" style={{ padding: 24, background: "var(--surface-2)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500 }}>💡 Conseils</h3>
        <ul style={{ marginTop: 12, fontSize: 13, lineHeight: 1.6, color: "var(--ink-2)", display: "flex", flexDirection: "column", gap: 10 }}>
          <li>• Privilégiez des images au format paysage (16:9) pour les actualités.</li>
          <li>• Une description courte et directe fonctionne mieux qu'un long texte.</li>
          <li>• Vérifiez l'orthographe avant de publier.</li>
        </ul>
      </aside>
    </div>
  </AdminShell>
);

const FilePicker = ({ filename, hasPreview }) => (
  <div className="cca-field">
    <label>Image <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>· JPG, PNG ou WebP, max 5 Mo</span></label>
    <div style={{
      border: "2px dashed var(--line-strong)",
      borderRadius: "var(--r-md)",
      padding: 20,
      background: "var(--paper)",
      display: "grid", gridTemplateColumns: hasPreview ? "120px 1fr auto" : "1fr auto",
      gap: 16, alignItems: "center",
    }}>
      {hasPreview && (
        <div style={{ width: 120, height: 90, borderRadius: "var(--r-sm)", overflow: "hidden", background: "var(--surface-2)" }}>
          <ImgOrPH src="assets/images/actualites/9729768703forum.jpg" label="preview" />
        </div>
      )}
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{filename}</div>
        <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>
          {hasPreview ? "1280 × 720 · 245 Ko" : "Glissez-déposez une image ou parcourez"}
        </div>
      </div>
      <button className="cca-btn cca-btn--secondary cca-btn--sm" type="button">Parcourir</button>
    </div>
  </div>
);

const InsertActualitePage = () => (
  <FormShell active="Actualités" title="Nouvelle actualité" subtitle="Cette actualité sera mise en avant sur la page d'accueil.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="cca-field">
        <label>Titre de l'actualité</label>
        <input className="cca-input" placeholder="C'est la rentrée !!!" defaultValue="Rentrée 2026 — inscriptions ouvertes" />
      </div>
      <div className="cca-field">
        <label>Description</label>
        <textarea className="cca-textarea" placeholder="Décrivez l'actualité..." defaultValue="Le club rouvre ses portes le samedi 6 septembre. Inscriptions auprès d'Annabel sur place de 14h à 16h. Reprise des cours dès le 13 septembre, on a hâte de vous revoir !" />
      </div>
      <FilePicker filename="rentree-2026.jpg" hasPreview />
      <div style={{ padding: 14, borderRadius: "var(--r-md)", background: "var(--surface-2)", fontSize: 13, color: "var(--ink-3)", display: "flex", gap: 10 }}>
        <span>ⓘ</span>
        <span>L'ancienne actualité sera remplacée par la nouvelle, mais restera consultable dans les anciennes actualités.</span>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
        <button className="cca-btn cca-btn--primary">Publier l'actualité</button>
      </div>
    </form>
  </FormShell>
);

const InsertEquipierPage = () => (
  <FormShell active="Équipe" title="Nouveau membre d'équipe" subtitle="Cette personne apparaîtra sur la page L'équipe.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div className="cca-field">
          <label>Nom</label>
          <input className="cca-input" placeholder="Prénom" defaultValue="Marie-Ange" />
        </div>
        <div className="cca-field">
          <label>Position dans la liste</label>
          <select className="cca-select" defaultValue="Après Annabel">
            <option>En premier</option>
            <option>Après Jean-Jacques</option>
            <option>Après André</option>
            <option>Après Annabel</option>
            <option>Après Cyrille</option>
            <option>En dernier</option>
          </select>
        </div>
      </div>
      <div className="cca-field">
        <label>Description / Rôle</label>
        <textarea className="cca-textarea" placeholder="Rôle au club, qualités, anecdotes..." defaultValue="Membre du comité depuis 2018. Toujours là pour donner un coup de main au forum des associations et aux journées portes ouvertes." />
      </div>
      <FilePicker filename="marie-ange.jpg" hasPreview={false} />
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
        <button className="cca-btn cca-btn--primary">Ajouter le membre</button>
      </div>
    </form>
  </FormShell>
);

const InsertTarifPage = () => (
  <FormShell active="Tarifs" title="Nouveau tarif" subtitle="Maximum 4 formules. Affichées dans l'ordre choisi.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="cca-field">
        <label>Nom de la formule</label>
        <input className="cca-input" defaultValue="Sociétaire 1ère année" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        <div className="cca-field">
          <label>1er chien (€)</label>
          <input type="number" className="cca-input" defaultValue="170" />
        </div>
        <div className="cca-field">
          <label>2ème chien (€)</label>
          <input type="number" className="cca-input" defaultValue="85" />
        </div>
        <div className="cca-field">
          <label>Licence par chien (€)</label>
          <input type="number" className="cca-input" defaultValue="27" />
        </div>
      </div>
      <div className="cca-field">
        <label>Position</label>
        <select className="cca-select" defaultValue="En second"><option>En premier</option><option>En second</option></select>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
        <button className="cca-btn cca-btn--primary">Créer le tarif</button>
      </div>
    </form>
  </FormShell>
);

const InsertHorairePage = () => (
  <FormShell active="Horaires" title="Nouveau créneau" subtitle="Ajoutez un créneau au planning du samedi.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="cca-field">
        <label>Moment de la journée</label>
        <div style={{ display: "flex", gap: 8 }}>
          {["Matin", "Après-midi"].map((t, i) => (
            <button type="button" key={t} style={{
              flex: 1, padding: "12px 16px", borderRadius: "var(--r-md)",
              background: i === 0 ? "var(--forest)" : "var(--surface-2)",
              color: i === 0 ? "#fbf7ef" : "var(--ink-2)",
              border: i === 0 ? "none" : "1px solid var(--line)",
              fontWeight: 500, fontFamily: "inherit",
            }}>{t}</button>
          ))}
        </div>
      </div>
      <div className="cca-field">
        <label>Heure</label>
        <input className="cca-input" placeholder="09h30" defaultValue="10h30" />
      </div>
      <div className="cca-field">
        <label>Nom de l'activité</label>
        <input className="cca-input" placeholder="Sauvetage (test préalable...)" defaultValue="Atelier marche en laisse" />
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
        <button className="cca-btn cca-btn--primary">Créer le créneau</button>
      </div>
    </form>
  </FormShell>
);

// ============= DELETION MODAL =============
const DeleteModal = () => (
  <div style={{
    width: 1280, minHeight: 800, position: "relative",
    background: "var(--bg)",
  }}>
    {/* Background page (faded) */}
    <div style={{ filter: "blur(2px) brightness(0.95)", pointerEvents: "none" }}>
      <ActualitesManagerPage />
    </div>

    {/* Overlay */}
    <div style={{
      position: "absolute", inset: 0,
      background: "rgba(42, 37, 32, 0.55)",
      display: "grid", placeItems: "center",
      backdropFilter: "blur(2px)",
    }}>
      <div style={{
        width: 460, background: "var(--surface)",
        borderRadius: "var(--r-xl)", boxShadow: "var(--shadow-3)",
        overflow: "hidden",
      }}>
        <div style={{ padding: "32px 32px 8px", textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: "var(--danger-soft)", color: "var(--danger)",
            display: "grid", placeItems: "center", fontSize: 28,
            margin: "0 auto 18px",
          }}>⚠</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, lineHeight: 1.25 }}>
            Supprimer cette actualité ?
          </h2>
          <p style={{ marginTop: 12, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>
            L'actualité <strong style={{ color: "var(--ink)" }}>« C'est la rentrée !!! »</strong> sera
            définitivement supprimée. Cette action est irréversible.
          </p>
        </div>
        <div style={{
          padding: 20, marginTop: 24,
          display: "flex", gap: 10, background: "var(--surface-2)",
          borderTop: "1px solid var(--line)",
        }}>
          <button className="cca-btn cca-btn--secondary" style={{ flex: 1, justifyContent: "center" }}>Annuler</button>
          <button className="cca-btn cca-btn--danger" style={{ flex: 1, justifyContent: "center" }}>Oui, supprimer</button>
        </div>
      </div>
    </div>
  </div>
);

window.InsertActualitePage = InsertActualitePage;
window.InsertEquipierPage = InsertEquipierPage;
window.InsertTarifPage = InsertTarifPage;
window.InsertHorairePage = InsertHorairePage;
window.DeleteModal = DeleteModal;
