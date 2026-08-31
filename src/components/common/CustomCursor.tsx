"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [label, setLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOut, setIsOut] = useState(false);

  useEffect(() => {
    document.body.classList.add("has-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsOut(false);
    };

    const onMouseLeave = () => {
      setIsOut(true);
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${mouseX + 16}px, ${mouseY + 16}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    const setupCursorTriggers = () => {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        const handleEnter = () => {
          setIsHovered(true);
          const cursorText = el.getAttribute("data-cursor");
          if (cursorText) setLabel(cursorText);
        };
        const handleLeave = () => {
          setIsHovered(false);
          setLabel(null);
        };

        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    setupCursorTriggers();

    // Re-bind triggers on DOM changes
    const observer = new MutationObserver(setupCursorTriggers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor is-visible ${isOut ? "is-out" : ""} ${
        isHovered ? "is-hover" : ""
      } ${label ? "has-label" : ""}`}
      aria-hidden="true"
    >
      <div ref={ringRef} className="cursor__ring" />
      <div ref={dotRef} className="cursor__dot" />
      <div ref={labelRef} className="cursor__label">
        {label}
      </div>
    </div>
  );
}
