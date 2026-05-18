import { FaCss3Alt } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCloudinary,
  SiRender,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const techStack = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    href: "https://developer.mozilla.org/docs/Web/HTML",
    tag: "MARKUP",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    href: "https://developer.mozilla.org/docs/Web/CSS",
    tag: "STYLE",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    tag: "LOGIC",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
    href: "https://react.dev",
    tag: "UI",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38B2AC",
    href: "https://tailwindcss.com",
    tag: "STYLE",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    href: "https://nodejs.org",
    tag: "RUNTIME",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#c9d1d9",
    href: "https://expressjs.com",
    tag: "SERVER",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    href: "https://www.mongodb.com",
    tag: "DB",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    href: "https://git-scm.com",
    tag: "VCS",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#c9d1d9",
    href: "https://github.com",
    tag: "COLLAB",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    color: "#3448C5",
    href: "https://cloudinary.com",
    tag: "MEDIA",
  },
  {
    name: "Render",
    icon: SiRender,
    color: "#46E3B7",
    href: "https://render.com",
    tag: "DEPLOY",
  },
  {
    name: "Atlas",
    icon: SiMongodb,
    color: "#47A248",
    href: "https://www.mongodb.com/atlas",
    tag: "CLOUD",
  },
];

const categories = [
  {
    label: "Frontend",
    index: "01",
    desc: "Pixel-perfect React interfaces driven by animation, accessibility, and design systems.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    index: "02",
    desc: "REST APIs, auth flows, and database architecture for production-grade apps.",
    skills: ["Node.js", "Express.js", "MongoDB", "Atlas"],
  },
  {
    label: "Tooling",
    index: "03",
    desc: "Version control, cloud storage, and continuous delivery pipelines.",
    skills: ["Git", "GitHub", "Cloudinary", "Render"],
  },
];

// Marquee strip of all tech names
const MarqueeStrip = () => {
  const items = [...techStack, ...techStack];
  return (
    <div className="skills-marquee-wrap">
      <div className="skills-marquee-track">
        {items.map((t, i) => {
          const Icon = t.icon;
          return (
            <span key={i} className="skills-marquee-item">
              <Icon size={14} style={{ color: t.color }} />
              {t.name}
              <span className="skills-marquee-dot">✦</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

const SkillCard = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <a
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      className="skill-card"
    >
      <span className="skill-card-tag">{tech.tag}</span>
      <div className="skill-card-icon-wrap">
        <Icon
          size={32}
          style={{ color: tech.color }}
          className="skill-card-icon"
        />
      </div>
      <span className="skill-card-name">{tech.name}</span>
      <div className="skill-card-line" style={{ background: tech.color }} />
    </a>
  );
};

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const restartInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 3200);
  };

  useEffect(() => {
    restartInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const activeCat = categories[activeIndex] ?? categories[0];
  const activeSkills = techStack.filter((t) =>
    activeCat.skills.includes(t.name),
  );

  return (
    <section id="skills" className="skills-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');

        .skills-section {
          background: #080b10;
          padding: 80px 0 100px;
          overflow: hidden;
          font-family: 'Syne', sans-serif;
          position: relative;
        }

        /* ── noise overlay ── */
        .skills-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        .skills-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* ── header ── */
        .skills-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding-bottom: 40px;
        }

        .skills-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.28em;
          color: #a3ff47;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .skills-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800;
          color: #f0f4ff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .skills-title em {
          font-style: normal;
          color: #a3ff47;
        }

        .skills-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: #5a6478;
          line-height: 1.7;
          max-width: 320px;
          align-self: flex-end;
          margin: 0;
        }

        /* ── marquee ── */
        .skills-marquee-wrap {
          overflow: hidden;
          border-top: 1px solid rgba(163,255,71,0.15);
          border-bottom: 1px solid rgba(163,255,71,0.15);
          padding: 11px 0;
          margin-bottom: 60px;
          background: rgba(163,255,71,0.03);
        }

        .skills-marquee-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: skillsMarquee 28s linear infinite;
        }

        @keyframes skillsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .skills-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #4b5668;
          padding: 0 22px;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .skills-marquee-item:hover { color: #a3ff47; }

        .skills-marquee-dot {
          font-size: 8px;
          color: rgba(163,255,71,0.4);
        }

        /* ── body: two columns ── */
        .skills-body {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .skills-body { grid-template-columns: 1fr; }
        }

        /* ── category tabs ── */
        .skills-tabs {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .skills-tab {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 18px;
          border-radius: 12px;
          cursor: pointer;
          border: 1px solid transparent;
          background: transparent;
          transition: all 0.25s ease;
          text-align: left;
        }

        .skills-tab:hover {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.06);
        }

        .skills-tab.active {
          background: rgba(163,255,71,0.05);
          border-color: rgba(163,255,71,0.18);
        }

        .skills-tab-index {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #2e3748;
          margin-top: 4px;
          flex-shrink: 0;
          transition: color 0.25s;
        }

        .skills-tab.active .skills-tab-index { color: #a3ff47; }

        .skills-tab-label {
          font-size: 18px;
          font-weight: 700;
          color: #3e4a60;
          line-height: 1;
          transition: color 0.25s;
        }

        .skills-tab.active .skills-tab-label { color: #f0f4ff; }

        .skills-tab-desc {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #2e3748;
          line-height: 1.6;
          margin-top: 5px;
          transition: color 0.25s;
        }

        .skills-tab.active .skills-tab-desc { color: #5a6478; }

        /* ── progress bar under active tab ── */
        .skills-tab-bar {
          height: 2px;
          background: rgba(163,255,71,0.15);
          border-radius: 99px;
          margin-top: 8px;
          overflow: hidden;
        }

        .skills-tab-bar-fill {
          height: 100%;
          background: #a3ff47;
          border-radius: 99px;
          animation: fillBar 3.2s linear infinite;
          transform-origin: left;
        }

        @keyframes fillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── card grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 16px;
          align-items: start;
          grid-auto-rows: 1fr;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            min-height: 620px;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            min-height: 620px;
          }
        }

        /* ── individual card ── */
        .skill-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          padding: 22px 18px 18px;
          min-height: 170px;
          border-radius: 16px;
          background: #0d1117;
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          cursor: pointer;
          animation: cardIn 0.4s ease both;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .skill-card:hover {
          transform: translateY(-4px);
          border-color: rgba(163,255,71,0.22);
          background: #111820;
        }

        .skill-card:nth-child(1) { animation-delay: 0.05s; }
        .skill-card:nth-child(2) { animation-delay: 0.10s; }
        .skill-card:nth-child(3) { animation-delay: 0.15s; }
        .skill-card:nth-child(4) { animation-delay: 0.20s; }
        .skill-card:nth-child(5) { animation-delay: 0.25s; }

        .skill-card-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          color: #2e3748;
          text-transform: uppercase;
        }

        .skill-card-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s;
        }

        .skill-card:hover .skill-card-icon-wrap {
          background: rgba(163,255,71,0.06);
        }

        .skill-card-icon {
          transition: filter 0.25s, transform 0.25s;
        }

        .skill-card:hover .skill-card-icon {
          filter: drop-shadow(0 0 10px currentColor);
          transform: scale(1.08);
        }

        .skill-card-name {
          font-size: 15px;
          font-weight: 700;
          color: #c8d3e6;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .skill-card:hover .skill-card-name { color: #f0f4ff; }

        /* accent bottom line */
        .skill-card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.25s;
        }

        .skill-card:hover .skill-card-line { opacity: 0.7; }

        /* ── stat row ── */
        .skills-stats {
          display: flex;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          margin-top: 48px;
        }

        .skills-stat {
          flex: 1;
          padding: 24px 20px;
          border-right: 1px solid rgba(255,255,255,0.07);
          text-align: center;
        }

        .skills-stat:last-child { border-right: none; }

        .skills-stat-num {
          font-size: 2rem;
          font-weight: 800;
          color: #a3ff47;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .skills-stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #3e4a60;
          text-transform: uppercase;
          margin-top: 6px;
        }

        @media (max-width: 480px) {
          .skills-stats { flex-direction: column; }
          .skills-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .skills-stat:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="skills-inner">
        {/* Header */}
        <div className="skills-header">
          <div>
            <p className="skills-eyebrow">// Tech Stack</p>
            <h2 className="skills-title">
              Tools that
              <br />
              <em>ship</em> products.
            </h2>
          </div>
          <p className="skills-subtitle">
            A full-spectrum stack —<br />
            from pixel to server to
            <br />
            production deployment.
          </p>
        </div>

        {/* Marquee */}
        <MarqueeStrip />

        {/* Body */}
        <div className="skills-body">
          {/* Tabs */}
          <div className="skills-tabs">
            {categories.map((cat, i) => (
              <button
                key={cat.index}
                className={`skills-tab${activeIndex === i ? " active" : ""}`}
                onClick={() => {
                  setActiveIndex(i);
                  restartInterval();
                }}
              >
                <span className="skills-tab-index">{cat.index}</span>
                <div>
                  <div className="skills-tab-label">{cat.label}</div>
                  <div className="skills-tab-desc">{cat.desc}</div>
                  {activeIndex === i && (
                    <div className="skills-tab-bar">
                      <div className="skills-tab-bar-fill" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Card grid — keyed on activeIndex so cards re-animate */}
          <div className="skills-grid" key={activeIndex}>
            {activeSkills.map((tech) => (
              <SkillCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="skills-stats">
          <div className="skills-stat">
            <div className="skills-stat-num">13+</div>
            <div className="skills-stat-label">Technologies</div>
          </div>
          <div className="skills-stat">
            <div className="skills-stat-num">3</div>
            <div className="skills-stat-label">Core Domains</div>
          </div>
          <div className="skills-stat">
            <div className="skills-stat-num">∞</div>
            <div className="skills-stat-label">Learning Ahead</div>
          </div>
          <div className="skills-stat">
            <div className="skills-stat-num">Full</div>
            <div className="skills-stat-label">Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
