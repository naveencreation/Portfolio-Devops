"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { siteConfig } from "@/config/site.config";

interface IdentityCardProps {
  uid: string;
  role: string;
}

export default function IdentityCard({ uid, role }: IdentityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 160 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight coordinates
    cardRef.current.style.setProperty("--px", `${x}px`);
    cardRef.current.style.setProperty("--py", `${y}px`);

    // 3D tilt
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rx = ((y - midY) / midY) * -8;
    const ry = ((x - midX) / midX) * 8;
    rotateX.set(rx);
    rotateY.set(ry);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.aside
      ref={cardRef}
      className="idcard has-spotlight"
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="idcard__head">
        <span>identity.card</span>
        <span className="on">verified</span>
      </div>

      <div
        className="idcard__photo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center, var(--surface-hover), var(--bg-2))",
        }}
      >
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "78%", height: "78%" }}
        >
          <defs>
            <radialGradient id="meshGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent-a20)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="140" cy="140" r="120" fill="url(#meshGlow)" />
          <circle
            cx="140"
            cy="140"
            r="105"
            stroke="var(--line-strong)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle
            cx="140"
            cy="140"
            r="85"
            stroke="var(--accent-a40)"
            strokeWidth="2"
          />
          {/* Hexagonal K8s node */}
          <polygon
            points="140,75 195,107 195,173 140,205 85,173 85,107"
            fill="var(--bg-3)"
            stroke="var(--accent)"
            strokeWidth="2.5"
          />
          <text
            x="140"
            y="152"
            fontFamily="var(--font-mono)"
            fontSize="34"
            fontWeight="700"
            fill="var(--ink)"
            textAnchor="middle"
            letterSpacing="1"
          >
            {siteConfig.initials}
          </text>
          <text
            x="140"
            y="174"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="500"
            fill="var(--accent)"
            textAnchor="middle"
            letterSpacing="2"
          >
            DEVOPS
          </text>
          <circle cx="140" cy="55" r="6" fill="var(--accent-bright)" />
          <circle cx="215" cy="140" r="5" fill="var(--accent)" />
          <circle cx="140" cy="225" r="6" fill="var(--accent-bright)" />
          <circle cx="65" cy="140" r="5" fill="var(--accent)" />
        </svg>
        <span className="idcard__scan" />
      </div>

      <div className="idcard__meta">
        <div className="idcard__row">
          <span className="k">uid</span>
          <span className="v">{uid}</span>
        </div>
        <div className="idcard__row">
          <span className="k">role</span>
          <span className="v">{role}</span>
        </div>
        <div className="idcard__row">
          <span className="k">base</span>
          <span className="v">{siteConfig.coordinates}</span>
        </div>
        <div className="idcard__row">
          <span className="k">tz</span>
          <span className="v">IST · UTC+05:30</span>
        </div>
        <div className="idcard__row">
          <span className="k">exp</span>
          <span className="v">{siteConfig.experienceYears}</span>
        </div>
        <div className="idcard__row">
          <span className="k">status</span>
          <span className="v acc">● open to opportunities</span>
        </div>
      </div>

      <span className="spotlight" aria-hidden="true" />
    </motion.aside>
  );
}
