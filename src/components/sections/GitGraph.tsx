"use client";

import { motion } from "framer-motion";

export default function GitGraph() {
  return (
    <div className="hero__graph" aria-hidden="true">
      <svg className="git" viewBox="0 0 420 560" fill="none">
        {/* Main Trunk Line */}
        <motion.path
          className="g-line g-main"
          d="M150 20 V 540"
          stroke="var(--line-strong)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        />

        {/* Feature Branch Line */}
        <motion.path
          className="g-line g-branch"
          d="M150 120 C 150 168, 300 156, 300 204 V 356 C 300 404, 150 392, 150 440"
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
        />

        {/* Flow Pulse */}
        <path
          className="g-flow"
          d="M150 120 C 150 168, 300 156, 300 204 V 356 C 300 404, 150 392, 150 440"
        />

        {/* Commit 1: Main */}
        <g className="g-commit" data-cursor="c0ffee1">
          <circle className="g-hit" cx="150" cy="60" r="24" fill="transparent" pointerEvents="all" />
          <motion.circle
            className="g-c g-c--main"
            cx="150"
            cy="60"
            r="7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          />
          <motion.text
            className="g-t g-t--dim"
            x="130"
            y="64"
            textAnchor="end"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            main
          </motion.text>
        </g>

        {/* Commit 2: Checkout feat/k8s */}
        <g className="g-commit" data-cursor="fea7c1a">
          <circle className="g-hit" cx="150" cy="120" r="24" fill="transparent" pointerEvents="all" />
          <motion.circle
            className="g-c g-c--acc"
            cx="150"
            cy="120"
            r="7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 }}
          />
          <motion.text
            className="g-t"
            x="130"
            y="124"
            textAnchor="end"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            checkout -b feat/k8s
          </motion.text>
        </g>

        {/* Commit 3: Terraform & Helm */}
        <g className="g-commit" data-cursor="add5afe">
          <circle className="g-hit" cx="300" cy="240" r="24" fill="transparent" pointerEvents="all" />
          <motion.circle
            className="g-c g-c--acc"
            cx="300"
            cy="240"
            r="7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.9 }}
          />
          <motion.text
            className="g-t"
            x="320"
            y="244"
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            + terraform &amp; helm
          </motion.text>
        </g>

        {/* Commit 4: Observability */}
        <g className="g-commit" data-cursor="5ecc0de">
          <circle className="g-hit" cx="300" cy="320" r="24" fill="transparent" pointerEvents="all" />
          <motion.circle
            className="g-c g-c--acc"
            cx="300"
            cy="320"
            r="7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.2 }}
          />
          <motion.text
            className="g-t g-t--acc"
            x="320"
            y="324"
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            observability ✓ lgtm
          </motion.text>
        </g>

        {/* Commit 5: Merge into main */}
        <g className="g-commit" data-cursor="decade00">
          <circle className="g-hit" cx="150" cy="440" r="24" fill="transparent" pointerEvents="all" />
          <motion.circle
            className="g-c g-c--acc"
            cx="150"
            cy="440"
            r="7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.5 }}
          />
          <motion.text
            className="g-t"
            x="130"
            y="444"
            textAnchor="end"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            merge → main
          </motion.text>
        </g>

        {/* HEAD Release Tag */}
        <g className="g-commit g-head" data-cursor="HEAD → v4.0">
          <circle className="g-hit" cx="150" cy="505" r="28" fill="transparent" pointerEvents="all" />
          <motion.circle
            className="g-c g-c--acc"
            cx="150"
            cy="505"
            r="8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.8 }}
          />
          <circle className="g-ring" cx="150" cy="505" r="9" />
          <motion.g
            className="g-tag"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, type: "spring" }}
          >
            <g className="g-tag__in">
              <rect x="174" y="491" width="142" height="28" rx="14" fill="var(--accent)" />
              <text
                x="245"
                y="509"
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="11.5px"
                fontWeight="600"
                fill="var(--accent-ink)"
              >
                v4.0 · deployed
              </text>
            </g>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
