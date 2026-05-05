/* global React */

// ============================================================
// HOME PAGE
// ============================================================
const HomePage = () => {
  const [actIndex, setActIndex] = React.useState(0);
  const activities = [
    {
      title: "Éducation chiots",
      tag: "École du chiot",
      img: "assets/images/activites/education.webp",
      desc: "De 2 à 12 mois, on pose les bases dans la douceur. Socialisation, premiers ordres, propreté, marche en laisse — votre chiot apprend en jouant.",
    },
    {
      title: "Éducation chiens adultes",
      tag: "Tous niveaux",
      img: "assets/images/activites/education.webp",
      desc: "Que votre chien débute ou qu'il ait besoin d'un cadre, nos moniteurs adaptent les exercices. Rappel, marche au pied, gestion des émotions.",
    },
    {
      title: "Sauvetage en compétition",
      tag: "Compétition",
      img: "assets/images/activites/sauvetage.webp",
      desc: "Une discipline exigeante et passionnante. Le chien apprend à pister, retrouver et secourir des personnes. Test préalable nécessaire.",
    },
    {
      title: "Obéissance",
      tag: "Compétition",
      img: "assets/images/activites/obeissance.webp",
      desc: "Précision, complicité, finesse. L'obéissance pousse le travail du binôme maître-chien à son plus haut niveau. Test préalable nécessaire.",
    },
  ];
  const a = activities[actIndex];

  return (
    <Page active="Accueil">
      {/* HERO */}
      <section style={{
        position: "relative",
        height: 560,
        backgroundImage: "url(assets/images/header.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(42,37,32,0.15) 0%, rgba(42,37,32,0.55) 100%)",
        }} />
        <div style={{
          position: "absolute",
          left: 56, right: 56, bottom: 48,
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 32,
          alignItems: "end",
        }}>
          <div style={{
            background: "var(--surface)",
            padding: "36px 40px",
            borderRadius: "var(--r-xl)",
            boxShadow: "var(--shadow-3)",
          }}>
            <div className="cca-eyebrow">Rillieux-la-Pape · 69140</div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: 56, lineHeight: 1.05,
              fontWeight: 400, marginTop: 12,
              letterSpacing: "-0.015em",
            }}>
              Le club canin <em style={{ color: "var(--forest)", fontStyle: "italic" }}>familial</em><br/>
              au cœur de la nature.
            </h1>
            <p style={{ marginTop: 18, fontSize: 16, color: "var(--ink-2)", maxWidth: 520, lineHeight: 1.6 }}>
              Éducation canine, sauvetage et obéissance depuis 1959 — sur un terrain boisé,
              avec des bénévoles passionnés, et tous les samedis.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <a className="cca-btn cca-btn--primary cca-btn--lg">Tarifs &amp; horaires →</a>
              <a className="cca-btn cca-btn--secondary cca-btn--lg">Découvrir les activités</a>
            </div>
          </div>
          <div style={{
            display: "flex", flexDirection: "column", gap: 14,
            paddingBottom: 8, color: "#fbf7ef",
          }}>
            <div style={{
              background: "rgba(251,247,239,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(251,247,239,0.3)",
              borderRadius: "var(--r-md)",
              padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85 }}>
                Prochain rendez-vous
              </div>
              <div style={{ marginLeft: "auto", fontFamily: "var(--font-display)", fontSize: 18 }}>
                Samedi 9h30
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTUALITÉ */}
      <section style={{ padding: "96px 56px 64px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32 }}>
          <div>
            <div className="cca-eyebrow">Dernière actualité</div>
            <h2 className="cca-h-section">Ce qu'il se passe <em>au club.</em></h2>
          </div>
          <a className="cca-btn cca-btn--ghost">Voir les anciennes actualités →</a>
        </div>

        <article style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 0,
          background: "var(--surface)",
          borderRadius: "var(--r-xl)",
          overflow: "hidden",
          border: "1px solid var(--line)",
        }}>
          <ImgOrPH src="assets/images/actualites/9729768703forum.jpg" label="forum"
            style={{ minHeight: 380 }} />
          <div style={{ padding: "44px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <span className="cca-pill cca-pill--accent">Rentrée</span>
              <span className="cca-pill cca-pill--neutral">04 sept. 2024</span>
            </div>
            <h3 style={{ fontSize: 32, fontFamily: "var(--font-display)", lineHeight: 1.15, fontWeight: 500 }}>
              C'est la rentrée !!!
            </h3>
            <p style={{ marginTop: 18, color: "var(--ink-2)", lineHeight: 1.65, fontSize: 15 }}>
              Le club fait sa rentrée ! Nous serons présents au forum des associations de Rillieux le samedi
              7 septembre. Toutes les inscriptions se feront par l'intermédiaire d'Annabel, présente au club
              de 14h à 16h. Reprise des cours le samedi 14 septembre.
            </p>
            <a style={{ marginTop: 24, color: "var(--forest)", fontWeight: 600, fontSize: 14 }}>
              Lire la suite →
            </a>
          </div>
        </article>
      </section>

      {/* ACTIVITÉS */}
      <section style={{
        padding: "64px 56px 96px",
        background: "var(--surface-2)",
        borderTop: "1px solid var(--line)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 32 }}>
            <div className="cca-eyebrow">Nos activités</div>
            <h2 className="cca-h-section">Quatre disciplines, <em>une passion.</em></h2>
          </div>

          {/* Tab triggers */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {activities.map((act, i) => (
              <button key={act.title}
                onClick={() => setActIndex(i)}
                style={{
                  padding: "10px 18px",
                  background: i === actIndex ? "var(--forest)" : "var(--surface)",
                  color: i === actIndex ? "#fbf7ef" : "var(--ink-2)",
                  border: `1px solid ${i === actIndex ? "var(--forest)" : "var(--line)"}`,
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "inherit",
                }}>
                {act.title}
              </button>
            ))}
          </div>

          {/* Active activity card */}
          <article style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            background: "var(--surface)",
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            border: "1px solid var(--line)",
          }}>
            <ImgOrPH src={a.img} label={a.title} style={{ minHeight: 360 }} />
            <div style={{ padding: 44, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="cca-pill" style={{ alignSelf: "flex-start" }}>{a.tag}</span>
              <h3 style={{ fontSize: 32, fontFamily: "var(--font-display)", marginTop: 14, lineHeight: 1.15, fontWeight: 500 }}>
                {a.title}
              </h3>
              <p style={{ marginTop: 16, color: "var(--ink-2)", lineHeight: 1.65, fontSize: 15 }}>
                {a.desc}
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
                <a className="cca-btn cca-btn--primary">Plus d'infos</a>
                <a className="cca-btn cca-btn--ghost">Tarifs →</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{
        padding: "80px 56px",
        background: "var(--bg)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="cca-eyebrow">Vous voulez plus d'infos ?</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1.1, marginTop: 12, fontWeight: 400 }}>
            Venez nous rencontrer<br/>
            <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>un samedi.</em>
          </h2>
          <p style={{ marginTop: 18, color: "var(--ink-2)", fontSize: 16 }}>
            La meilleure façon de découvrir le club, c'est de pousser le portail.
            On vous accueille avec un café (pour vous) et de l'eau fraîche (pour votre chien).
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
            <a className="cca-btn cca-btn--accent cca-btn--lg">Voir tarifs &amp; horaires</a>
            <a className="cca-btn cca-btn--secondary cca-btn--lg">☎ &nbsp; 06 11 13 03 52</a>
          </div>
        </div>
      </section>
    </Page>
  );
};

window.HomePage = HomePage;
