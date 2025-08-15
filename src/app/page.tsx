import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import FeaturedPartners from "./components/FeaturedPartners";
import { getProject } from "./projects/projects";
import { Project } from "../../lib/types";

export default async function Home() {
  const projects = await getProject()
  const projectList = projects
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Science, Innovation, and Engineering" 
        caption="Creating a Progressive Tech-Driven Imo Through Science and Innovation" 
        subtitle="Welcome to the Imo State Ministry of Science, Innovation, and Engineering. We are committed to driving innovation, research, and digital transformation for sustainable development. Together, let us harness the power of science and technology to improve lives, boost the economy, and build a brighter future for our state."
      />
      <AboutSection 
        title="About Us"
        subtitle="The Imo State Ministry of Science, Innovation, and Engineering was established to drive technological advancement and economic development through research, innovation, and capacity building. Over the years, it has launched initiatives like the Technology Incubation Centre. In 2022, Imo won the National Science and Technology Expo, highlighting the ministry’s impact. It continues to foster innovation, digital transformation, and collaboration with global partners for sustainable state development."
        image1="/images/homeImage.jpg"
        image2="/images/homeImage2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.jpg" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives initiatives = {projectList as unknown as Project[]}/>
        <FeaturedPartners />
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Join us in pioneering a tech-driven future for Imo State. "
        subtext="Together, we can foster innovation, empower youth with digital skills, promote research and development, and build smart, sustainable solutions that transform communities and fuel economic growth."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
