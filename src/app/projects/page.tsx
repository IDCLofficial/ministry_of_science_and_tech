import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection />
      <CTASection 
        heading="Join us in pioneering a tech-driven future for Imo State."
        subtext="Together, we can foster innovation, empower youth with digital skills, promote research and development, and build smart, sustainable solutions that transform communities and fuel economic growth."
        buttonLabel="Contact Us"
        buttonHref="/contact-us" 
      />
      <Footer />
    </div>
  );
}