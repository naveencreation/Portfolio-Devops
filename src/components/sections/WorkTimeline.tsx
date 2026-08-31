"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/types/portfolio";
import ImpactMetrics from "./ImpactMetrics";

interface WorkTimelineProps {
  experience: ExperienceItem[];
}

export default function WorkTimeline({ experience }: WorkTimelineProps) {
  const experienceChips: Record<string, string[]> = {
    "Thapovan Info Systems Pvt. Ltd.": [
      "Kubernetes",
      "Terraform",
      "AWS & Azure",
      "GitLab CI",
      "Jenkins",
      "Docker Multi-Stage",
      "Helm",
      "Prometheus & Grafana",
      "Traefik & NGINX",
      "SonarQube",
      "Azure Key Vault"
    ],
    "Transtrack Aerospace Pvt. Ltd.": [
      "Linux Administration",
      "AWS (EC2, S3, IAM)",
      "Bash Automation",
      "Jenkins",
      "GitLab CI",
      "AWS CloudWatch",
      "DNS & Routing"
    ],
    "LycaTech Services Private Limited": [
      "Linux Systems",
      "Network Routing",
      "TCP/IP & DNS",
      "Shell Scripting",
      "Incident Response",
      "Firewalls"
    ]
  };

  const getReleaseTag = (startDate: string, isHead: boolean) => {
    const parts = startDate.split(" ");
    const month = parts[0] === "Oct" ? "10" : parts[0] === "Jan" ? "01" : "03";
    const year = parts[1] || "2023";
    return isHead ? `release/${year}.${month} — HEAD` : `release/${year}.${month}`;
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="idx">02</span> — git log --career
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Deployment history.
          </motion.h2>
        </div>

        <div className="timeline">
          {experience.map((job, idx) => {
            const isHead = idx === 0;
            const releaseTag = getReleaseTag(job.start_date, isHead);
            const chips = experienceChips[job.company] || [
              "DevOps",
              "CI/CD",
              "Cloud"
            ];

            return (
              <motion.article
                key={job.company}
                className={`release ${!isHead ? "release--past" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.15 }}
              >
                <div className="release__aside">
                  <span className="release__tag">{releaseTag}</span>
                  <h3 className="release__co">{job.company}</h3>
                  <p className="release__period">
                    {job.start_date} → {job.end_date} · {job.location}
                  </p>
                </div>

                <div className="release__main">
                  <h4 className="release__role">
                    {job.job_title}
                    {isHead && <span className="now">now</span>}
                  </h4>

                  <p className="release__sum">
                    {job.responsibilities.slice(0, 2).join(" ")}
                  </p>

                  <div className="release__chips">
                    {chips.map((chip) => (
                      <span key={chip} className="kchip">
                        <span className="d" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <ImpactMetrics />
      </div>
    </section>
  );
}
