"use client";
import { useEffect, useRef, useState } from "react";

const terminalLines = [
  { delay: 0,    text: "whoami",                            type: "cmd" },
  { delay: 600,  text: "yuvraj_prakash",                    type: "out" },
  { delay: 1000, text: "cat skills.txt",                    type: "cmd" },
  { delay: 1600, text: "► Node.js  Express  MongoDB",       type: "out" },
  { delay: 1900, text: "► React    Redux    Tailwind",       type: "out" },
  { delay: 2200, text: "► C++      Python   Scikit-learn",  type: "out" },
  { delay: 2700, text: "cat interests.txt",                  type: "cmd" },
  { delay: 3300, text: "► Backend Development",             type: "out" },
  { delay: 3600, text: "► ML Security & AI Safety",         type: "out" },
  { delay: 3900, text: "► AI in Biomedicine",               type: "out" },
  { delay: 4400, text: "leetcode --stats",                  type: "cmd" },
  { delay: 5000, text: "✓ 220+ problems solved",            type: "success" },
  { delay: 5400, text: "status",                            type: "cmd" },
  { delay: 6000, text: "● Open to opportunities",           type: "success" },
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
    for (let i = 0; i < 55; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.35 + 0.08,
      });
    }
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,241,53,${d.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(200,241,53,${0.05 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
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
    terminalLines.forEach((line, i) => {
      const t = setTimeout(() => setVisibleLines(i + 1), line.delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 40px 60px",
      }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, opacity: 0.55, pointerEvents: "none" }} />
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Two-column layout */}
      <div
        style={{
          position: "relative", zIndex: 1,
          width: "100%", maxWidth: "1200px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)", fontSize: "12px",
              color: "var(--accent)", letterSpacing: "0.18em",
              marginBottom: "22px", opacity: 0.9,
            }}
          >
            &gt; Hello, World!
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 800, lineHeight: 0.92,
              letterSpacing: "-3px", color: "var(--text)",
              marginBottom: "22px",
            }}
          >
            Yuvraj
            <br />
            <span style={{ color: "var(--accent)" }}>Prakash</span>
            <span style={{ color: "var(--muted2)" }}>.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic",
              fontSize: "clamp(17px, 2vw, 22px)",
              color: "var(--muted)", marginBottom: "44px",
              lineHeight: 1.5, maxWidth: "400px",
            }}
          >
            Full Stack Developer crafting backend systems & exploring ML Security.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "52px" }}>
            <a
              href="#projects"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "13px",
                color: "var(--bg)", background: "var(--accent)",
                padding: "13px 26px", borderRadius: "4px",
                textDecoration: "none", fontWeight: 500,
                letterSpacing: "0.04em", transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              View Projects →
            </a>
            <a
              href="https://drive.google.com/file/d/1VDpeO-W-G3HudQ5URrzSuic1fqDAWn4d/view?usp=drive_link"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "13px",
                color: "var(--text)", background: "transparent",
                padding: "13px 26px",
                border: "1px solid var(--border-hover)",
                borderRadius: "4px", textDecoration: "none",
                letterSpacing: "0.04em", transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Resume ↗
            </a>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { label: "Projects", value: "4+" },
              { label: "DSA Problems", value: "220+" },
              { label: "Certifications", value: "3" },
              { label: "CGPA", value: "7.1" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "6px", padding: "10px 16px",
                  display: "flex", flexDirection: "column", gap: "2px",
                }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--accent)", lineHeight: 1 }}>
                  {s.value}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.05em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: terminal card */}
        <div
          style={{
            background: "#0D0D0D",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Glow behind card */}
          <div
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px", height: "200px",
              background: "radial-gradient(ellipse, rgba(200,241,53,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Title bar */}
          <div
            style={{
              background: "#161616",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "13px 18px",
              display: "flex", alignItems: "center", gap: "12px",
            }}
          >
            <div style={{ display: "flex", gap: "7px" }}>
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                color: "var(--muted)", letterSpacing: "0.04em",
                flex: 1, textAlign: "center",
              }}
            >
              yuvraj@portfolio — bash
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: "22px 22px 18px", minHeight: "360px" }}>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "flex-start", gap: "0",
                  marginBottom: line.type === "cmd" && i > 0 ? "6px" : "0",
                  marginTop: line.type === "cmd" && i > 0 ? "10px" : "0",
                }}
              >
                {line.type === "cmd" ? (
                  <div style={{ display: "flex", gap: "0", width: "100%" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4ADE80", marginRight: "6px", flexShrink: 0 }}>
                      ❯
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text)", lineHeight: 1.7 }}>
                      {line.text}
                    </span>
                  </div>
                ) : (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: "12px",
                      color: line.type === "success" ? "#4ADE80" : "#888",
                      paddingLeft: "18px", lineHeight: 1.7,
                    }}
                  >
                    {line.text}
                  </div>
                )}
              </div>
            ))}

            {/* cursor */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4ADE80" }}>❯</span>
              <span
                style={{
                  display: "inline-block", width: "7px", height: "14px",
                  background: cursorOn ? "var(--accent)" : "transparent",
                  borderRadius: "1px", verticalAlign: "middle",
                  transition: "background 0.08s",
                }}
              />
            </div>
          </div>

          {/* Status bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "10px 18px",
              display: "flex", gap: "20px", flexWrap: "wrap",
              background: "#161616",
            }}
          >
            {[
              { dot: "#4ADE80", label: "Open to work" },
              { dot: "var(--accent)", label: "JIIT Noida · ECE" },
              { dot: "#60A5FA", label: "2023 – 2027" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.04em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute", bottom: "28px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.3,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em" }}>
          SCROLL
        </span>
        <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
      </div>
    </section>
  );
}