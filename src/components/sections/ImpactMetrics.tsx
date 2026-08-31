"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";

export default function ImpactMetrics() {
  return (
    <div className="impact-strip">
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="idx">02a</span> — git diff --stat
      </motion.span>

      <motion.h3
        className="impact-title"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        The career, diffed.
      </motion.h3>

      <motion.p
        className="impact-sub"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        3.8+ years of engineering commits squashed into metrics.
      </motion.p>

      <div className="impact-grid">
        {siteConfig.impactStats.map((stat, idx) => (
          <motion.article
            key={stat.label}
            className="impact-stat"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
          >
            <strong className="impact-stat__n">
              {stat.value}
              <span>{stat.unit}</span>
            </strong>
            <span className="impact-stat__l">{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
