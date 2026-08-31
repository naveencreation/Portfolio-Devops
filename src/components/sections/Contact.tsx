"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import MagneticButton from "@/components/common/MagneticButton";

interface ContactProps {
  email: string;
  phone: string;
  location: string;
}

export default function Contact({ email, phone, location }: ContactProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2400);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2400);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="idx">05</span> — ping santhosh
        </motion.span>

        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to build
          <br />
          <span className="grad">reliable cloud platforms?</span>
        </motion.h2>

        <motion.p
          className="contact__sub"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s discuss your cloud infrastructure, Kubernetes workloads,
          CI/CD pipelines, and how to scale delivery predictably.
        </motion.p>

        <motion.div
          className="contact__actions"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MagneticButton
            href={`mailto:${email}`}
            className="btn btn--primary btn--lg"
            cursorLabel="send"
          >
            Email me
            <ArrowRight className="btn__ico" />
          </MagneticButton>

          <a
            href={`tel:${phone}`}
            className="btn btn--ghost btn--lg"
            data-cursor="phone"
          >
            <Phone className="btn__ico" style={{ width: 17, height: 17 }} />
            +91 77086 88160
          </a>

          <a
            href={siteConfig.socialLinks.linkedin}
            className="btn btn--ghost btn--lg"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
          >
            <Linkedin className="btn__ico" style={{ width: 17, height: 17 }} />
            LinkedIn
          </a>

          <a
            href={siteConfig.socialLinks.github}
            className="btn btn--ghost btn--lg"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
          >
            <Github className="btn__ico" style={{ width: 17, height: 17 }} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            className={`copyline has-spotlight ${isCopied ? "is-copied" : ""}`}
            id="copyEmail"
            data-cursor="copy"
            type="button"
            aria-live="polite"
            onClick={handleCopy}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--px",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--py",
                `${e.clientY - rect.top}px`
              );
            }}
          >
            <span className="p">$</span>
            <span className="addr">echo {email} | clip</span>
            <span className="ok">✓ copied to clipboard</span>
            <span className="spotlight" aria-hidden="true" />
          </button>
        </motion.div>

        <motion.div
          className="contact__meta"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "2.2rem" }}
        >
          <span>base: {location}</span>
          <a
            href={siteConfig.socialLinks.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="map"
          >
            {siteConfig.coordinates} ↗
          </a>
          <span>tz: IST · UTC+05:30</span>
        </motion.div>
      </div>
    </section>
  );
}
