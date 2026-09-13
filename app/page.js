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
  const [showAllNebim, setShowAllNebim] = useState(false);
  const nebimVisible = showAllNebim ? siteConfig.nebimProjects : siteConfig.nebimProjects.slice(0, NEBIM_PREVIEW_COUNT);

  return (
    <main id="top">
      <Nav />

      <header className="hero heroPhotoPrime heroClean">
        <div className="heroPhotoBg" aria-hidden="true" />
        <div className="speedlines heroPhotoLines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <div className="wrap heroPrimeGrid">
          <div className="heroPrimeCopy">
            <div className="eyebrow">Çağdaş Şen · Perakende Sistemleri Lideri</div>
            <h1 className="heroPrimeTitle">Perakende.<br/><span>Ödeme.</span><br/>Teknoloji.</h1>
            <div className="heroQuoteMain">
              <p><span className="quoteMark">&ldquo;</span>{siteConfig.quote}</p>
              <img className="heroSignature" src="/cagdas-sen-signature-black.webp" alt="Çağdaş Şen imza" />
            </div>
            <div className="actions">
              <a className="btn primary" href="#projects">Projeleri Gör →</a>
            </div>
            <div className="statRow">
              <div className="statItem"><strong>23+</strong><span>Yıllık deneyim</span></div>
              <div className="statItem"><strong>500+</strong><span>Firmayla iş geliştirme</span></div>
              <div className="statItem"><strong>10</strong><span>Farklı şirket</span></div>
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

      <section id="projects" className="section"><div className="wrap">
        <Reveal className="sectionHead"><div><h2>Seçilmiş Çalışmalar</h2></div><p className="intro">Perakende, ödeme ve teknolojinin sahadaki karşılığı.</p></Reveal>
        <div className="caseList">
          {siteConfig.caseStudies.map((c, i) => (
            <Reveal as="article" className={`caseRow${i % 2 === 1 ? " caseRowReverse" : ""}`} key={c.client}>
              <div className="caseMeta">
                <span className="caseNumber">{c.number}</span>
                <span className="caseCategory">{c.category}</span>
              </div>
              <div className="caseVisual">
                {c.visual === "image" ? (
                  <img className="caseImage" src={c.image} alt={c.imageAlt} loading="lazy" />
                ) : (
                  <div className={`caseVisualType ${c.visualClass}`}>
                    <span className="caseWordmark">{c.client}</span>
                    {c.visualClass === "typeBeymen" && <span className="caseAccentLine" aria-hidden="true" />}
                  </div>
                )}
              </div>
              <div className="caseBody">
                <h3 className="caseTitle">{c.title}</h3>
                <p className="caseDescription">{c.description}</p>
                <div className="caseStat">{c.stat}</div>
                <div className="caseTags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="caseCta"><a href="#nebim" className="btnLink">Diğer Projeleri Keşfet →</a></div>
      </div></section>

      <section id="linkedin" className="section"><div className="wrap">
        <Reveal className="sectionHead"><div><div className="kicker">{siteConfig.linkedinSection.kicker}</div><h2>{siteConfig.linkedinSection.title}</h2></div><p className="intro">{siteConfig.linkedinSection.description}</p></Reveal>
        <Reveal className="linkedinRow">
          {siteConfig.linkedinPosts.map((post) => (
            <div className="linkedinEmbed" key={post.embedUrl}>
              <iframe src={post.embedUrl} height="480" width="504" frameBorder="0" allowFullScreen title="Çağdaş Şen LinkedIn gönderisi" />
            </div>
          ))}
        </Reveal>
      </div></section>

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
            {showAllNebim ? "Listeyi daralt ↑" : `Tüm ${siteConfig.nebimProjects.length} projeyi gör →`}
          </button>
        </div>
      </div></section>

      <section id="talks" className="section">
        <div className="wrap"><Reveal className="ai aiStandalone"><div className="kicker">Ask Çağdaş</div><h3>WhatsApp AI</h3><p className="intro">Retail, payments ve teknoloji hakkında benim yayınladığım içeriklerden beslenen dijital asistan.</p><div className="chat"><div className="bubble">Merhaba Çağdaş, mağazada mobil checkout için en kritik 3 konu nedir?</div><div className="bubble me">1. Kasa/ERP entegrasyonu<br/>2. Ödeme akışının güvenliği<br/>3. Operasyon ve kullanıcı deneyimi</div></div>{waActive ? (<a className="whatsapp" href={wa} target="_blank">WhatsApp ile Sor →</a>) : (<span className="whatsappSoon">Ask Çağdaş — Yakında</span>)}</Reveal></div>
      </section>

      <footer id="contact" className="footer"><div className="wrap"><div className="footgrid"><div><div className="kicker">Çağdaş Şen</div><div className="footbig">Perakende. Ödeme. Teknoloji.<br/><span>Gerçek saha deneyimiyle.</span></div><img className="signatureMark" src="/cagdas-sen-signature-white.webp" alt="Çağdaş Şen imza" /><div className="contactgrid"><a className="contact" href={siteConfig.linkedin} target="_blank">LinkedIn ↗</a><a className="contact" href={siteConfig.instagram} target="_blank">Instagram {siteConfig.instagramHandle} ↗</a>{waActive && <a className="contact" href={wa} target="_blank">WhatsApp ↗</a>}<a className="contact" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div></div><div className="tiny">© 2026 Çağdaş Şen · Retail · Payments · Technology</div></div></footer>
    </main>
  );
}
