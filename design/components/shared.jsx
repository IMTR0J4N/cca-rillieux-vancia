/* global React */
const { useState } = React;

// ============= Shared Nav =============
const NavBar = ({ active = "Accueil" }) => {
  const links = [
    { name: "Accueil", url: "#" },
    { name: "Tarifs & Horaires", url: "#" },
    { name: "Histoire du club", url: "#" },
    { name: "L'équipe", url: "#" },
  ];
  return (
    <nav className="cca-nav">
      <div className="cca-nav__brand">
        <div className="cca-nav__mark">cca</div>
        <div className="cca-nav__name">
          Club du chien d'accompagnement
          <small>Rillieux-Vancia · Depuis 1959</small>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className="cca-nav__links">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.url} className={active === l.name ? "is-active" : ""}>{l.name}</a>
            </li>
          ))}
        </ul>
        <div className="cca-nav__contact">
          <a href="#" title="Email">✉</a>
          <a href="#" title="Téléphone">☎</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="cca-footer">
    <div className="cca-footer__brand">
      <div className="mark">c</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#fbf7ef" }}>
        Club du chien<br/>d'accompagnement
      </div>
      <div style={{ fontSize: 12, color: "#c8c0a8", lineHeight: 1.6 }}>
        Association loi 1901<br/>
        Affiliée ACT Rhône-Alpes
      </div>
    </div>
    <div>
      <h3>Contactez-nous</h3>
      <ul>
        <li>☎ &nbsp; 06 11 13 03 52</li>
        <li>✉ &nbsp; cca.vancia.secretariat@gmail.com</li>
        <li>📍 1180 Chem. de Sathonay Village, 69140</li>
      </ul>
    </div>
    <div>
      <h3>Le club</h3>
      <ul>
        <li>Accueil</li>
        <li>Tarifs &amp; Horaires</li>
        <li>Histoire du club</li>
        <li>L'équipe</li>
      </ul>
    </div>
    <div className="cca-footer__bottom">
      <span>© 2026 CCA Rillieux-Vancia · Association fondée en 1959</span>
      <span>Affiliés à l'Association Canine Territoriale Rhône-Alpes</span>
    </div>
  </footer>
);

// ============= Page wrapper =============
const Page = ({ active, children, footer = true, width = 1280, height }) => (
  <div className="cca-page" style={{ width, minHeight: height }}>
    <NavBar active={active} />
    {children}
    {footer && <Footer />}
  </div>
);

// ============= Image placeholder helper =============
const ImgOrPH = ({ src, label, style, className = "" }) => {
  if (src) return <img src={src} alt={label} className={className} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }} />;
  return (
    <div className={`cca-img-placeholder ${className}`} style={{ width: "100%", height: "100%", ...style }}>
      [{label}]
    </div>
  );
};

window.NavBar = NavBar;
window.Footer = Footer;
window.Page = Page;
window.ImgOrPH = ImgOrPH;
