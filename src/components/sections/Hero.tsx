"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutList } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import MagneticButton from "@/components/common/MagneticButton";
import GitGraph from "./GitGraph";

interface HeroProps {
  name: string;
  professionalSummary: string;
}

export default function Hero({ name }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  // Ambient interactive grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.65;
      const cy = height * 0.45;
      const radius = Math.min(width, height) * 0.38;

      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
      grad.addColorStop(0, "rgba(62, 207, 142, 0.08)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      <div className="container">
        <div className="hero__grid">
          <div className="hero__intro">
            <motion.span
              className="eyebrow hero__eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {siteConfig.roleTitle}{" "}
              <span className="reg">&nbsp;· {siteConfig.region}</span>
            </motion.span>

            <motion.h1
              className="hero__title"
              aria-label={name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="line line--fill">SANTHOSH</span>
              <span className="line line--grad">
                KUMAR R
                <span className="blink" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p
              className="lead hero__lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I turn complex cloud infrastructure and manual delivery into{" "}
              <span className="em">
                automated, resilient Kubernetes &amp; CI/CD platforms
              </span>{" "}
              teams ship on with confidence.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <MagneticButton
                href="#contact"
                className="btn btn--primary btn--lg"
                cursorLabel="connect"
              >
                Let&apos;s connect
                <ArrowRight className="btn__ico" />
              </MagneticButton>

              <a
                href="#work"
                className="btn btn--ghost btn--lg"
                data-cursor="open"
              >
                <LayoutList className="btn__ico" />
                View the work
              </a>
            </motion.div>

            <motion.div
              className="status-strip"
              aria-label="Status"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="stat">
                <span className="stat__k">status</span>
                <span className="stat__v live">
                  <span className="dot" />
                  operational
                </span>
              </div>
              <div className="stat">
                <span className="stat__k">region</span>
                <span className="stat__v">ap-south-1 · Chennai</span>
              </div>
              <div className="stat">
                <span className="stat__k">uptime</span>
                <span className="stat__v">2020 · {siteConfig.experienceYears}</span>
              </div>
              <div className="stat">
                <span className="stat__k">local</span>
                <span className="stat__v tnum">{clockTime}</span>
              </div>
            </motion.div>
          </div>

          <GitGraph />
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll down"
        data-cursor="scroll"
      >
        <span className="txt">scroll</span>
        <span className="rail" />
      </a>
    </section>
  );
}
