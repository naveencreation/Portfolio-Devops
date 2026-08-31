"use client";

import { TechnicalSkills } from "@/types/portfolio";

interface MarqueeProps {
  skills: TechnicalSkills;
}

export default function Marquee({ skills }: MarqueeProps) {
  const marqueeItems = [
    ...skills.cloud_platforms,
    ...skills.containerization_and_orchestration,
    "Terraform (IaC)",
    ...skills.cicd_and_automation.slice(0, 4),
    ...skills.monitoring_and_observability.slice(0, 4),
    ...skills.ingress_and_traffic_management.slice(0, 2),
    ...skills.quality_and_security_testing.slice(0, 2),
    ...skills.programming_and_scripting,
    ...skills.security_and_access_management.slice(0, 3),
    ...skills.dns_and_networking.slice(0, 3)
  ];

  return (
    <div className="marquee" aria-label="DevOps &amp; Cloud ecosystem">
      <div className="marquee__track">
        {marqueeItems.map((item, idx) => (
          <span key={`mq1-${idx}`} className="marquee__item">
            <span className="d" />
            {item}
          </span>
        ))}
        {marqueeItems.map((item, idx) => (
          <span key={`mq2-${idx}`} className="marquee__item" aria-hidden="true">
            <span className="d" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
