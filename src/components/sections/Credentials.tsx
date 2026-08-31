"use client";

import { motion } from "framer-motion";
import { Check, GraduationCap } from "lucide-react";
import { EducationItem } from "@/types/portfolio";

interface CredentialsProps {
  education: EducationItem[];
}

export default function Credentials({ education }: CredentialsProps) {
  const proficiencies = [
    {
      issuer: "AWS & Azure",
      name: "Cloud Infrastructure & Automation (Terraform IaC)",
      dates: "Production verified"
    },
    {
      issuer: "Kubernetes",
      name: "Container Orchestration, Helm Deployments & GitOps",
      dates: "Production verified"
    },
    {
      issuer: "CI/CD & QA",
      name: "GitLab CI, Jenkins, Argo CD, SonarQube & Trivy Security",
      dates: "Production verified"
    },
    {
      issuer: "Observability",
      name: "Prometheus, Grafana, OpenTelemetry, Tempo & CloudWatch",
      dates: "Production verified"
    }
  ];

  const recognitions = [
    {
      year: "2024",
      title: "Cluster Reliability & Automation",
      tag: "Kubernetes & Terraform",
      desc: "Delivered automated Helm and Terraform setups reducing deployment drift and boosting team release velocity."
    },
    {
      year: "2023",
      title: "Zero-Downtime Migration",
      tag: "Cloud & Microservices",
      desc: "Architected multi-stage Docker containerization and CI/CD pipelines achieving 99.9% uptime target."
    },
    {
      year: "2021",
      title: "Systems & Network Defense",
      tag: "Linux & Observability",
      desc: "Hardened Linux environments, optimized routing, and implemented end-to-end incident monitoring."
    }
  ];

  const primaryEdu = education[0] || {
    degree: "Bachelor of Technology",
    field_of_study: "Electronics and Communication Engineering",
    institution: "Perunthalaivar Kamarajar Institute of Engineering",
    graduation_date: "May 2019"
  };

  return (
    <section className="section" id="credentials">
      <div className="container">
        <div className="section-head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="idx">04</span> — ls -la credentials/
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Core proficiencies &amp; education.
          </motion.h2>
        </div>

        {/* 1. Proficiencies */}
        <div className="credgroup">
          <div className="credgroup__label">domain proficiencies</div>
          <div>
            {proficiencies.map((item, idx) => (
              <motion.div
                key={item.name}
                className="crow has-spotlight"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
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
                <span className="crow__issuer">{item.issuer}</span>
                <span className="crow__name">{item.name}</span>
                <span className="crow__dates">{item.dates}</span>
                <span className="crow__go">
                  Verified <Check style={{ width: 14, height: 14, marginLeft: 4 }} />
                </span>
                <span className="spotlight" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Key Honors / Recognition */}
        <div className="credgroup">
          <div className="credgroup__label">engineering milestones</div>
          <div className="awards3">
            {recognitions.map((aw, idx) => (
              <motion.article
                key={aw.title}
                className="aw has-spotlight"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
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
                <div className="aw__year">{aw.year}</div>
                <h3 className="aw__t">{aw.title}</h3>
                <span className="aw__tag">{aw.tag}</span>
                <p className="aw__d">{aw.desc}</p>
                <span className="spotlight" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* 3. Education */}
        <div className="credgroup" style={{ marginBottom: 0 }}>
          <div className="credgroup__label">education</div>
          <motion.div
            className="edu has-spotlight"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            <span className="edu__ico">
              <GraduationCap style={{ width: 24, height: 24 }} />
            </span>
            <div>
              <div className="edu__deg">{primaryEdu.degree}</div>
              <div className="edu__field">{primaryEdu.field_of_study}</div>
              <div className="edu__school">{primaryEdu.institution}</div>
            </div>
            <span className="edu__years">2015 → 2019</span>
            <span className="spotlight" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
