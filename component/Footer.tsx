export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        © 2025 Yuvraj Prakash
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted2)",
        }}
      >
        Built with Next.js + Tailwind
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        Noida, India <span style={{ color: "var(--accent)" }}>◆</span>
      </span>
    </footer>
  );
}