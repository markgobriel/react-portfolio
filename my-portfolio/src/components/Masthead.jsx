import { useEffect, useState } from "react";
import "./Masthead.css";

function Masthead({
  name,
  heroLine1,
  heroLine2,
  heroEmphasis,
  tagline,
  taglineTokens,
  showTagline = true,
  meta,
  portrait,
  resumeHref,
  resumeLabel,
  eyebrowLabel,
  eyebrowTouchLabel,
  onNameHover,
  onScrollToSections,
}) {
  const [hasFinePointer, setHasFinePointer] = useState(true);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setHasFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!taglineTokens || !taglineTokens.length) return undefined;
    setTypedCount(0);
    const total = taglineTokens.length;
    const interval = setInterval(() => {
      setTypedCount((prev) => {
        if (prev >= total) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [taglineTokens]);

  const label = hasFinePointer ? eyebrowLabel : eyebrowTouchLabel || eyebrowLabel;
  const line1 = heroLine1 ?? "i like building";
  const line2 = heroLine2 ?? "apps.";
  const emphasis = heroEmphasis ?? "full stack";

  const renderTagline = () => {
    const hasTokens = Array.isArray(taglineTokens) && taglineTokens.length > 0;
    if (!hasTokens) {
      return <p className="tagline tagline-inline" dangerouslySetInnerHTML={{ __html: tagline }} />;
    }
    const words = taglineTokens.slice(0, typedCount);
    const isTyping = typedCount < taglineTokens.length;
    return (
      <div className="tagline-wrapper">
        <p className={`tagline typewriter ${isTyping ? "is-typing" : ""}`}>
          {words.map((token, idx) => {
            const space = idx === words.length - 1 ? "" : " ";
            const content = token.href ? (
              <a href={token.href} target={token.external ? "_blank" : undefined} rel={token.external ? "noreferrer" : undefined}>
                {token.text}
              </a>
            ) : (
              token.text
            );
            return (
              <span key={`${token.text}-${idx}`}>
                {content}
                {space}
              </span>
            );
          })}
          <span className="typewriter-caret" aria-hidden="true"></span>
        </p>
        <p className="tagline tagline-placeholder" aria-hidden="true" dangerouslySetInnerHTML={{ __html: tagline }} />
      </div>
    );
  };

  return (
    <header className="masthead" id="home">
      <div className="masthead__intro">
        <p className="eyebrow">{label}</p>
        <h1
          data-emoji="🪄"
          onMouseEnter={() => onNameHover?.(true)}
          onMouseLeave={() => onNameHover?.(false)}
        >
          <span className="hero-line">
            {line1} <span className="hero-italic">{emphasis}</span>
          </span>
          <span className="hero-line">{line2}</span>
        </h1>
        {showTagline ? renderTagline() : null}
        {/* {resumeHref && (
          <div className="masthead__actions">
            <a className="resume-top" href={resumeHref} target="_blank" rel="noreferrer">
              {resumeLabel || "resume"}
            </a>
          </div>
        )} */}
      </div>
      <div className="masthead__side">
        <div className="meta">
          {meta.map((item) => (
            <div className="meta-item" key={item.label}>
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Masthead;
