import { useRef } from "react";
import RESUME from './resume.json'

// ─────────────────────────────────────────────
//  STYLES (injected once via <style> tag)
// ─────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1814; --ink-mid: #4a4740; --ink-soft: #8a8780;
    --accent: #b85c2a; --accent-light: #f4ede5;
    --rule: #dedad4; --bg: #faf8f5; --paper: #ffffff;
  }

  body { margin: 0; background: var(--bg); }

  .resume-wrap {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--ink);
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem 5rem;
  }

  .page {
    background: var(--paper);
    width: 800px;
    max-width: 100%;
    box-shadow: 0 4px 40px rgba(0,0,0,0.08);
    display: grid;
    grid-template-columns: 260px 1fr;
  }

  /* ── SIDEBAR ── */
  .sidebar {
    background: #1a1814;
    color: #e8e4de;
    padding: 2.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .name-block .name {
    font-family: 'DM Serif Display', serif;
    font-size: 1.7rem;
    line-height: 1.15;
    color: #fff;
    letter-spacing: -0.01em;
  }
  .name-block .r-title {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-top: 0.5rem;
  }
  .s-section { display: flex; flex-direction: column; gap: 0.6rem; }
  .s-label {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
    padding-bottom: 0.35rem;
    border-bottom: 1px solid rgba(255,255,255,0.12);
    margin-bottom: 0.25rem;
  }
  .contact-item {
    font-size: 0.74rem;
    color: #c8c4be;
    line-height: 1.5;
    word-break: break-all;
  }
  .contact-item a { color: #c8c4be; text-decoration: none; }
  .contact-item a:hover { color: var(--accent); }
  .skill-group { display: flex; flex-direction: column; gap: 0.45rem; }
  .skill-row { display: flex; flex-direction: column; gap: 0.18rem; }
  .skill-cat {
    font-size: 0.66rem;
    font-weight: 600;
    color: #8a8780;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
  .tag {
    font-size: 0.65rem;
    font-weight: 400;
    background: rgba(255,255,255,0.07);
    color: #d8d4ce;
    border-radius: 2px;
    padding: 2px 6px;
  }
  .cert-list { display: flex; flex-direction: column; gap: 0.3rem; }
  .cert-item {
    font-size: 0.7rem;
    color: #b0aca5;
    padding-left: 0.75rem;
    position: relative;
    line-height: 1.4;
  }
  .cert-item::before { content: '–'; position: absolute; left: 0; color: var(--accent); }

  /* ── MAIN ── */
  .main {
    padding: 0.1rem 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .section {
    margin-top: 0 !important;
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .section-label {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent);
    white-space: nowrap;
  }
  .section-rule { flex: 1; height: 1px; background: var(--rule); }
  .profile-text { font-size: 0.82rem; color: var(--ink-mid); line-height: 1.75; font-weight: 300; }
  .exp-list { display: flex; flex-direction: column; gap: 1.25rem; }
  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.25rem;
  }
  .exp-company { font-size: 0.9rem; font-weight: 600; color: var(--ink); letter-spacing: -0.01em; }
  .exp-period {
    font-size: 0.68rem;
    font-weight: 500;
    color: var(--accent);
    white-space: nowrap;
    margin-top: 2px;
    letter-spacing: 0.04em;
  }
  .exp-role {
    font-size: 0.73rem;
    font-weight: 500;
    color: var(--ink-soft);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .exp-bullets { display: flex; flex-direction: column; gap: 0.3rem; }
  .exp-bullet {
    font-size: 0.76rem;
    color: var(--ink-mid);
    line-height: 1.6;
    padding-left: 1rem;
    position: relative;
  }
  .exp-bullet::before {
    content: '·';
    position: absolute;
    left: 0.25rem;
    color: var(--accent);
    font-size: 1.1em;
    line-height: 1.45;
  }
  .edu-block { display: flex; justify-content: space-between; align-items: flex-start; }
  .edu-degree { font-size: 0.85rem; font-weight: 600; color: var(--ink); }
  .edu-school { font-size: 0.75rem; color: var(--ink-soft); margin-top: 0.15rem; }
  .edu-period { font-size: 0.7rem; color: var(--accent); font-weight: 500; white-space: nowrap; }
  .ach-list { display: flex; gap: 0.6rem; flex-wrap: wrap; }
  .ach-badge {
    background: var(--accent-light);
    color: var(--accent);
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.3rem 0.75rem;
    border-radius: 2px;
    letter-spacing: 0.02em;
  }

  /* ── EXPORT BUTTON ── */
  .export-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #b85c2a;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 4px 20px rgba(184,92,42,0.35);
    transition: background 0.2s, transform 0.15s;
    z-index: 999;
  }
  .export-btn:hover { background: #a04e22; transform: translateY(-1px); }
  .export-btn:active { transform: scale(0.97); }
  .export-btn:disabled { background: #7a4020; cursor: not-allowed; transform: none; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .spin { animation: spin 0.8s linear infinite; display: inline-block; }

  @media print {
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0; padding: 0; }
    .resume-wrap { padding: 0; background: white; align-items: stretch; min-height: unset; }
    .page {
      width: 100%;
      max-width: 100%;
      box-shadow: none;
      display: grid;
      grid-template-columns: 260px 1fr;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sidebar {
      background: #1a1814 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .export-btn { display: none !important; }
  }
`;

// ─────────────────────────────────────────────
//  SUB-COMPONENTS
// ─────────────────────────────────────────────
function SectionHeader({ label }) {
  return (
    <div className="section-header" style={{ marginTop: 14 }}>
      <span className="section-label">{label}</span>
      <div className="section-rule" />
    </div>
  );
}

function Sidebar({ data }) {
  return (
    <aside className="sidebar">
      <div className="name-block">
        <div className="name">{data.name[0]}<br />{data.name[1]}</div>
        <div className="r-title">{data.title}</div>
      </div>

      <div className="s-section" style={{ marginTop: '0 !important' }}>
        <div className="s-label">Contact</div>
        <div className="contact-item">{data.contact.phone}</div>
        <div className="contact-item">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
        </div>
        {["portfolio", "github", "linkedin"].map((k) => (
          <div className="contact-item" key={k}>
            <a href={data.contact[k].href} target="_blank" rel="noreferrer">
              {data.contact[k].label}
            </a>
          </div>
        ))}
      </div>

      <div className="s-section">
        <div className="s-label">Skills</div>
        <div className="skill-group">
          {data.skills.map((sg) => (
            <div className="skill-row" key={sg.category}>
              <div className="skill-cat">{sg.category}</div>
              <div className="skill-tags">
                {sg.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="s-section">
        <div className="s-label">Certifications</div>
        <div className="cert-list">
          {data.certifications.map((c) => (
            <div className="cert-item" key={c}>{c}</div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function MainContent({ data }) {
  return (
    <main className="main">
      <section style={{ marginTop: 0 }}>
        <SectionHeader label="Profile" />
        <p className="profile-text">{data.profile}</p>
      </section>

      <section style={{ marginTop: 0 }}>
        <SectionHeader label="Experience" />
        <div className="exp-list">
          {data.experience.map((exp) => (
            <div className="exp-item" key={exp.company}>
              <div className="exp-header">
                <div className="exp-company">{exp.company}</div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <div className="exp-bullet" key={i}>{b}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 0 }}>
        <SectionHeader label="Education" />
        <div className="edu-block">
          <div>
            <div className="edu-degree">{data.education.degree}</div>
            <div className="edu-school">{data.education.school}</div>
          </div>
          <div className="edu-period">{data.education.period}</div>
        </div>
      </section>

      <section style={{ marginTop: 0 }}>
        <SectionHeader label="Recognition" />
        <div className="ach-list">
          {data.recognition.map((r) => (
            <span className="ach-badge" key={r}>{r}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────
//  EXPORT BUTTON
// ─────────────────────────────────────────────
function ExportButton() {
  const handleExport = () => window.print();

  return (
    <button className="export-btn" onClick={handleExport}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Export PDF
    </button>
  );
}

// ─────────────────────────────────────────────
//  ROOT COMPONENT
// ─────────────────────────────────────────────
export default function Resume({ data = RESUME }) {
  return (
    <>
      <style>{CSS}</style>
      <div className="resume-wrap">
        <div className="page">
          <Sidebar data={data} />
          <MainContent data={data} />
        </div>
      </div>
      <ExportButton />
    </>
  );
}
