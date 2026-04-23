"use client";

const projects = [
  {
    number: "01",
    title: "iNotebook",
    period: "July 2025",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    category: "MERN Stack",
    desc: "Secure cloud notebook app with scalable backend handling concurrent requests. JWT authentication, Bcrypt password hashing, React Hooks with Context API for global state management.",
    highlights: ["99% uptime on Render", "Stateless JWT Auth", "Context API state"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    number: "02",
    title: "CyberMedShield",
    period: "Jan 2026",
    stack: ["Python", "Scikit-learn", "ML Security"],
    category: "AI Security",
    desc: "Security framework evaluating ML model robustness against adversarial attacks (FGSM, PGD) and data poisoning. Implemented defensive protocols including adversarial training.",
    highlights: ["+15% accuracy restored", "FGSM & PGD attacks", "Healthcare AI safety"],
    liveLink: null,
    githubLink: "#",
    featured: true,
  },
  {
    number: "03",
    title: "UpSkill-Connect",
    period: "Feb 2025",
    stack: ["React.js", "Node.js", "MongoDB"],
    category: "Full Stack",
    desc: "Career counseling platform with Role-Based Access Control for distinct Student and Counselor dashboards. Conflict-free session booking with compound indexing optimization.",
    highlights: ["20% faster queries", "RBAC dashboards", "Real-time availability"],
    liveLink: null,
    githubLink: "#",
    featured: false,
  },
  {
    number: "04",
    title: "FlightFare",
    period: "Nov 2024",
    stack: ["C++", "Graph Algorithms", "DP", "JSON"],
    category: "Systems",
    desc: "High-performance routing engine using Dijkstra/BFS for cheapest flight paths. Levenshtein Distance for intelligent city name auto-correction. Custom multi-threaded HTTP server with cpp-httplib.",
    highlights: ["Multi-threaded HTTP", "Fuzzy city search", "Dijkstra routing"],
    liveLink: null,
    githubLink: "#",
    featured: false,
  },
];

const stackColors: Record<string, string> = {
  "MongoDB": "rgba(71,162,72,0.15)",
  "Express": "rgba(255,255,255,0.06)",
  "React": "rgba(97,218,251,0.12)",
  "Node.js": "rgba(71,162,72,0.12)",
  "Python": "rgba(55,118,171,0.15)",
  "Scikit-learn": "rgba(200,241,53,0.1)",
  "ML Security": "rgba(200,241,53,0.1)",
  "React.js": "rgba(97,218,251,0.12)",
  "C++": "rgba(149,117,205,0.15)",
  "Graph Algorithms": "rgba(255,152,0,0.12)",
  "DP": "rgba(255,152,0,0.1)",
  "JSON": "rgba(255,255,255,0.06)",
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", letterSpacing: "0.15em" }}>
          02 /
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.1em" }}>
          PROJECTS
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-1.5px",
          marginBottom: "56px",
          lineHeight: 1.05,
          color: "var(--text)",
        }}
      >
        Things I&apos;ve{" "}
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>built</span>
        .
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {projects.map((p) => (
          <ProjectRow key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ p }: { p: typeof projects[0] }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "32px 36px",
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        gap: "24px",
        alignItems: "start",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "default",
        marginBottom: "8px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,241,53,0.25)";
        (e.currentTarget as HTMLElement).style.background = "var(--surface2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.background = "var(--surface)";
      }}
    >
      {/* Number */}
      <div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--muted2)",
            letterSpacing: "0.05em",
          }}
        >
          {p.number}
        </span>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--accent)",
            marginTop: "4px",
            opacity: 0.7,
          }}
        >
          {p.period.split(" ")[1]}
        </div>
      </div>

      {/* Main content */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "22px",
              letterSpacing: "-0.5px",
              color: "var(--text)",
            }}
          >
            {p.title}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              background: "var(--accent-dim)",
              border: "1px solid rgba(200,241,53,0.2)",
              borderRadius: "3px",
              padding: "3px 8px",
              letterSpacing: "0.08em",
            }}
          >
            {p.category}
          </span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            lineHeight: 1.8,
            color: "var(--muted)",
            marginBottom: "20px",
            maxWidth: "580px",
          }}
        >
          {p.desc}
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
          {p.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text)",
                background: stackColors[tech] || "rgba(255,255,255,0.06)",
                borderRadius: "3px",
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {p.highlights.map((h) => (
            <span
              key={h}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ fontSize: "6px" }}>◆</span> {h}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
        {p.githubLink && (
          <a
            href={p.githubLink}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
              textDecoration: "none",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "6px 14px",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            GitHub ↗
          </a>
        )}
        {p.liveLink && (
          <a
            href={p.liveLink}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--bg)",
              background: "var(--accent)",
              textDecoration: "none",
              borderRadius: "4px",
              padding: "6px 14px",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  );
}