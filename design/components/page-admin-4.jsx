/* global React */

// ============= EDIT FORMS (pre-filled) =============

const EditActualitePage = () => (
  <FormShell active="Actualités" title="Modifier l'actualité" subtitle="Édition de « C'est la rentrée !!! » publiée le 04 sept. 2024.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="cca-field">
        <label>Titre de l'actualité</label>
        <input className="cca-input" defaultValue="C'est la rentrée !!!" />
      </div>
      <div className="cca-field">
        <label>Description</label>
        <textarea className="cca-textarea" defaultValue="Le club ouvre ses portes pour les inscriptions le samedi 7 septembre dès 14h. Le forum des associations de Rillieux-la-Pape se tiendra le même jour, venez nous rencontrer ! Reprise des cours le 14 septembre." />
      </div>
      <FilePicker filename="9729768703forum.jpg" hasPreview />
      <div style={{ padding: 14, borderRadius: "var(--r-md)", background: "var(--terracotta-soft)", fontSize: 13, color: "var(--terracotta-deep)", display: "flex", gap: 10 }}>
        <span>⚠</span>
        <span>Cette actualité est <strong>en avant sur la page d'accueil</strong>. Les modifications seront visibles immédiatement.</span>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost" style={{ color: "var(--danger)" }}>✕ Supprimer</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
          <button className="cca-btn cca-btn--primary">Enregistrer les modifications</button>
        </div>
      </div>
    </form>
  </FormShell>
);

const EditEquipierPage = () => (
  <FormShell active="Équipe" title="Modifier le membre" subtitle="Édition de la fiche d'Annabel · Position 3.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div className="cca-field">
          <label>Nom</label>
          <input className="cca-input" defaultValue="Annabel" />
        </div>
        <div className="cca-field">
          <label>Position dans la liste</label>
          <select className="cca-select" defaultValue="3ème position">
            <option>1ère position</option>
            <option>2ème position</option>
            <option>3ème position</option>
            <option>4ème position</option>
          </select>
        </div>
      </div>
      <div className="cca-field">
        <label>Description / Rôle</label>
        <textarea className="cca-textarea" defaultValue="Secrétaire du club et monitrice section Adultes. C'est elle qu'il faut voir pour les inscriptions et les renouvellements. Au club depuis 2012." />
      </div>
      <FilePicker filename="8630681708annabel.jpg" hasPreview />
      <div style={{ display: "flex", gap: 10, justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost" style={{ color: "var(--danger)" }}>✕ Supprimer</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
          <button className="cca-btn cca-btn--primary">Enregistrer</button>
        </div>
      </div>
    </form>
  </FormShell>
);

const EditTarifPage = () => (
  <FormShell active="Tarifs" title="Modifier le tarif" subtitle="Édition de la formule « Sociétaire 1ère année ».">
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
        <select className="cca-select" defaultValue="1ère formule"><option>1ère formule</option><option>2ème formule</option></select>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost" style={{ color: "var(--danger)" }}>✕ Supprimer</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
          <button className="cca-btn cca-btn--primary">Enregistrer</button>
        </div>
      </div>
    </form>
  </FormShell>
);

const EditHorairePage = () => (
  <FormShell active="Horaires" title="Modifier le créneau" subtitle="Édition du créneau « Sauvetage · 09h30 ».">
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
        <input className="cca-input" defaultValue="09h30" />
      </div>
      <div className="cca-field">
        <label>Nom de l'activité</label>
        <input className="cca-input" defaultValue="Sauvetage (test préalable pour intégrer la section)" />
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost" style={{ color: "var(--danger)" }}>✕ Supprimer</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
          <button className="cca-btn cca-btn--primary">Enregistrer</button>
        </div>
      </div>
    </form>
  </FormShell>
);

// ============= ADMIN INSERT / EDIT =============

const InsertAdminPage = () => (
  <FormShell active="Admins" title="Nouvel admin" subtitle="Cette personne aura accès à l'espace de gestion.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="cca-field">
        <label>Nom de l'admin</label>
        <input className="cca-input" placeholder="Prénom" defaultValue="Marie-Ange" />
      </div>
      <div className="cca-field">
        <label>Mot de passe</label>
        <input type="password" className="cca-input" placeholder="••••••••" />
        <small style={{ fontSize: 12, color: "var(--ink-3)" }}>Minimum 8 caractères, dont une majuscule et un chiffre.</small>
      </div>
      <div className="cca-field">
        <label>Confirmation du mot de passe</label>
        <input type="password" className="cca-input" placeholder="••••••••" />
      </div>
      <div className="cca-field">
        <label>Rôle</label>
        <div style={{ display: "grid", gap: 10 }}>
          <label style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 14, borderRadius: "var(--r-md)", background: "var(--surface-2)", border: "1px solid var(--line)", cursor: "pointer" }}>
            <input type="radio" name="role" defaultChecked style={{ marginTop: 3 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Admin</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>Peut gérer le contenu (actualités, équipe, tarifs, horaires).</div>
            </div>
          </label>
          <label style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 14, borderRadius: "var(--r-md)", background: "var(--surface-2)", border: "1px solid var(--line)", cursor: "pointer" }}>
            <input type="radio" name="role" style={{ marginTop: 3 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>👑 Super-admin</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>Peut en plus créer, modifier et supprimer les autres admins.</div>
            </div>
          </label>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
        <button className="cca-btn cca-btn--primary">Créer l'admin</button>
      </div>
    </form>
  </FormShell>
);

const EditAdminPage = () => (
  <FormShell active="Admins" title="Modifier l'admin" subtitle="Édition du compte de Annabel.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="cca-field">
        <label>Nom de l'admin</label>
        <input className="cca-input" defaultValue="Annabel" />
      </div>
      <div className="cca-field">
        <label>Mot de passe</label>
        <input type="password" className="cca-input" placeholder="Laisser vide pour conserver le mot de passe actuel" />
        <small style={{ fontSize: 12, color: "var(--ink-3)" }}>Renseignez ce champ uniquement pour réinitialiser le mot de passe.</small>
      </div>
      <div className="cca-field">
        <label>Rôle</label>
        <div style={{ display: "grid", gap: 10 }}>
          <label style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 14, borderRadius: "var(--r-md)", background: "var(--forest-soft)", border: "1.5px solid var(--forest)", cursor: "pointer" }}>
            <input type="radio" name="role" defaultChecked style={{ marginTop: 3 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Admin</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>Peut gérer le contenu (actualités, équipe, tarifs, horaires).</div>
            </div>
          </label>
          <label style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 14, borderRadius: "var(--r-md)", background: "var(--surface-2)", border: "1px solid var(--line)", cursor: "pointer" }}>
            <input type="radio" name="role" style={{ marginTop: 3 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>👑 Super-admin</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>Peut en plus créer, modifier et supprimer les autres admins.</div>
            </div>
          </label>
        </div>
      </div>
      <div style={{ padding: 14, borderRadius: "var(--r-md)", background: "var(--surface-2)", fontSize: 13, color: "var(--ink-3)" }}>
        Dernière connexion : <strong style={{ color: "var(--ink)" }}>il y a 3 jours</strong>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost" style={{ color: "var(--danger)" }}>✕ Supprimer le compte</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
          <button className="cca-btn cca-btn--primary">Enregistrer</button>
        </div>
      </div>
    </form>
  </FormShell>
);

// ============= VALIDATION ERRORS =============

const errInputStyle = {
  borderColor: "var(--danger)",
  background: "color-mix(in oklab, var(--danger) 6%, var(--surface))",
};

const ErrLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4, fontSize: 12, color: "var(--danger)", fontWeight: 500 }}>
    <span style={{
      width: 14, height: 14, borderRadius: "50%", background: "var(--danger)",
      color: "#fbf7ef", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700,
    }}>!</span>
    {children}
  </div>
);

const ValidationActualitePage = () => (
  <FormShell active="Actualités" title="Nouvelle actualité" subtitle="Cette actualité sera mise en avant sur la page d'accueil.">
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      <div style={{
        padding: 16, borderRadius: "var(--r-md)",
        background: "color-mix(in oklab, var(--danger) 8%, var(--surface))",
        border: "1px solid color-mix(in oklab, var(--danger) 30%, transparent)",
        display: "flex", gap: 12, alignItems: "flex-start",
      }}>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--danger)", color: "#fbf7ef", display: "grid", placeItems: "center", fontWeight: 700, flexShrink: 0 }}>!</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: "var(--danger)" }}>Le formulaire contient 3 erreurs</div>
          <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4 }}>Veuillez corriger les champs en rouge ci-dessous avant de publier.</div>
        </div>
      </div>

      <div className="cca-field">
        <label>Titre de l'actualité</label>
        <input className="cca-input" style={errInputStyle} defaultValue="" placeholder="C'est la rentrée !!!" />
        <ErrLabel>Le titre est obligatoire.</ErrLabel>
      </div>

      <div className="cca-field">
        <label>Description</label>
        <textarea className="cca-textarea" style={errInputStyle} defaultValue="Trop court." />
        <ErrLabel>La description doit contenir au moins 20 caractères (actuellement : 11).</ErrLabel>
      </div>

      <div className="cca-field">
        <label>Image <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>· JPG, PNG ou WebP, max 5 Mo</span></label>
        <div style={{
          border: "2px dashed var(--danger)",
          borderRadius: "var(--r-md)",
          padding: 20,
          background: "color-mix(in oklab, var(--danger) 5%, var(--surface))",
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: 16, alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "var(--danger)" }}>video-club.mp4 — format invalide</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>Seuls les formats JPG, PNG et WebP sont acceptés.</div>
          </div>
          <button className="cca-btn cca-btn--secondary cca-btn--sm" type="button">Remplacer</button>
        </div>
        <ErrLabel>Le fichier doit être une image (JPG, PNG ou WebP).</ErrLabel>
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
        <button type="button" className="cca-btn cca-btn--ghost">Annuler</button>
        <button className="cca-btn cca-btn--primary" disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>Publier l'actualité</button>
      </div>
    </form>
  </FormShell>
);

const ValidationLoginPage = () => (
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
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 52, lineHeight: 1.05, marginTop: 12, fontWeight: 400 }}>Gestion<br/>du club.</h1>
      </div>
      <div style={{ fontSize: 12, color: "#c8c0a8" }}>© 2026 CCA Vancia</div>
    </div>

    <div style={{ display: "grid", placeItems: "center", padding: 40 }}>
      <form style={{ width: 380, display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500 }}>Connexion</h2>

        <div style={{
          padding: 14, borderRadius: "var(--r-md)",
          background: "color-mix(in oklab, var(--danger) 8%, var(--surface))",
          border: "1px solid color-mix(in oklab, var(--danger) 30%, transparent)",
          fontSize: 13, color: "var(--danger)",
          display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{ fontWeight: 700 }}>!</span>
          <div>
            <strong>Identifiants incorrects.</strong>
            <div style={{ color: "var(--ink-2)", marginTop: 2 }}>Vérifiez votre nom d'admin et votre mot de passe.</div>
          </div>
        </div>

        <div className="cca-field">
          <label>Nom d'admin</label>
          <input className="cca-input" defaultValue="Jean-Jacques" />
        </div>
        <div className="cca-field">
          <label>Mot de passe</label>
          <input type="password" className="cca-input" style={errInputStyle} defaultValue="••••••" />
          <ErrLabel>3 tentatives restantes avant verrouillage temporaire.</ErrLabel>
        </div>
        <button className="cca-btn cca-btn--primary cca-btn--lg" style={{ marginTop: 8, justifyContent: "center" }}>Connexion →</button>
      </form>
    </div>
  </div>
);

window.EditActualitePage = EditActualitePage;
window.EditEquipierPage = EditEquipierPage;
window.EditTarifPage = EditTarifPage;
window.EditHorairePage = EditHorairePage;
window.InsertAdminPage = InsertAdminPage;
window.EditAdminPage = EditAdminPage;
window.ValidationActualitePage = ValidationActualitePage;
window.ValidationLoginPage = ValidationLoginPage;
