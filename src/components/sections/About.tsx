"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import IdentityCard from "./IdentityCard";

interface AboutProps {
  email: string;
}

export default function About({ email }: AboutProps) {
  const uid = email.split("@")[0] || "srskumar989";

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <IdentityCard uid={uid} role="devops engineer" />

          <div className="about__body">
            <div className="section-head">
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="idx">01</span> — whoami
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Reliability is a feature.
                <br />
                I build it in.
              </motion.h2>
            </div>

            <motion.p
              className="lead-big"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              4+ years building automated delivery pipelines and robust cloud
              infrastructure:{" "}
              <span className="dim">
                scalable clusters that run, deploys nobody fears.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I architect and manage{" "}
              <span className="hl">secure, automated cloud platforms</span> using
              AWS, Azure, Kubernetes, Terraform, Docker, and GitLab CI/Jenkins,
              specializing in Infrastructure as Code, container orchestration, and
              full-stack observability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The throughline:{" "}
              <span className="hl">
                automate toil, enforce GitOps discipline, and secure the path to
                production.
              </span>{" "}
              Focused on improving deployment efficiency, scalability, and
              zero-downtime reliability.
            </motion.p>

            <div className="ops-principles">
              {siteConfig.operatingPrinciples.map((op, idx) => (
                <motion.article
                  key={op.number}
                  className="principle has-spotlight"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
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
                  <span className="principle__n">{op.number}</span>
                  <h3>{op.title}</h3>
                  <p>{op.description}</p>
                  <span className="spotlight" aria-hidden="true" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
