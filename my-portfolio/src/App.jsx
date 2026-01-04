import "./App.css";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import portfolio from "./data/portfolio";
import Masthead from "./components/Masthead";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";

const detectLangFromPath = () => {
  if (typeof window === "undefined") return "en";
  return window.location.pathname.startsWith("/fr") ? "fr" : "en";
};

const detectTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored) return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const detectRouteFromPath = () => {
  if (typeof window === "undefined") return "home";
  const rawPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const path = rawPath.replace(/^\/(en|fr)(?=\/|$)/, "");
  if (path === "" || path === "/") return "home";
  if (path.startsWith("/about")) return "about";
  if (path.startsWith("/work")) return "work";
  return "home";
};

const getLangPrefix = () => {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname;
  if (path.startsWith("/fr")) return "/fr";
  if (path.startsWith("/en")) return "/en";
  return "";
};

function App() {
  const [lang, setLang] = useState(detectLangFromPath);
  const [theme, setTheme] = useState(detectTheme);
  const route = detectRouteFromPath();
  const isAboutPage = route === "about";
  const isWorkPage = route === "work";
  const langPrefix = getLangPrefix();
  const withLangPrefix = (path = "/") => {
    if (path === "/") return langPrefix || "/";
    return `${langPrefix}${path}`;
  };
  const homeHref = withLangPrefix("/");
  const workHref = withLangPrefix("/work");
  const [nameHover, setNameHover] = useState(false);
  const [eduHover, setEduHover] = useState(false);
  const nameHoverImage = "https://i.giphy.com/media/3NtY188QaxDdC/giphy.gif";
  const eduHoverImage = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png";
  const content = portfolio[lang] || portfolio.en;
  const homeUi = content.ui?.home || {};
  const resumeHref =
    content.contact.find((c) => c.label === (lang === "fr" ? "cv" : "resume"))?.href ||
    content.contact.find((c) => c.label === "resume")?.href ||
    "/resume.pdf";
  const meta = (content.homeMeta || []).map((item) => ({
    label: item.label,
    value: item.href ? (
      <a href={item.href} target="_blank" rel="noreferrer" className="meta-link">
        {item.value}
      </a>
    ) : (
      item.value
    ),
  }));
  const selectedWorks = content.selectedWorks || [];
  const timelineTitle = content.timeline?.title || homeUi.timeline || "timeline";
  const timelineItems = content.timeline?.items || [];
  const selectedWorksTitle = homeUi.selectedWorks || "selected works";
  const selectedWorkAria = homeUi.selectedWorkAria || "open";
  const viewAllLabel = homeUi.viewAllWork || "view all my work";

  const switchLanguage = (code) => {
    if (code === lang) return;
    setLang(code);
    if (typeof window !== "undefined") {
      const basePath = window.location.pathname.replace(/^\/(en|fr)/, "") || "/";
      const search = window.location.search || "";
      const hash = window.location.hash || "";
      const newPath = `/${code}${basePath === "/" ? "" : basePath}${search}${hash}`;
      window.location.assign(newPath);
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-fade]");
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "15% 0px 15% 0px",
      }
    );

    elements.forEach((el) => {
      el.classList.remove("is-visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const chips = Array.from(document.querySelectorAll(".skill-chip"));
    if (!chips.length) return undefined;

    const seeds = chips.map((_, idx) => ({
      phaseX: Math.random() * Math.PI * 2 + idx * 0.4,
      phaseY: Math.random() * Math.PI * 2 + idx * 0.6,
    }));

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let frame;

    const render = (ts) => {
      const t = ts || 0;
      chips.forEach((chip, idx) => {
        const rect = chip.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const vx = cx - mouse.x;
        const vy = cy - mouse.y;
        const dist = Math.max(20, Math.hypot(vx, vy));
        const repel = Math.min(200 / dist, 7);
        const repelX = (vx / dist) * repel * 18;
        const repelY = (vy / dist) * repel * 18;

        const phase = seeds[idx];
        const oscX = Math.sin(t / 700 + phase.phaseX) * 10;
        const oscY = Math.cos(t / 850 + phase.phaseY) * 8;

        chip.style.transform = `translate(${oscX + repelX}px, ${oscY + repelY}px)`;
      });
      frame = requestAnimationFrame(render);
    };

    const onMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [lang]);

  

  return (
    <>
      <div id="home" aria-hidden="true"></div>
      <div className="app-shell">
        <Cursor nameHover={nameHover} nameHoverImage={nameHoverImage} eduHover={eduHover} eduHoverImage={eduHoverImage} />
        {isAboutPage ? (
          <AboutPage content={content} homeHref={homeHref} />
        ) : isWorkPage ? (
          <WorkPage content={content} homeHref={homeHref} />
        ) : (
          <>
            <Masthead
              name={content.name}
              heroLine1={content.heroLine1}
              heroLine2={content.heroLine2}
              heroEmphasis={content.heroEmphasis}
              tagline={content.tagline}
              taglineTokens={content.taglineTokens}
              meta={meta}
              portrait={content.portrait}
              resumeHref={resumeHref}
              resumeLabel={content.ui.resumeTop}
              eyebrowLabel={content.ui.eyebrow}
              eyebrowTouchLabel={content.ui.eyebrowTouch}
              onNameHover={setNameHover}
            />
            <section className="selected-works" aria-label={selectedWorksTitle}>
              <div className="selected-works-head">
                <h3>{selectedWorksTitle}</h3>
                <a className="expand-toggle view-all-work view-all-work--inline" href={workHref}>
                  <span>{viewAllLabel}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      d="M4 12h16M14 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="selected-works-list">
                {selectedWorks.map((item) => (
                  <a
                    className="selected-work-row"
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${selectedWorkAria} ${item.title}`}
                  >
                    <div className="sw-row-text">
                      <div className="sw-row-main">
                        <span className="sw-title">{item.title}</span>
                        <span className="sw-dash">—</span>
                        <span className="sw-summary">{item.summary}</span>
                      </div>
                      {item.skills?.length ? (
                        <div className="sw-skills">({item.skills.join(" · ").toLowerCase()})</div>
                      ) : null}
                    </div>
                  </a>
                ))}
              </div>
            </section>
            <section className="timeline" aria-label={timelineTitle}>
              <div className="timeline-head">
                <h3>{timelineTitle}</h3>
              </div>
              <div className="timeline-list">
                {timelineItems.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const showYear = index === 0 || item.year !== timelineItems[index - 1]?.year;
                  return (
                    <div className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`} key={`${item.title}-${item.date}`}>
                      {showYear && <div className="timeline-year">{item.year}</div>}
                      <span className="timeline-dot" aria-hidden="true"></span>
                      <div className="timeline-content">
                        <div className="timeline-row">
                          {item.href ? (
                            <a className="timeline-title" href={item.href} target="_blank" rel="noreferrer">
                              {item.title}
                            </a>
                          ) : (
                            <span className="timeline-title">{item.title}</span>
                          )}
                          <span className="timeline-date">{item.date}</span>
                        </div>
                        {item.detail ? <div className="timeline-detail">{item.detail}</div> : null}
                        {item.description ? <div className="timeline-description">{item.description}</div> : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
        <Footer
          motto={content.footer.motto}
          lang={lang}
          onLangChange={switchLanguage}
          labels={content.ui?.footer}
          linkPrefix={langPrefix}
          theme={theme}
          onThemeChange={setTheme}
        />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;
