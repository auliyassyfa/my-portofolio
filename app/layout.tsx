import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const heading = Fredoka({ subsets: ["latin"], variable: "--font-heading" });
const body = Quicksand({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Auliya Putri Assyfa | Portfolio",
  description: "Portfolio of Auliya Putri Assyfa, informatics graduate and full-stack web developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}