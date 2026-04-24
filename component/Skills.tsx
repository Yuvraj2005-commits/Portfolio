"use client";
import { useState } from "react";

const skillGroups = [
  {
    label: "Frontend",
    icon: "◈",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    label: "Backend",
    icon: "◇",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 88 },
      { name: "NestJS", level: 65 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    label: "Database",
    icon: "◉",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 72 },
      { name: "SQL", level: 75 },
      { name: "Mongoose", level: 82 },
    ],
  },
  {
    label: "Languages",
    icon: "◆",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 80 },
      { name: "Python", level: 72 },
      { name: "MATLAB", level: 40 },
    ],
  },
  {
    label: "AI / Security",
    icon: "◎",
    skills: [
      { name: "Scikit-learn", level: 65 },
      { name: "FGSM / PGD", level: 60 },
      { name: "ML Robustness", level: 50 },
      { name: "AI/ML Basics", level: 30 },
    ],
  },
  {
    label: "Tools",
    icon: "◫",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Postman", level: 82 },
      { name: "Render", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 65 },
    ],
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);

  const group = skillGroups[activeGroup];

  return (
    <section
      id="skills"
      style={{
        padding: "120px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "0.15em",
          }}
        >
          04 /
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            letterSpacing: "0.1em",
          }}
        >
          SKILLS
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
        What I{" "}
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>
          know
        </span>
        .
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "2px" }}>
        {/* Left: tab list */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {skillGroups.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActiveGroup(i)}
              style={{
                width: "100%",
                background: activeGroup === i ? "var(--accent-dim)" : "none",
                border: "none",
                borderLeft: activeGroup === i ? "2px solid var(--accent)" : "2px solid transparent",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textAlign: "left",
                transition: "background 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (activeGroup !== i)
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
              onMouseLeave={(e) => {
                if (activeGroup !== i)
                  (e.currentTarget as HTMLElement).style.background = "none";
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: activeGroup === i ? "var(--accent)" : "var(--muted2)",
                  transition: "color 0.15s",
                }}
              >
                {g.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: activeGroup === i ? "var(--text)" : "var(--muted)",
                  letterSpacing: "0.04em",
                  transition: "color 0.15s",
                }}
              >
                {g.label}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--muted2)",
                }}
              >
                {g.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Right: skill bars */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "32px 36px",
            marginLeft: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              letterSpacing: "0.15em",
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>{group.icon}</span>
            {group.label.toUpperCase()}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: all-tech pill cloud */}
      <div
        style={{
          marginTop: "32px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "28px 32px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--muted2)",
            letterSpacing: "0.12em",
            marginBottom: "20px",
          }}
        >
          FULL STACK AT A GLANCE
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {skillGroups.flatMap((g) =>
            g.skills.map((s) => (
              <span
                key={s.name}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--muted)",
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "5px 12px",
                  transition: "color 0.15s, border-color 0.15s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,241,53,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                {s.name}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: { name: string; level: number } }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--text)",
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--muted2)",
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "var(--surface2)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, var(--accent) 0%, rgba(200,241,53,0.5) 100%)`,
            borderRadius: "2px",
            transition: "width 0.6s ease",
          }}
        />
      </div>
    </div>
  );
}