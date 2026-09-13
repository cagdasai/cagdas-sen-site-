"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { siteConfig, whatsappUrl } from "../lib/siteConfig";

const focus = ["Mağaza Deneyimi", "Ödeme Teknolojileri", "ERP / POS Entegrasyonu", "Performans & Operasyon"];

const NEBIM_PREVIEW_COUNT = 10;

export default function Home() {
  const wa = whatsappUrl();
  const waActive = wa.startsWith("http");
  const [showAllNebim, setShowAllNebim] = useState(false);
  const nebimVisible = showAllNebim ? siteConfig.nebimProjects : siteConfig.nebimProjects.slice(0, NEBIM_PREVIEW_COUNT);
  const [showAllCareer, setShowAllCareer] = useState(false);
  const careerVisible = showAllCareer ? siteConfig.career : siteConfig.career.filter((c) => c.featured);

  return (
    <main id="top">
      <Nav />

      <header className="hero heroPhotoPrime heroClean">
        <div className="heroPhotoBg" aria-hidden="true" />
        <div className="speedlines heroPhotoLines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <div className="wrap heroPrimeGrid">
          <div className="heroPrimeCopy">
            <div className="eyebrow">Çağdaş Şen</div>
            <div className="heroRoleLine">Head of PAX Retail Business Solutions</div>
            <div className="heroPillars">Retail · Payments · Technology</div>
            <h1 className="heroPrimeTitle">Perakende.<br/><span>Ödeme.</span><br/>Teknoloji.</h1>
            <p className="heroPrimeStatement">Perakende markalarında ödeme, mağaza deneyimi ve entegrasyon projelerini uçtan uca yöneten iş geliştirme lideri.</p>
            <div className="actions">
              <a className="btn primary" href="#projects">Seçilmiş Projeler ↓</a>
              <a className="btnLink" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
            <div className="statRow">
              <div className="statItem"><strong>23+</strong><span>Yıllık deneyim</span></div>
              <div className="statItem"><strong>500+</strong><span>Firmayla iş geliştirme</span></div>
              <div className="statItem"><strong>2.200+</strong><span>Aktif ödeme noktası</span></div>
            </div>
          </div>
          <div className="heroPrimeVisual">
            <div className="heroPrimeFrame">
              <img src="/cagdas-sen-hero.webp" alt="Çağdaş Şen" className="heroPrimeImage" />
              <div className="heroPrimeOverlay" />
            </div>
          </div>
        </div>
      </header>

      <section id="focus" className="section sectionSlim"><div className="wrap">
        <Reveal>
          <div className="kicker">Odak</div>
          <div className="focusBand">{focus.map((f) => <div className="focusItem" key={f}>{f}</div>)}</div>
          <p className="focusNote">Kasadan reyonda ödemeye, ERP entegrasyonundan merkezi cihaz yönetimine kadar uçtan uca perakende ödeme altyapıları.</p>
        </Reveal>
      </div></section>

      <section id="projects" className="section sectionSlim"><div className="wrap">
        <Reveal className="sectionHead compact"><div><h2>Seçilmiş Çalışmalar</h2></div><p className="intro">Perakende, ödeme ve teknolojinin sahadaki karşılığı.</p></Reveal>
        <div className="caseGrid">
          {siteConfig.caseStudies.map((c) => (
            <Reveal as="article" className="caseCard" key={c.client}>
              <div className="caseCardCategory">{c.category}</div>
              <h3 className="caseCardClient">{c.client}</h3>
              <div className="caseCardStat">{c.stat}</div>
              <p className="caseCardDesc">{c.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="sectionCta"><a href="#nebim" className="btnLink">Diğer Projeleri Keşfet →</a></div>
      </div></section>

      <section id="insights" className="section sectionSlim"><div className="wrap">
        <Reveal className="sectionHead compact"><div><h2>{siteConfig.notesSection.title}</h2></div><p className="intro">{siteConfig.notesSection.description}</p></Reveal>
        <div className="noteCompactList">
          {siteConfig.fieldNotes.slice(0, 3).map((n) => (
            <Reveal as="article" className="noteCompactRow" key={n.title}>
              <div className="noteCompactMeta">{n.category}{n.date ? ` · ${n.date}` : ""}</div>
              <h3 className="noteCompactTitle">{n.title}</h3>
              <p className="noteCompactSummary">{n.summary}</p>
              <a className="btnLink" href={n.url} target="_blank" rel="noopener noreferrer">{n.ctaLabel}</a>
            </Reveal>
          ))}
        </div>
        <div className="sectionCta"><a href="/notlar" className="btnLink">Tüm Paylaşımları Gör →</a></div>
      </div></section>

      <section id="career" className="section sectionSlim"><div className="wrap">
        <Reveal className="sectionHead compact"><div><div className="kicker">Deneyim</div><h2>Kariyer yolculuğu.</h2></div><p className="intro">2003'ten bugüne perakende teknolojileri, ödeme sistemleri ve iş geliştirme odaklı kariyer.</p></Reveal>
        <Reveal className="timeline">
          {careerVisible.map((c) => (
            <div className="timelineItem" key={c.company + c.period}>
              <div className="timelineMeta"><span className="timelinePeriod">{c.period}</span></div>
              <div className="timelineBody"><h3>{c.company}</h3><div className="timelineRole">{c.role}</div><p>{c.short}</p></div>
            </div>
          ))}
        </Reveal>
        <div className="toggleRow">
          <button type="button" className="toggleBtn" onClick={() => setShowAllCareer((v) => !v)}>
            {showAllCareer ? "Daralt ↑" : "Tüm kariyeri gör →"}
          </button>
        </div>
        <Reveal className="eduRow">
          {siteConfig.education.map((e) => <div className="eduItem" key={e.school}><strong>{e.school}</strong><span>{e.program}</span></div>)}
        </Reveal>
      </div></section>

      <section id="nebim" className="section sectionSlim"><div className="wrap">
        <Reveal className="sectionHead compact"><div><div className="kicker">Nebim Dönemi · 2011–2017</div><h2>59 Marka · 100+ ERP / Entegrasyon Projesi</h2></div><p className="intro">Nebim döneminde Türkiye'nin önde gelen perakende markalarında uçtan uca ERP geçiş projelerinde rol aldım.</p></Reveal>
        <Reveal className="nebimGrid">
          {nebimVisible.map(([name, detail, period]) => (
            <div className="nebimItem" key={name + period}><strong>{name}</strong><span>{detail}</span><small>{period}</small></div>
          ))}
        </Reveal>
        <div className="toggleRow">
          <button type="button" className="toggleBtn" onClick={() => setShowAllNebim((v) => !v)}>
            {showAllNebim ? "Daralt ↑" : "Tüm Proje Geçmişini Gör →"}
          </button>
        </div>
      </div></section>

      <section id="talks" className="section talksCompact">
        <div className="wrap talksBand">
          <div><div className="kicker">Ask Çağdaş</div><p className="talksLine">WhatsApp AI ile sor.</p></div>
          {waActive ? (<a className="whatsappCompact" href={wa} target="_blank">WhatsApp&apos;ta Aç →</a>) : (<span className="whatsappSoon">Ask Çağdaş — Yakında</span>)}
        </div>
      </section>

      <footer id="contact" className="footer"><div className="wrap"><div className="footgrid"><div><div className="kicker">Çağdaş Şen</div><div className="footbig">Perakende. Ödeme. Teknoloji.<br/><span>Gerçek saha deneyimiyle.</span></div><img className="signatureMark" src="/cagdas-sen-signature-white.webp" alt="Çağdaş Şen imza" /><div className="contactgrid"><a className="contact" href={siteConfig.linkedin} target="_blank">LinkedIn ↗</a><a className="contact" href={siteConfig.instagram} target="_blank">Instagram {siteConfig.instagramHandle} ↗</a>{waActive && <a className="contact" href={wa} target="_blank">WhatsApp ↗</a>}<a className="contact" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div></div><div className="tiny">© 2026 Çağdaş Şen · Retail · Payments · Technology</div></div></footer>
    </main>
  );
}
