"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";

export default function StackSpec() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const keyToLineNumber: Record<string, number> = {
    cloud: 2,
    containers: 3,
    cicd: 4,
    iac: 5,
    observability: 6,
    traffic: 7,
    security: 8,
    networking: 9,
    scripting: 10,
    os_tools: 11
  };

  const isLineHot = (lineIndex: number) => {
    if (activeKeys.length === 0) return false;
    return activeKeys.some((k) => keyToLineNumber[k] === lineIndex);
  };

  const yamlLines = [
    { no: 1, text: <><span className="k">stack</span><span className="p">:</span></> },
    { no: 2, text: <><span className="k">&nbsp;&nbsp;cloud</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[aws, azure, gcp]</span></> },
    { no: 3, text: <><span className="k">&nbsp;&nbsp;containers</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;[docker, kubernetes, helm]</span></> },
    { no: 4, text: <><span className="k">&nbsp;&nbsp;cicd</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[gitlab-ci, jenkins, argo-cd, github-actions, gitops]</span></> },
    { no: 5, text: <><span className="k">&nbsp;&nbsp;iac</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[terraform, cloudformation]</span></> },
    { no: 6, text: <><span className="k">&nbsp;&nbsp;observability</span><span className="p">:</span><span className="v"> [prometheus, grafana, lgtm-stack, opentelemetry, tempo, cloudwatch]</span></> },
    { no: 7, text: <><span className="k">&nbsp;&nbsp;traffic</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[traefik, nginx, reverse-proxy, load-balancer, ssl-tls]</span></> },
    { no: 8, text: <><span className="k">&nbsp;&nbsp;security</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[aws-iam, secrets-manager, azure-key-vault, trivy, sonarqube, prowler]</span></> },
    { no: 9, text: <><span className="k">&nbsp;&nbsp;networking</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;[route-53, cloudflare, godaddy, dns, tcp-ip, firewalls]</span></> },
    { no: 10, text: <><span className="k">&nbsp;&nbsp;scripting</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[python, bash, shell, yaml]</span></> },
    { no: 11, text: <><span className="k">&nbsp;&nbsp;os_tools</span><span className="p">:</span><span className="v">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[linux, ubuntu, amazon-linux, jira, gitlab, github]</span></> },
    { no: 12, text: <></> },
    { no: 13, text: <><span className="k">mode</span><span className="p">:</span> <span className="v">automate_the_cloud</span> <span className="c"># containerize • automate • observe</span><span className="cursor-line" /></> }
  ];

  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="idx">03</span> — cat stack.yaml
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The toolchain, declared.
          </motion.h2>
        </div>

        <div className="stack-stage">
          <div className="stack-stage__copy">
            <span className="stack-stage__label">production toolkit</span>
            <p>
              Built over 4+ years of engineering cloud automation, Kubernetes
              clusters, CI/CD pipelines, and observability.
            </p>
          </div>

          <div className="stack-stage__surface">
            <figure className={`spec spec--peek has-spotlight ${activeKeys.length > 0 ? "is-linking" : ""}`}>
              <figcaption>
                <span className="d" />
                <span className="path">infra/</span>stack.yaml
                <span className="path">· tracked · drift checked</span>
                <span className="spec__hint">hover a card ↓</span>
              </figcaption>
              <span className="spec__scan" aria-hidden="true" />
              <div className="spec__mask">
                <pre>
                  {yamlLines.map((line) => {
                    const isHot = isLineHot(line.no);
                    return (
                      <span key={line.no} className={`ln ${isHot ? "is-hot" : ""}`}>
                        <span className="no">{line.no}</span>
                        <span>{line.text}</span>
                      </span>
                    );
                  })}
                </pre>
              </div>
              <span className="spotlight" aria-hidden="true" />
            </figure>

            <div className="stack-cards">
              {siteConfig.stackCards.map((card, idx) => (
                <motion.article
                  key={card.keyBadge}
                  className="stack-card has-spotlight"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  onMouseEnter={() => setActiveKeys(card.dataKeys)}
                  onMouseLeave={() => setActiveKeys([])}
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
                  <span className="stack-card__k">{card.keyBadge}</span>
                  <strong>{card.title}</strong>
                  <p>{card.summary}</p>
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
