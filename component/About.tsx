"use client";

export default function About() {
  return (
    <section
      id="about"
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
          01 /
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            letterSpacing: "0.1em",
          }}
        >
          ABOUT
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              marginBottom: "28px",
              color: "var(--text)",
            }}
          >
            Building things that{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>
              matter
            </span>
            .
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "20px",
            }}
          >
            I&apos;m a B.Tech ECE student at JIIT Noida (Batch of &apos;27), passionate about building
            scalable web applications and exploring the intersection of AI and security.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "32px",
            }}
          >
            I specialize in backend development with the MERN stack, and I&apos;m deeply interested
            in ML Security — particularly adversarial attacks and model robustness in critical
            domains like biomedicine.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "LeetCode", href: "https://leetcode.com", icon: "⚡" },
              { label: "GitHub", href: "https://github.com", icon: "◆" },
              { label: "LinkedIn", href: "https://linkedin.com", icon: "▲" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
              >
                <span style={{ fontSize: "10px" }}>{link.icon}</span>
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right: Info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              EDUCATION
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "16px",
                color: "var(--text)",
                marginBottom: "4px",
              }}
            >
              B.Tech — ECE
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--muted)",
              }}
            >
              Jaypee Institute of Information Technology
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--muted)",
                marginTop: "2px",
              }}
            >
              Noida, UP · 2023 – 2027 · CGPA: 7.1/10
            </div>
          </div>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              COURSEWORK
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "DSA (C++)", "OS", "DBMS", "AI", "OOP",
                "Web Tech", "Networks",
              ].map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "4px 10px",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "var(--accent-dim2)",
              border: "1px solid rgba(200,241,53,0.15)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              CERTIFICATIONS
            </div>
            {[
              "Full Stack Development — Udemy",
              "MongoDB Basics — MongoDB University",
              "SQL Certification",
            ].map((cert) => (
              <div
                key={cert}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text)",
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(200,241,53,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "8px" }}>◆</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}