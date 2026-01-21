import "./Footer.css";

function Footer({
  motto = "",
  lang = "en",
  onLangChange,
  labels = {},
  linkPrefix = "",
  theme = "light",
  onThemeChange,
  currentRoute = "home",
}) {
  const selectLang = (code) => {
    onLangChange?.(code);
  };
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    onThemeChange?.(next);
  };

  const {
    contact = "contact",
    pages = "pages",
    language = "language",
    email = "email",
    linkedin = "linkedin",
    github = "github",
    resume = "resume",
    work = "work",
    about = "about",
    theme: themeLabel = "theme",
    themeToggleDark = "dark mode",
    themeToggleLight = "light mode",
  } = labels;
  const themeActionLabel = theme === "dark" ? themeToggleLight : themeToggleDark;

  const buildInternalHref = (path) => {
    if (!path || path === "/") return linkPrefix || "/";
    return `${linkPrefix}${path}`;
  };

  return (
    <footer className="footer">
      <div className="footer-meta">
        <div className="footer-group">
          <span className="footer-label">{contact}</span>
          <div className="footer-links">
            <a href="mailto:markgobriel@gmail.com">{email}</a>
            <a href="https://linkedin.com/in/markgobriel" target="_blank" rel="noreferrer">
              {linkedin}
            </a>
            <a href="https://github.com/markgobriel" target="_blank" rel="noreferrer">
              {github}
            </a>
            <a href="/Mark_Gobriel_resume.pdf" target="_blank" rel="noreferrer">
              {resume}
            </a>
          </div>
        </div>
        <div className="footer-group">
          <span className="footer-label">{pages}</span>
          <div className="footer-pages">
            <a href={buildInternalHref("/work")} className={currentRoute === "work" ? "is-active" : ""}>{work}</a>
            <a href={buildInternalHref("/about")} className={currentRoute === "about" ? "is-active" : ""}>{about}</a>
          </div>
        </div>
        <div className="footer-group">
          <span className="footer-label">{language}</span>
          <div className="footer-lang" role="group" aria-label={language}>
            <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => selectLang("en")}>
              en
            </button>
            <button type="button" className={lang === "fr" ? "is-active" : ""} onClick={() => selectLang("fr")}>
              fr
            </button>
          </div>
        </div>
        <div className="footer-group">
          <span className="footer-label">{themeLabel}</span>
          <button type="button" className="footer-theme" onClick={toggleTheme}>
            {themeActionLabel}
          </button>
        </div>
        <div className="footer-motto">{motto}</div>
      </div>
    </footer>
  );
}

export default Footer;
