"use client";
import { siteConfig, whatsappUrl } from "../lib/siteConfig";

export default function Nav() {
  const wa = whatsappUrl();
  const waActive = wa.startsWith("http");
  return (
    <nav className="nav">
      <div className="wrap navin">
        <a className="brand wordmarkOnly" href="#top" aria-label="Çağdaş Şen ana sayfa">ÇAĞDAŞ ŞEN</a>
        <div className="navlinks">
          {siteConfig.nav.map(([tr, href]) => (
            <a href={href} key={href}>{tr}</a>
          ))}
        </div>
        <a className="cta" href={wa} target={waActive ? "_blank" : undefined}>İletişime Geç →</a>
      </div>
    </nav>
  );
}
