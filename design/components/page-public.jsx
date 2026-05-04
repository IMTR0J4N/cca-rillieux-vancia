/* global React */

const team = [
  { name: "Jean-Jacques", role: "Président · Responsable Sauvetage", img: "assets/images/equipe/2447462495jean-jacques.jpg",
    bio: "Présent depuis 2007 dans le club, il a créé la section sauvetage. Toujours à votre écoute et de bons conseils !" },
  { name: "Annabel", role: "Secrétaire · Monitrice adultes", img: "assets/images/equipe/8630681708annabel.jpg",
    bio: "Responsable des moniteurs et de la section obéissance. Détrompez-vous, ce ne sont pas les chiens qu'elle éduque, mais leurs maîtres !" },
  { name: "André", role: "Vice-président", img: "assets/images/equipe/4293387310andre.jpg",
    bio: "Une connaissance du club sans pareil — c'est notre sage." },
  { name: "Cyrille", role: "Moniteur École du chiot", img: "assets/images/equipe/8429331899cyrille.jpg",
    bio: "Moniteur diplômé École du Chiot et moniteur sauvetage en compétition. La douceur, le calme — c'est le chouchou de nos bébés poilus !" },
  { name: "Antonio", role: "Mc Gyver du club", img: "assets/images/equipe/5233834815antonio.jpg",
    bio: "Notre homme de l'ombre. Une réparation, du bricolage, de l'entretien ? Il sait tout faire ! Également un véritable homme de chien." },
  { name: "Noëlle", role: "Trésorière", img: "assets/images/equipe/3370807258noelle.jpg",
    bio: "Il paraît que sa chienne est la première de la classe en cours ;)" },
  { name: "Fabrice", role: "Moniteur chiens adultes", img: "assets/images/equipe/9449958571fabrice.jpg",
    bio: "Avec lui c'est fou rire assuré pendant les cours !" },
];

const EquipePage = () => (
  <Page active="L'équipe">
    <section style={{ padding: "72px 56px 56px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="cca-eyebrow">Bénévoles passionnés</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1.05, marginTop: 12, fontWeight: 400 }}>
        Membres du bureau<br/>
        <em style={{ color: "var(--forest)", fontStyle: "italic" }}>et moniteurs.</em>
      </h1>
      <p style={{ marginTop: 18, color: "var(--ink-2)", fontSize: 17, maxWidth: 640 }}>
        Le club tourne grâce à des bénévoles. Voici les visages qui vous accueilleront, vous formeront,
        et qui prennent soin du terrain chaque semaine.
      </p>
    </section>

    <section style={{ padding: "0 56px 96px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {team.map((m) => (
          <article key={m.name} className="cca-card" style={{ overflow: "hidden" }}>
            <div style={{ aspectRatio: "1 / 1", overflow: "hidden", background: "var(--surface-2)" }}>
              <ImgOrPH src={m.img} label={m.name} />
            </div>
            <div style={{ padding: "22px 24px 26px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500 }}>{m.name}</h3>
              <div style={{ marginTop: 4, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                            color: "var(--terracotta)", fontWeight: 600 }}>
                {m.role}
              </div>
              <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Page>
);

const HistoirePage = () => (
  <Page active="Histoire du club">
    <section style={{ padding: "72px 56px 32px", maxWidth: 960, margin: "0 auto" }}>
      <div className="cca-eyebrow">Depuis 1959</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1.05, marginTop: 12, fontWeight: 400 }}>
        L'histoire <em style={{ color: "var(--forest)", fontStyle: "italic" }}>du club.</em>
      </h1>
    </section>

    <section style={{ padding: "32px 56px 96px", maxWidth: 960, margin: "0 auto" }}>
      <figure style={{ margin: 0, borderRadius: "var(--r-xl)", overflow: "hidden", border: "1px solid var(--line)" }}>
        <ImgOrPH src="assets/images/histoire-du-club.webp" label="Le terrain du club" style={{ aspectRatio: "16/9" }} />
        <figcaption style={{ padding: "14px 20px", fontSize: 13, color: "var(--ink-3)", background: "var(--surface)" }}>
          Le terrain boisé du club, à Vancia.
        </figcaption>
      </figure>

      <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48 }}>
        <div>
          <div style={{ position: "sticky", top: 24 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 72, color: "var(--terracotta)", fontWeight: 400, lineHeight: 1, fontStyle: "italic" }}>
              1959
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>année de fondation</div>
            <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid var(--line)" }} />
            <ul style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "var(--ink-2)" }}>
              <li><strong style={{ color: "var(--ink)" }}>3 terrains</strong><br/><span style={{ color: "var(--ink-3)" }}>détente, chiots, éducation</span></li>
              <li><strong style={{ color: "var(--ink)" }}>4 disciplines</strong><br/><span style={{ color: "var(--ink-3)" }}>chiots, adultes, sauvetage, obéissance</span></li>
              <li><strong style={{ color: "var(--ink)" }}>Affilié ACT</strong><br/><span style={{ color: "var(--ink-3)" }}>Rhône-Alpes</span></li>
            </ul>
          </div>
        </div>

        <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)" }}>
          <p style={{ fontSize: 22, fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.4, fontStyle: "italic" }}>
            Notre club associatif est situé à Rillieux-la-Pape, sur un terrain boisé,
            ombragé, en pleine nature — et il fonctionne grâce à nos bénévoles.
          </p>
          <p style={{ marginTop: 24 }}>
            Nous avons la chance d'avoir un <strong>terrain de détente</strong>, un <strong>terrain
            réservé aux chiots</strong>, et un <strong>grand terrain d'éducation</strong>.
          </p>
          <p style={{ marginTop: 18 }}>
            Nous sommes affiliés à l'Association Canine Territoriale Rhône-Alpes.
          </p>
          <p style={{ marginTop: 18 }}>
            Notre club a une belle histoire puisqu'il existe depuis 1959, ce qui fait de lui l'un
            des plus vieux clubs canins en Rhône-Alpes.
          </p>
        </div>
      </div>
    </section>
  </Page>
);

const ActualitesPage = () => {
  const news = [
    { title: "C'est la rentrée !!!", date: "04 sept. 2024", img: "assets/images/actualites/9729768703forum.jpg",
      excerpt: "Le club fait sa rentrée. Forum des associations le 7 septembre, inscriptions avec Annabel de 14h à 16h. Reprise des cours le 14 septembre." },
    { title: "Concours de sauvetage de Paray-le-Monial", date: "24 mai 2024", img: "assets/images/actualites/766083888sanka.jpg",
      excerpt: "Une partie de l'équipe sauvetage en sortie au concours du club de Paray ce week-end. Envie de découvrir la discipline ? Venez en parler à Cyrille ou Jean-Jacques." },
    { title: "Voici la nouvelle équipe du comité", date: "09 janv. 2024", img: "assets/images/actualites/2687171090equipe.jpg",
      excerpt: "Notre nouvelle équipe de comité ! De gauche à droite : Fabrice, Noëlle, Annabel, Jean-Jacques, Marie-Ange, André, Cyrille, Antonio et notre regretté barman Guy." },
    { title: "Sortie d'entraînement Sanka", date: "12 oct. 2023", img: "assets/images/actualites/2112855702IMG_5252.jpg",
      excerpt: "Belle journée d'entraînement avec Sanka et l'équipe sauvetage. Conditions parfaites, chiens motivés." },
  ];
  return (
    <Page active="Accueil">
      <section style={{ padding: "72px 56px 32px", maxWidth: 1280, margin: "0 auto" }}>
        <a style={{ fontSize: 14, color: "var(--ink-3)" }}>← Retour à l'accueil</a>
        <div className="cca-eyebrow" style={{ marginTop: 14 }}>Archives</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1.05, marginTop: 12, fontWeight: 400 }}>
          Nos actualités.
        </h1>
      </section>

      <section style={{ padding: "32px 56px 96px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {news.map((n, i) => (
            <article key={i} className="cca-card">
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <ImgOrPH src={n.img} label={n.title} />
              </div>
              <div style={{ padding: 28 }}>
                <span className="cca-pill cca-pill--neutral">{n.date}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, marginTop: 12, fontWeight: 500, lineHeight: 1.25 }}>
                  {n.title}
                </h3>
                <p style={{ marginTop: 12, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>{n.excerpt}</p>
                <a style={{ marginTop: 18, display: "inline-block", color: "var(--forest)", fontWeight: 600, fontSize: 14 }}>
                  Lire la suite →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 56 }}>
          {["←", "1", "2", "3", "...", "8", "→"].map((p, i) => (
            <a key={i} style={{
              minWidth: 40, height: 40, borderRadius: "var(--r-sm)",
              display: "grid", placeItems: "center",
              background: p === "1" ? "var(--forest)" : "var(--surface)",
              color: p === "1" ? "#fbf7ef" : "var(--ink-2)",
              border: "1px solid var(--line)",
              fontSize: 14, fontWeight: 500, padding: "0 12px",
            }}>{p}</a>
          ))}
        </div>
      </section>
    </Page>
  );
};

window.EquipePage = EquipePage;
window.HistoirePage = HistoirePage;
window.ActualitesPage = ActualitesPage;
