"use client";
import { siteConfig } from "../lib/siteConfig";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap navin">
        <a className="brand wordmarkOnly" href="#top" aria-label="Çağdaş Şen ana sayfa">ÇAĞDAŞ ŞEN</a>
        <div className="navlinks">
          {siteConfig.nav.map(([tr, href]) => (
            <a href={href} key={href}>{tr}</a>
          ))}
        </div>
        <a className="cta" href={`mailto:${siteConfig.email}`}>İletişime Geç →</a>
      </div>
    </nav>
  );
}
