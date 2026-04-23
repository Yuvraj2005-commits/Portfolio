import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuvraj Prakash — Full Stack Developer",
  description: "Portfolio of Yuvraj Prakash — Full Stack Developer & ML Security Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}