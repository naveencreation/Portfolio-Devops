"use client";

import { useRef, MouseEvent } from "react";
import Image from "next/image";
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
          position: "relative",
          aspectRatio: "1 / 1.08",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at 50% 30%, var(--accent-a10), var(--bg-2) 75%, var(--bg-1) 100%)",
        }}
      >
        {/* Engineering mesh pattern backdrop */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--line-soft) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Ambient aura glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "22%",
            left: "50%",
            width: "180px",
            height: "180px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--accent-a20) 0%, transparent 70%)",
            filter: "blur(24px)",
            pointerEvents: "none",
          }}
        />

        {/* Candidate Profile Photo with Seamless Blend */}
        <Image
          src="/profile.png"
          alt="Santhosh Kumar R — DevOps & Cloud Engineer"
          width={400}
          height={432}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 12%",
            display: "block",
            position: "relative",
            zIndex: 1,
            filter: "contrast(1.02) saturate(1.03)",
          }}
        />

        {/* Interactive Holographic Scanline */}
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
