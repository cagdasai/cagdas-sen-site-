"use client";
import { siteConfig } from "../lib/siteConfig";

export default function Nav({ lang, setLang }) {
  return (
    <nav className="nav">
      <div className="wrap navin">
        <a className="brand wordmarkOnly" href="#top" aria-label="Çağdaş Şen ana sayfa">ÇAĞDAŞ ŞEN</a>
        <div className="navlinks">
          {siteConfig.nav.map(([tr, href, en]) => (
            <a href={href} key={href}>{lang === "en" ? en : tr}</a>
          ))}
        </div>
        <div className="langToggle">
          <button type="button" className={lang === "tr" ? "active" : ""} onClick={() => setLang("tr")}>TR</button>
          <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <a className="cta" href={`mailto:${siteConfig.email}`}>
          {lang === "en" ? "Let's talk →" : "İletişime Geç →"}
        </a>
      </div>
    </nav>
  );
}
