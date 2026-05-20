import { useEffect, useState } from "react";
import site from "../data/site";
import "./PortfolioSite.css";

const SUPERS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

const superscript = (index) => {
  const digits = String(index + 1).split("");
  return digits.map((d) => SUPERS[Number(d)] || d).join("");
};

const detectTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "light";
};

const MoonIcon = () => (
  <svg className="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg className="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const SectionHeader = ({ title, index }) => (
  <div className="section-header">
    <h2 className="section-title">{title}</h2>
    <span className="section-index" aria-hidden="true">
      {index}
    </span>
  </div>
);

const ContactLink = ({ link, number }) => (
  <a
    className="contact-link"
    href={link.href}
    target={link.external || link.href.startsWith("http") ? "_blank" : undefined}
    rel={link.external || link.href.startsWith("http") ? "noreferrer" : undefined}
  >
    <span className="contact-link__label">
      <span className="contact-link__num">{superscript(number)}</span> {link.label}
    </span>
    <span className="contact-link__arrow" aria-hidden="true">
      ↗
    </span>
  </a>
);

const EntryRow = ({ item, active, onEnter, onFocus }) => (
  <div
    className={`entry-row${active ? " is-active" : ""}`}
    role="button"
    tabIndex={0}
    onMouseEnter={onEnter}
    onFocus={onFocus}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onFocus();
      }
    }}
  >
    <span className="entry-row__main">
      {item.logo ? (
        <img className="entry-row__logo" src={item.logo} alt="" aria-hidden="true" />
      ) : null}
      {item.markColor ? (
        <span className="entry-row__mark" style={{ backgroundColor: item.markColor }} aria-hidden="true" />
      ) : null}
      {item.href ? (
        <a
          className="entry-row__title entry-row__title--link"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          {item.title}
        </a>
      ) : (
        <span className="entry-row__title">{item.title}</span>
      )}
    </span>
    <span className="entry-row__period">{item.period}</span>
  </div>
);

const EntryDetail = ({ item, className = "" }) => {
  if (!item) return null;

  return (
    <div className={`entry-detail${className ? ` ${className}` : ""}`} aria-live="polite">
      <div className="entry-detail__body">
        {item.image ? (
          <div className="entry-detail__media">
            <img src={item.image} alt="" loading="lazy" />
          </div>
        ) : null}
        <div className="entry-detail__copy">
          {item.detailTitle ? (
            item.href ? (
              <a className="entry-detail__title" href={item.href} target="_blank" rel="noreferrer">
                {item.detailTitle}
              </a>
            ) : (
              <span className="entry-detail__title">{item.detailTitle}</span>
            )
          ) : null}
          <p className="entry-detail__description">{item.description}</p>
          {item.credit ? <p className="entry-detail__credit">{item.credit}</p> : null}
        </div>
      </div>
      <p className="entry-detail__period">{item.period}</p>
    </div>
  );
};

const ContactEducationSection = () => {
  const [activeEducationId, setActiveEducationId] = useState(site.education.items[0]?.id);
  const activeEducation =
    site.education.items.find((item) => item.id === activeEducationId) || site.education.items[0];

  return (
    <section className="portfolio-section portfolio-section--split" aria-label="Links and education">
      <div className="portfolio-columns">
        <div className="portfolio-column" aria-labelledby="contact-heading">
          <SectionHeader title={site.contact.title} index={site.contact.index} />
          <div className="contact-list">
            {site.contact.links.map((link, index) => (
              <ContactLink key={link.label} link={link} number={index} />
            ))}
          </div>
        </div>

        <div className="portfolio-column portfolio-column--education" aria-labelledby="education-heading">
          <SectionHeader title={site.education.title} index={site.education.index} />
          <div className="entries-list entries-list--compact" role="list">
            {site.education.items.map((item) => (
              <EntryRow
                key={item.id}
                item={item}
                active={item.id === activeEducationId}
                onEnter={() => setActiveEducationId(item.id)}
                onFocus={() => setActiveEducationId(item.id)}
              />
            ))}
          </div>
          <EntryDetail
            key={activeEducation?.id}
            item={activeEducation}
            className="entry-detail--inline"
          />
        </div>
      </div>
    </section>
  );
};

const EntrySection = ({ section, headingId }) => {
  const [activeId, setActiveId] = useState(section.items[0]?.id);
  const activeItem = section.items.find((item) => item.id === activeId) || section.items[0];

  return (
    <section className="portfolio-section portfolio-section--entries" aria-labelledby={headingId}>
      <SectionHeader title={section.title} index={section.index} />
      {section.hint ? <p className="section-hint">{section.hint}</p> : null}
      <div className="entries-layout">
        <div className="entries-list" role="list">
          {section.items.map((item) => (
            <EntryRow
              key={item.id}
              item={item}
              active={item.id === activeId}
              onEnter={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
            />
          ))}
        </div>
        <EntryDetail key={activeItem?.id} item={activeItem} />
      </div>
    </section>
  );
};

export default function PortfolioSite() {
  const [theme, setTheme] = useState(detectTheme);

  useEffect(() => {
    document.documentElement.classList.add("ethan-portfolio");
    return () => document.documentElement.classList.remove("ethan-portfolio");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="portfolio-page">
      <main className="portfolio-content">
        <section className="portfolio-section" aria-labelledby="intro-heading">
          <SectionHeader title={site.title} index={site.intro.index} />
          <div className="intro-copy">
            {site.intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="intro-currently">{site.intro.currently}</p>
          </div>
        </section>

        <ContactEducationSection />

        <EntrySection section={site.experience} headingId="experience-heading" />

        <footer className="portfolio-footer">
          <p>{site.footer}</p>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            <span>{theme === "dark" ? "light mode" : "dark mode"}</span>
          </button>
        </footer>
      </main>
    </div>
  );
}
