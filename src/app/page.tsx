import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import WorkTimeline from "@/components/sections/WorkTimeline";
import StackSpec from "@/components/sections/StackSpec";
import Credentials from "@/components/sections/Credentials";
import Contact from "@/components/sections/Contact";
import portfolioData from "@/../data.json";

export default function Home() {
  return (
    <>
      <Header portfolioName={portfolioData.name} />
      <main id="main">
        <Hero
          name={portfolioData.name}
          professionalSummary={portfolioData.professional_summary}
        />
        <Marquee skills={portfolioData.technical_skills} />
        <About email={portfolioData.contact.email} />
        <WorkTimeline experience={portfolioData.experience} />
        <StackSpec />
        <Credentials education={portfolioData.education} />
        <Contact
          email={portfolioData.contact.email}
          phone={portfolioData.contact.phone}
          location={portfolioData.contact.location}
        />
      </main>
      <Footer portfolioName={portfolioData.name} />
    </>
  );
}
