"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";
import ThemeToggle from "@/components/common/ThemeToggle";
import MagneticButton from "@/components/common/MagneticButton";

interface HeaderProps {
  portfolioName: string;
}

export default function Header({ portfolioName }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clockTime, setClockTime] = useState("");

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 + 330 * 60000
      );
      const h = String(istTime.getHours()).padStart(2, "0");
      const m = String(istTime.getMinutes()).padStart(2, "0");
      const s = String(istTime.getSeconds()).padStart(2, "0");
      setClockTime(`${h}:${m}:${s}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll and Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 40);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollProgress(progress);

      const sections = siteConfig.navLinks.map((l) =>
        l.href.replace("#", "")
      );
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav
        className={`nav ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-label="Primary"
        style={{ "--scroll": scrollProgress.toFixed(4) } as any}
      >
        <a
          className="brand"
          href="#hero"
          aria-label={`${portfolioName} — home`}
        >
          <span className="brand__mark">{siteConfig.initials}</span>
          <span className="brand__name">
            {portfolioName} <span className="role">— DevOps Engineer</span>
          </span>
        </a>

        <div className="nav__links">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link ${isActive ? "is-active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="nav__right">
          <span
            className="nav__status"
            title="Local time · Chennai / Karaikal (IST)"
          >
            <span className="live" />
            available
            <span className="clock tnum">{clockTime}</span>
          </span>

          <ThemeToggle />

          <MagneticButton
            href="#contact"
            className="btn btn--primary nav__cta"
            cursorLabel="connect"
          >
            Let&apos;s talk
          </MagneticButton>

          <button
            className="nav__toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
