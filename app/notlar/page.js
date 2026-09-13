import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { siteConfig } from "../../lib/siteConfig";

export const metadata = {
  title: `Sahadan Notlar — ${siteConfig.name}`,
  description: siteConfig.notesSection.description,
};

export default function NotlarPage() {
  return (
    <main id="top">
      <Nav />
      <section className="section"><div className="wrap">
        <Reveal className="sectionHead"><div><div className="kicker">Sahadan Notlar</div><h2>Tüm Paylaşımlar</h2></div><p className="intro">{siteConfig.notesSection.description}</p></Reveal>
        <div className="noteList">
          {siteConfig.fieldNotes.map((n) => (
            <Reveal as="article" className="noteRow" key={n.title}>
              <div className="noteMeta">
                <span className="noteCategory">{n.category}</span>
                {n.date && <span className="noteDate">{n.date}</span>}
              </div>
              <div className="noteBody">
                <h3 className="noteTitle">{n.title}</h3>
                <p className="noteSummary">{n.summary}</p>
                <a className="btnLink" href={n.url} target="_blank" rel="noopener noreferrer">{n.ctaLabel}</a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="sectionCta"><a href="/" className="btnLink">Ana Sayfaya Dön →</a></div>
      </div></section>
    </main>
  );
}
