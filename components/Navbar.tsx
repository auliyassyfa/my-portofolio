"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

interface NavbarProps {
  navItems: [string, string][];
}

export default function Navbar({ navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20 md:py-5">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tight transition hover:opacity-90"
        >
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-base md:flex lg:gap-10">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted transition hover:text-accent font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition hover:border-accent hover:text-accent md:hidden focus:outline-none"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger (3 bars) Icon
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-line/60 bg-bg/95 px-6 py-5 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4 text-base">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-3 py-2 text-lg font-medium text-muted transition hover:bg-surface hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

