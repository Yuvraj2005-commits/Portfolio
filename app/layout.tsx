import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Yuvraj Prakash — Full Stack Developer";
const description =
  "Portfolio of Yuvraj Prakash — Full Stack Developer specializing in Next.js, Node.js & NestJS, exploring ML Security. B.Tech ECE @ JIIT Noida.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Yuvraj Prakash",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "ML Security",
    "JIIT Noida",
  ],
  authors: [{ name: "Yuvraj Prakash" }],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}