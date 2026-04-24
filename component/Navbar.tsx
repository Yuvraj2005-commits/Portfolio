"use client";
import { useState, useEffect } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "12px 20px" : "20px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.35s ease",
      }}>
        <a href="#" style={{ textDecoration: "none", zIndex: 101 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "var(--text)", letterSpacing: "-0.5px" }}>
            YP<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ gap: "28px", alignItems: "center", display: "flex" }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)",
              textDecoration: "none", letterSpacing: "0.03em", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >{l}</a>
          ))}
          <a href="mailto:yuvrajprakash0612@gmail.com" style={{
            fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--bg)",
            background: "var(--accent)", padding: "8px 16px", borderRadius: "4px",
            textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s",
          }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >Hire Me</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", zIndex: 101, display: "flex", flexDirection: "column", gap: "5px" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px", background: "var(--text)",
              transition: "all 0.3s", transformOrigin: "center",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                : menuOpen && i === 1 ? "scaleX(0)"
                  : menuOpen && i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position: "fixed", inset: 0, background: "var(--bg)", zIndex: 99,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px",
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.3s ease",
      }}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--text)", textDecoration: "none" }}
          >{l}</a>
        ))}
        <a href="mailto:yuvrajprakash0612@gmail.com" onClick={() => setMenuOpen(false)}
          style={{ marginTop: "12px", fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--bg)", background: "var(--accent)", padding: "12px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: 500 }}
        >Hire Me</a>
      </div>
    </>
  );
}