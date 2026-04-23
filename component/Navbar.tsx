"use client";
import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 40px" : "24px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <a href="#" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "20px",
            color: "var(--text)",
            letterSpacing: "-0.5px",
          }}
        >
          YP<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }} className="hidden md:flex">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {l}
          </a>
        ))}
        <a
          href="mailto:yuvrajprakash0612@gmail.com"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--bg)",
            background: "var(--accent)",
            padding: "8px 18px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--text)",
              transition: "all 0.3s",
              transformOrigin: "center",
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : menuOpen && i === 1
                  ? "scaleX(0)"
                  : menuOpen && i === 2
                  ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            zIndex: 99,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 700,
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}