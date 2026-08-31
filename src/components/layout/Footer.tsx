"use client";

import { siteConfig } from "@/config/site.config";

interface FooterProps {
  portfolioName: string;
}

export default function Footer({ portfolioName }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer__row">
        <a className="footer__brand" href="#hero" data-cursor="top">
          <span className="brand__mark">{siteConfig.initials}</span> {portfolioName}
        </a>
        <span className="footer__mono">
          © {new Date().getFullYear()} · deployed from Chennai / Karaikal · status:{" "}
          <span className="text-accent">operational</span>
        </span>
        <div className="footer__links">
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
          >
            GitHub
          </a>
          <a href={siteConfig.socialLinks.email} data-cursor="send">
            Email
          </a>
          <a href="#hero" data-cursor="top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
