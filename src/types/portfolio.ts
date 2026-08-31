export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface TechnicalSkills {
  cloud_platforms: string[];
  containerization_and_orchestration: string[];
  cicd_and_automation: string[];
  infrastructure_as_code: string[];
  security_and_access_management: string[];
  ingress_and_traffic_management: string[];
  dns_and_networking: string[];
  monitoring_and_observability: string[];
  operating_systems_and_dev_tools: string[];
  quality_and_security_testing: string[];
  programming_and_scripting: string[];
}

export interface ExperienceItem {
  job_title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  field_of_study: string;
  institution: string;
  location: string;
  graduation_date: string;
}

export interface PortfolioData {
  name: string;
  contact: ContactInfo;
  professional_summary: string;
  technical_skills: TechnicalSkills;
  experience: ExperienceItem[];
  education: EducationItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GitGraphCommit {
  hash: string;
  branch: string;
  label: string;
  type: "main" | "branch" | "head";
  x: number;
  y: number;
}

export interface SiteConfig {
  initials: string;
  roleTitle: string;
  region: string;
  coordinates: string;
  experienceYears: string;
  uptimeTarget: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    mapsUrl: string;
  };
  navLinks: NavLink[];
  impactStats: {
    value: string;
    unit: string;
    label: string;
  }[];
  operatingPrinciples: {
    number: string;
    title: string;
    description: string;
  }[];
  stackCards: {
    keyBadge: string;
    title: string;
    summary: string;
    dataKeys: string[];
  }[];
}
