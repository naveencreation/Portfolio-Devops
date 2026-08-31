import { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  initials: "SK",
  roleTitle: "DevOps & Cloud Engineer",
  region: "ap-south-1 · Chennai / Karaikal",
  coordinates: "10.9254° N · 79.8380° E",
  experienceYears: "3.8y+ · since 2020",
  uptimeTarget: "99.9%",
  socialLinks: {
    github: "https://github.com/srskumar989",
    linkedin: "https://www.linkedin.com/in/santhosh-kumar-r",
    email: "mailto:srskumar989@gmail.com",
    phone: "tel:+917708688160",
    mapsUrl: "https://www.google.com/maps?q=Karaikal,India"
  },
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Proof", href: "#credentials" },
    { label: "Contact", href: "#contact" }
  ],
  impactStats: [
    { value: "3.8", unit: "+", label: "Years in cloud & DevOps delivery" },
    { value: "100", unit: "+", label: "Pipelines & deployments automated" },
    { value: "99.9", unit: "%", label: "Cluster & service uptime target" },
    { value: "3", unit: "+", label: "Cloud platforms (AWS, Azure, GCP)" }
  ],
  operatingPrinciples: [
    {
      number: "01",
      title: "Automate toil",
      description: "Convert repetitive manual provisioning and configurations into tested Terraform, Helm, and Bash pipelines."
    },
    {
      number: "02",
      title: "GitOps & IaC first",
      description: "Keep infrastructure declarations and cluster states versioned, reproducible, and verifiable in Git."
    },
    {
      number: "03",
      title: "Observable & secure",
      description: "Embed Prometheus, Grafana, OpenTelemetry, secrets vaulting, and security gates directly into the workflow."
    }
  ],
  stackCards: [
    {
      keyBadge: "ship",
      title: "CI/CD & GitOps Automation",
      summary: "GitLab CI, Jenkins, Argo CD, GitHub Actions, Python, Bash",
      dataKeys: ["cicd", "scripting"]
    },
    {
      keyBadge: "orchestrate",
      title: "Kubernetes & Cloud Infrastructure",
      summary: "Docker, Kubernetes, Helm, Terraform, AWS, Azure, GCP",
      dataKeys: ["cloud", "containers", "iac"]
    },
    {
      keyBadge: "guard",
      title: "Observability, Traffic & Security",
      summary: "Prometheus, Grafana, OpenTelemetry, Traefik, NGINX, SonarQube, Trivy",
      dataKeys: ["observability", "security", "traffic"]
    }
  ]
};
