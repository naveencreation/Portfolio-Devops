import type { Metadata } from "next";
import "@/styles/globals.css";
import LenisProvider from "@/components/common/LenisProvider";
import AmbientBackdrop from "@/components/common/AmbientBackdrop";
import CustomCursor from "@/components/common/CustomCursor";
import Preloader from "@/components/common/Preloader";
import portfolioData from "@/../data.json";

export const metadata: Metadata = {
  title: `${portfolioData.name} | DevOps Engineer · Cloud & Kubernetes Specialist`,
  description: portfolioData.professional_summary,
  keywords: [
    portfolioData.name,
    "DevOps Engineer",
    "Cloud Engineer",
    "Kubernetes",
    "Docker",
    "Terraform",
    "GitLab CI",
    "Jenkins",
    "Argo CD",
    "AWS",
    "Azure",
    "GCP",
    "Prometheus",
    "Grafana",
    "OpenTelemetry"
  ],
  authors: [{ name: portfolioData.name }],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${portfolioData.name} | DevOps Engineer`,
    description: "DevOps Engineer specializing in AWS, Kubernetes, Terraform, CI/CD pipelines, containerization, and observability.",
    url: "https://srskumar989.github.io",
    siteName: portfolioData.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | DevOps Engineer`,
    description: "DevOps Engineer specializing in AWS, Kubernetes, Terraform, CI/CD pipelines, containerization, and observability.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://srskumar989.github.io/#website",
        url: "https://srskumar989.github.io/",
        name: portfolioData.name,
        publisher: { "@id": "https://srskumar989.github.io/#person" },
        inLanguage: "en"
      },
      {
        "@type": "ProfilePage",
        "@id": "https://srskumar989.github.io/#profilepage",
        url: "https://srskumar989.github.io/",
        name: `${portfolioData.name} | DevOps Engineer · Cloud & Kubernetes Specialist`,
        isPartOf: { "@id": "https://srskumar989.github.io/#website" },
        mainEntity: { "@id": "https://srskumar989.github.io/#person" },
        inLanguage: "en"
      },
      {
        "@type": "Person",
        "@id": "https://srskumar989.github.io/#person",
        name: portfolioData.name,
        jobTitle: "DevOps Engineer",
        url: "https://srskumar989.github.io",
        email: `mailto:${portfolioData.contact.email}`,
        telephone: portfolioData.contact.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karaikal",
          addressRegion: "Puducherry / Tamil Nadu",
          postalCode: "609607",
          addressCountry: "IN"
        },
        alumniOf: portfolioData.education[0]?.institution || "Perunthalaivar Kamarajar Institute of Engineering",
        worksFor: {
          "@type": "Organization",
          name: portfolioData.experience[0]?.company || "Thapovan Info Systems Pvt. Ltd."
        },
        knowsAbout: [
          "Cloud Infrastructure Automation",
          "Kubernetes Administration",
          "Docker",
          "Helm",
          "Terraform (IaC)",
          "CI/CD Pipelines",
          "GitLab CI",
          "Jenkins",
          "Argo CD",
          "GitHub Actions",
          "GitOps",
          "AWS",
          "Azure",
          "GCP",
          "Prometheus",
          "Grafana",
          "OpenTelemetry",
          "Tempo"
        ]
      }
    ]
  };

  return (
    <html lang="en" data-theme="light" className="lenis">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var t = null;
                try { t = localStorage.getItem('theme'); } catch (e) {}
                if (t !== 'light' && t !== 'dark') t = 'light';
                document.documentElement.setAttribute('data-theme', t);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <LenisProvider>
          <AmbientBackdrop />
          <CustomCursor />
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
