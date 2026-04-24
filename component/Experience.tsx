"use client";
import { useState } from "react";

const experiences = [
  {
    number: "01",
    company: "Singularis Future Serv India Pvt. Ltd.",
    companyShort: "Singularis",
    role: "Software Engineer Trainee",
    type: "Internship",
    period: "Feb 2026 – Apr 2026",
    duration: "2 months",
    location: "Remote · Kochi, Kerala",
    manager: "Rahul Shinde",
    status: "active",
    description:
      "On-the-Job Training Program focused on hands-on software development. Working remotely under the mentorship of Rahul Shinde, contributing to real-world projects while deepening expertise in full-stack development.",
    highlights: [
      "Full-stack development",
      "Remote collaboration",
      "Agile workflow",
    ],
    tags: ["Node.js", "React", "MongoDB", "Express"],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section
      id="experience"
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
          03 /
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            letterSpacing: "0.1em",
          }}
        >
          EXPERIENCE
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
        Where I&apos;ve{" "}
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>
          worked
        </span>
        .
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={exp.company}
            exp={exp}
            isExpanded={expanded === i}
            onToggle={() => setExpanded(expanded === i ? null : i)}
          />
        ))}
      </div>

      {/* Timeline hint */}
      <div
        style={{
          marginTop: "48px",
          padding: "20px 24px",
          background: "var(--accent-dim2)",
          border: "1px solid rgba(200,241,53,0.1)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span style={{ color: "var(--accent)", fontSize: "10px" }}>◆</span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          More experiences coming soon — actively seeking full-time / internship roles in
          backend development and ML security.
        </span>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  isExpanded,
  onToggle,
}: {
  exp: (typeof experiences)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: `1px solid ${isExpanded ? "rgba(200,241,53,0.25)" : "var(--border)"}`,
        borderRadius: "8px",
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      {/* Header row — always visible */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "28px 32px",
          display: "grid",
          gridTemplateColumns: "64px 1fr auto",
          gap: "20px",
          alignItems: "center",
          textAlign: "left",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "none";
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--muted2)",
            letterSpacing: "0.05em",
          }}
        >
          {exp.number}
        </span>

        {/* Company + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "-0.4px",
                color: "var(--text)",
              }}
            >
              {exp.companyShort}
            </span>

            {/* Active badge */}
            {exp.status === "active" && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  color: "#4ADE80",
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.2)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#4ADE80",
                    boxShadow: "0 0 6px rgba(74,222,128,0.7)",
                    animation: "pulse 2s infinite",
                  }}
                />
                ACTIVE
              </span>
            )}

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
              {exp.type}
            </span>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--muted)",
              }}
            >
              {exp.role}
            </span>
            <span style={{ color: "var(--muted2)", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--muted2)",
              }}
            >
              {exp.period}
            </span>
            <span style={{ color: "var(--muted2)", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--muted2)",
              }}
            >
              {exp.location}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            transition: "transform 0.25s, color 0.2s",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            color: isExpanded ? "var(--accent)" : "var(--muted)",
          }}
        >
          ↓
        </span>
      </button>

      {/* Expanded body */}
      <div
        style={{
          maxHeight: isExpanded ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div
          style={{
            padding: "0 32px 28px 96px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              lineHeight: 1.9,
              color: "var(--muted)",
              maxWidth: "600px",
            }}
          >
            {exp.description}
          </p>

          {/* Highlights */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {exp.highlights.map((h) => (
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

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {exp.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text)",
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  borderRadius: "3px",
                  padding: "4px 10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              paddingTop: "8px",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              { label: "Duration", value: exp.duration },
              { label: "Manager", value: exp.manager },
              { label: "Mode", value: "Remote" },
            ].map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color: "var(--muted2)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text)",
                  }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}