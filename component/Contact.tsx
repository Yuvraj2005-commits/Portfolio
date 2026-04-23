"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", letterSpacing: "0.15em" }}>
          04 /
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.1em" }}>
          CONTACT
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-2px",
              marginBottom: "28px",
              color: "var(--text)",
            }}
          >
            Let&apos;s{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)", display: "block" }}>
              connect
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "40px",
              maxWidth: "420px",
            }}
          >
            I&apos;m always open to new opportunities, interesting projects, and collaborations.
            Whether it&apos;s about backend dev, ML security, or just a chat — reach out!
          </p>

          <a
            href="mailto:yuvrajprakash0612@gmail.com"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 500,
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Say Hello →
          </a>
        </div>

        {/* Right: contact details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            {
              label: "Email",
              value: "yuvrajprakash0612@gmail.com",
              href: "mailto:yuvrajprakash0612@gmail.com",
              icon: "✉",
            },
            {
              label: "Phone",
              value: "+91 87579 91856",
              href: "tel:+918757991856",
              icon: "◎",
            },
            {
              label: "Location",
              value: "Noida, Uttar Pradesh, India",
              href: null,
              icon: "◉",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/yuvrajprakash",
              href: "https://linkedin.com",
              icon: "▲",
            },
            {
              label: "GitHub",
              value: "github.com/yuvrajprakash",
              href: "https://github.com",
              icon: "◆",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,241,53,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--accent)",
                  width: "20px",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    marginBottom: "3px",
                  }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--text)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--text)",
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}