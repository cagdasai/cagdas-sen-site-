"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { siteConfig, whatsappUrl } from "../lib/siteConfig";

const focus = [
  ["01", "EXPERIENCE", "Mağaza Deneyimi", "Kasadan reyonlara, mobil checkout’tan self-service akışlarına kadar fiziksel mağazayı yeniden düşünmek."],
  ["02", "PAYMENTS", "Ödeme & Teknoloji", "Android POS, ödeme altyapısı, güvenli akışlar ve terminal yaşam döngüsünü tek ekosistemde yönetmek."],
  ["03", "INTEGRATION", "Entegrasyon", "ERP, kasa yazılımı, banka ve ödeme teknolojilerini müşteriye görünmez olacak kadar iyi bağlamak."],
  ["04", "PERFORMANCE", "Veri & Performans", "Projeyi yalnızca devreye almak değil; satış, hız, operasyon ve müşteri deneyiminde etkisini ölçmek."],
];

const NEBIM_PREVIEW_COUNT = 14;

export default function Home() {
  const wa = whatsappUrl();
  const waActive = wa.startsWith("http");
  const [lang, setLang] = useState("tr");
  const en = lang === "en";
  const [showAllNebim, setShowAllNebim] = useState(false);
  const nebimVisible = showAllNebim ? siteConfig.nebimProjects : siteConfig.nebimProjects.slice(0, NEBIM_PREVIEW_COUNT);

  return (
    <main id="top">
      <Nav lang={lang} setLang={setLang} />

      <header className="hero heroPhotoPrime heroClean">
        <div className="heroPhotoBg" aria-hidden="true" />
        <div className="speedlines heroPhotoLines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <div className="wrap heroPrimeGrid">
          <div className="heroPrimeCopy">
            <div className="eyebrow">{en ? "Çağdaş Şen · Retail Systems Leader" : "Çağdaş Şen · Perakende Sistemleri Lideri"}</div>
            {en ? (
              <h1 className="heroPrimeTitle">Retail.<br/><span>Payments.</span><br/>Technology.</h1>
            ) : (
              <h1 className="heroPrimeTitle">Perakende.<br/><span>Ödeme.</span><br/>Teknoloji.</h1>
            )}
            <div className="heroQuoteMain">
              <p><span className="quoteMark">&ldquo;</span>{en ? siteConfig.quoteEn : siteConfig.quote}</p>
              <img className="heroSignature" src="/cagdas-sen-signature-black.webp" alt={en ? "Çağdaş Şen signature" : "Çağdaş Şen imza"} />
            </div>
            <div className="actions">
              <a className="btn primary" href="#projects">{en ? "View Projects →" : "Projeleri Gör →"}</a>
              <a className="btnLink" href="#contact">{en ? "Get in Touch →" : "Bana Ulaş →"}</a>
            </div>
            <div className="statRow">
              <div className="statItem"><strong>23+</strong><span>{en ? "Years of experience" : "Yıllık deneyim"}</span></div>
              <div className="statItem"><strong>500+</strong><span>{en ? "Companies engaged" : "Firmayla iş geliştirme"}</span></div>
              <div className="statItem"><strong>10</strong><span>{en ? "Different companies" : "Farklı şirket"}</span></div>
            </div>
            <div className="channelRow">
              <a className="channelBtn" href={siteConfig.linkedin} target="_blank" title="LinkedIn">in</a>
              <a className="channelBtn" href={siteConfig.instagram} target="_blank" title="Instagram">IG</a>
              <a className="channelBtn" href={`mailto:${siteConfig.email}`} title="Email">@</a>
              <a className="channelBtn" href={wa} target={waActive ? "_blank" : undefined} title="WhatsApp">WA</a>
            </div>
          </div>
          <div className="heroPrimeVisual">
            <div className="heroPrimeFrame">
              <img src="/cagdas-sen-hero.webp" alt="Çağdaş Şen" className="heroPrimeImage" />
              <div className="heroPrimeOverlay" />
            </div>
            <div className="roleTagClean">
              <span>Head of PAX Retail Business Solutions</span>
            </div>
          </div>
        </div>
      </header>

      <section id="focus" className="section"><div className="wrap"><Reveal className="sectionHead"><div><div className="kicker">Odak</div><h2>Perakendeyi geleceğe taşıyan 4 güç.</h2></div><p className="intro">Güçlü deneyim, kusursuz ödeme, doğru entegrasyon ve ölçülebilir performans. Benim dünyam bu dört alanın kesişiminde.</p></Reveal><div className="focusGrid">{focus.map(([n,tag,title,body])=><Reveal as="article" className="focus" key={n}><span className="ghostnum">{n}</span><em>{n} / {tag}</em><h3>{title}</h3><p>{body}</p><span className="arrow">→</span></Reveal>)}</div></div></section>

      <section className="projectStrip" id="projects">
        <div className="wrap projectStripGrid">
          <div className="projectStripIntro"><div className="kicker">Selected Projects</div><h2>Markalar.<br/>Projeler.<br/>Gerçek saha.</h2><a href="#nebim" className="stripLink">Tüm dünyayı keşfet →</a></div>
          <div className="projectTiles">{siteConfig.projects.map((p,i)=><article className="projectTile" key={p.name}><div className={`tileArt tile${i+1}`}><span>{p.name}</span></div><div className="tileMeta"><h3>{p.name}</h3><p>{p.detail}</p></div></article>)}</div>
        </div>
      </section>

      <section id="insights" className="section"><div className="wrap"><Reveal className="sectionHead"><div><div className="kicker">Field Notes</div><h2>Sahadan düşünceler.</h2></div><p className="intro">Perakende, ödeme sistemleri, mobil checkout ve yeni nesil mağazacılık üzerine kısa ve net notlar.</p></Reveal><Reveal as="aside" className="insights standaloneInsights">{siteConfig.notes.map(([date,title])=><div className="insight" key={title}><div className="date">{date}</div><h4>{title}</h4><div className="go">↗</div></div>)}</Reveal></div></section>

      <section id="career" className="section"><div className="wrap">
        <Reveal className="sectionHead"><div><div className="kicker">Deneyim</div><h2>23+ yıl, 10 farklı şirkette kariyer yolculuğu.</h2></div><p className="intro">2003'ten bugüne perakende teknolojileri, ödeme sistemleri ve iş geliştirme odaklı kariyer.</p></Reveal>
        <Reveal className="timeline">
          {siteConfig.career.map((c) => (
            <div className="timelineItem" key={c.company + c.period}>
              <div className="timelineMeta"><span className="timelinePeriod">{c.period}</span></div>
              <div className="timelineBody"><h3>{c.company}</h3><div className="timelineRole">{c.role}</div><p>{c.detail}</p></div>
            </div>
          ))}
        </Reveal>
        <Reveal className="eduRow">
          {siteConfig.education.map((e) => <div className="eduItem" key={e.school}><strong>{e.school}</strong><span>{e.program}</span></div>)}
        </Reveal>
      </div></section>

      <section id="nebim" className="section"><div className="wrap">
        <Reveal className="sectionHead"><div><div className="kicker">Nebim Dönemi · 2011–2017</div><h2>59 marka, 59 ERP projesi.</h2></div><p className="intro">Nebim'de Senior Key Account Manager olarak, Türkiye'nin önde gelen perakende markalarında uçtan uca ERP geçiş ve entegrasyon projelerinde aktif rol aldım.</p></Reveal>
        <Reveal className="nebimGrid">
          {nebimVisible.map(([name, detail, period]) => (
            <div className="nebimItem" key={name + period}><strong>{name}</strong><span>{detail}</span><small>{period}</small></div>
          ))}
        </Reveal>
        <div className="nebimToggleRow">
          <button type="button" className="nebimToggle" onClick={() => setShowAllNebim((v) => !v)}>
            {showAllNebim
              ? (en ? "Show less ↑" : "Listeyi daralt ↑")
              : (en ? `See all ${siteConfig.nebimProjects.length} projects →` : `Tüm ${siteConfig.nebimProjects.length} projeyi gör →`)}
          </button>
        </div>
      </div></section>

      <section id="instagram" className="section instagramSection"><div className="wrap"><Reveal className="sectionHead"><div><div className="kicker">Instagram · {siteConfig.instagramHandle}</div><h2>Sahadan. Hayattan. Hareket halinde.</h2></div><p className="intro">LinkedIn fikirlerin ve sektörün merkeziyse, Instagram daha fazla yolculuk, mağaza, etkinlik, ekip ve sahne arkası. Aynı marka; daha kişisel, daha görsel, daha canlı.</p></Reveal><Reveal className="instagramHero"><div className="igCopy"><div className="igHandle">{siteConfig.instagramHandle}</div><h3>Retail&apos;in içinden,<br/>hayatın içinden.</h3><p>Mağazalar, teknoloji, etkinlikler, yolculuklar ve günün içinden kareler. Çağdaş Şen markasının daha spontan tarafı.</p><a className="igButton" href={siteConfig.instagram} target="_blank">Instagram&apos;da Gör ↗</a></div><div className="igVisual"><div className="igRail"><span>RETAIL</span><span>TRAVEL</span><span>TECH</span><span>PEOPLE</span><span>EVENTS</span></div><div className="igGrid"><a href={siteConfig.instagram} target="_blank" className="igTile"><b>STORE</b><small>field moments</small></a><a href={siteConfig.instagram} target="_blank" className="igTile"><b>PEOPLE</b><small>behind the scenes</small></a><a href={siteConfig.instagram} target="_blank" className="igTile"><b>MOVE</b><small>life in motion</small></a></div></div></Reveal></div></section>

      <section id="talks" className="section">
        <div className="wrap"><Reveal className="ai aiStandalone"><div className="kicker">Ask Çağdaş</div><h3>WhatsApp AI</h3><p className="intro">Retail, payments ve teknoloji hakkında benim yayınladığım içeriklerden beslenen dijital asistan.</p><div className="chat"><div className="bubble">Merhaba Çağdaş, mağazada mobil checkout için en kritik 3 konu nedir?</div><div className="bubble me">1. Kasa/ERP entegrasyonu<br/>2. Ödeme akışının güvenliği<br/>3. Operasyon ve kullanıcı deneyimi</div></div>{waActive ? (<a className="whatsapp" href={wa} target="_blank">{en ? "Ask on WhatsApp →" : "WhatsApp ile Sor →"}</a>) : (<span className="whatsappSoon">{en ? "Ask Çağdaş — Coming soon" : "Ask Çağdaş — Yakında"}</span>)}</Reveal></div>
      </section>

      <footer id="contact" className="footer"><div className="wrap"><div className="footgrid"><div><div className="kicker">Çağdaş Şen</div><div className="footbig">Perakende. Ödeme. Teknoloji.<br/><span>Gerçek saha deneyimiyle.</span></div><img className="signatureMark" src="/cagdas-sen-signature-white.webp" alt="Çağdaş Şen imza" /><div className="contactgrid"><a className="contact" href={siteConfig.linkedin} target="_blank">LinkedIn ↗</a><a className="contact" href={siteConfig.instagram} target="_blank">Instagram {siteConfig.instagramHandle} ↗</a>{waActive && <a className="contact" href={wa} target="_blank">WhatsApp ↗</a>}<a className="contact" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div></div><div className="tiny">© 2026 Çağdaş Şen · Retail · Payments · Technology</div></div></footer>
    </main>
  );
}
