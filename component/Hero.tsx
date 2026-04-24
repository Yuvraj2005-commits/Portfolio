"use client";
import { useEffect, useRef, useState } from "react";

const terminalLines = [
  { delay: 0,    text: "whoami",                                     type: "cmd" },
  { delay: 700,  text: "yuvraj_prakash  @  JIIT-Noida",             type: "out" },
  { delay: 1200, text: "cat tech-stack.json",                        type: "cmd" },
  { delay: 1900, text: '{ "backend": ["Node.js","Express","NestJS"] }', type: "json" },
  { delay: 2200, text: '{ "frontend": ["React","Redux","Tailwind"] }',  type: "json" },
  { delay: 2500, text: '{ "db":      ["MongoDB","PostgreSQL"] }',       type: "json" },
  { delay: 3000, text: "ls projects/",                               type: "cmd" },
  { delay: 3700, text: "iNotebook/  CyberMedShield/  UpSkill/  FlightFare/", type: "out" },
  { delay: 4200, text: "leetcode --streak",                          type: "cmd" },
  { delay: 4900, text: "✓  220+ problems  ·  LeetCode + GFG",       type: "success" },
  { delay: 5400, text: "echo $STATUS",                               type: "cmd" },
  { delay: 6100, text: "● Interning @ Singularis · Open to work",   type: "success" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const dots: { x: number; y: number; vx: number; vy: number; r: number; opacity: number }[] = [];
    for (let i = 0; i < 50; i++) {
      dots.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.4 + 0.4, opacity: Math.random() * 0.3 + 0.08 });
    }
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,241,53,${d.opacity})`; ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) for (let j = i + 1; j < dots.length; j++) {
        const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
        if (dist < 110) {
          ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(200,241,53,${0.05 * (1 - dist / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((line, i) => { timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay)); });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "100px 20px 60px" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Two-col on desktop, stacked on mobile */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>

          {/* LEFT: text */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", letterSpacing: "0.18em", marginBottom: "20px", opacity: 0.9 }}>
              &gt; Hello, World!
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 8vw, 96px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-3px", color: "var(--text)", marginBottom: "20px" }}>
              Yuvraj<br />
              <span style={{ color: "var(--accent)" }}>Prakash</span>
              <span style={{ color: "var(--muted2)" }}>.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(16px, 2.2vw, 22px)", color: "var(--muted)", marginBottom: "40px", lineHeight: 1.5, maxWidth: "400px" }}>
              Full Stack Developer crafting backend systems & exploring ML Security.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "44px" }}>
              <a href="#projects" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--bg)", background: "var(--accent)", padding: "13px 24px", borderRadius: "4px", textDecoration: "none", fontWeight: 500, letterSpacing: "0.04em", transition: "opacity 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                View Projects →
              </a>
              <a href="https://drive.google.com/file/d/1VDpeO-W-G3HudQ5URrzSuic1fqDAWn4d/view?usp=drive_link" target="_blank" rel="noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text)", background: "transparent", padding: "13px 24px", border: "1px solid var(--border-hover)", borderRadius: "4px", textDecoration: "none", letterSpacing: "0.04em", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Resume ↗
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[{ label: "Projects", value: "4+" }, { label: "DSA Problems", value: "220+" }, { label: "Certs", value: "3" }, { label: "CGPA", value: "7.1" }].map((s) => (
                <div key={s.label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--accent)", lineHeight: 1 }}>{s.value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.05em" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: terminal */}
          <div style={{ position: "relative" }}>
            {/* Glow border */}
            <div style={{ position: "absolute", inset: "-1px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(200,241,53,0.18) 0%, transparent 50%, rgba(96,165,250,0.1) 100%)", zIndex: 0 }} />
            <div style={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "13px", overflow: "hidden", position: "relative", zIndex: 1, boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
              {/* Ambient glows */}
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", background: "radial-gradient(circle, rgba(200,241,53,0.07) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

              {/* Title bar */}
              <div style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "11px 16px", display: "flex", alignItems: "center", gap: "10px", position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (<div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />))}
                </div>
                <span style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "11px", color: "#555", background: "rgba(255,255,255,0.04)", borderRadius: "4px", padding: "3px 12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  yuvraj@portfolio — zsh
                </span>
              </div>

              {/* Path bar */}
              <div style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "6px 18px", display: "flex", alignItems: "center", gap: "6px", position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#60A5FA" }}>~</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#555" }}>/</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)" }}>portfolio</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#555", marginLeft: "auto" }}>⎇ main</span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: "18px 20px 14px", minHeight: "300px", maxHeight: "380px", overflowY: "auto", position: "relative", zIndex: 1 }}>
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} style={{ marginTop: line.type === "cmd" && i > 0 ? "12px" : "0" }}>
                    {line.type === "cmd" ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#4ADE80", marginRight: "8px", flexShrink: 0 }}>❯</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", lineHeight: 1.6 }}>
                          {line.text.split(" ").map((word, wi) => (
                            <span key={wi} style={{ color: wi === 0 ? "#C8F135" : word.startsWith("--") ? "#60A5FA" : "#E2E8F0", marginRight: wi < line.text.split(" ").length - 1 ? "5px" : "0" }}>{word}</span>
                          ))}
                        </span>
                      </div>
                    ) : line.type === "json" ? (
                      <div style={{ paddingLeft: "20px", lineHeight: 1.6 }}>
                        {line.text.replace(/[{}]/g, "").split(":").map((part, pi) => (
                          <span key={pi} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: pi === 0 ? "#F9A8D4" : "#86EFAC" }}>
                            {pi === 0 ? `{ ${part.trim()}: ` : `${part.trim()} }`}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: line.type === "success" ? "#4ADE80" : "#666", paddingLeft: "20px", lineHeight: 1.65 }}>
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}
                {/* Cursor */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#4ADE80" }}>❯</span>
                  <span style={{ display: "inline-block", width: "7px", height: "14px", background: cursorOn ? "#C8F135" : "transparent", borderRadius: "1px", transition: "background 0.1s" }} />
                </div>
              </div>

              {/* Status bar */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "8px 16px", display: "flex", alignItems: "center", gap: "0", background: "#111111", position: "relative", zIndex: 1, flexWrap: "wrap", rowGap: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(200,241,53,0.1)", borderRadius: "3px", padding: "3px 10px", marginRight: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 6px rgba(74,222,128,0.7)" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#4ADE80", letterSpacing: "0.04em" }}>Open to work</span>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", marginRight: "auto" }}>JIIT · ECE · 2027</span>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[{ c: "#FF5F57", l: "err 0" }, { c: "#FFBD2E", l: "warn 0" }, { c: "#4ADE80", l: "ok" }].map((s) => (
                    <div key={s.l} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: s.c }} />
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444" }}>{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{ display: "flex", gap: "8px", marginTop: "14px", justifyContent: "flex-end", flexWrap: "wrap" }}>
              {[{ icon: "⚡", label: "220+ DSA", color: "#FBBF24" }, { icon: "◆", label: "4 Projects", color: "var(--accent)" }, { icon: "✓", label: "3 Certs", color: "#34D399" }].map((b) => (
                <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "5px 12px" }}>
                  <span style={{ fontSize: "10px", color: b.color }}>{b.icon}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)" }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.28 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em" }}>SCROLL</span>
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
      </div>
    </section>
  );
}