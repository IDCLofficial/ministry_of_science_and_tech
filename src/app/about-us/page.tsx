import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { teamMembers } from "./teamMembers";
import TeamGridSection from "./TeamGridSection";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Science, Innovation, and Engineering" />
            <AboutSection 
                aboutText="The Imo State Ministry of Science, Innovation, and Engineering was established to drive technological advancement and economic development through research, innovation, and capacity building. Over the years, it has launched initiatives like the Technology Incubation Centre. In 2022, Imo won the National Science and Technology Expo, highlighting the ministry’s impact. It continues to foster innovation, digital transformation, and collaboration with global partners for sustainable state development."
                imgSrc="/images/ICT.jpg" 
                altText="Ict image" 
            />
            <MVSSection />   
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Partner with Us to Create a Bright Future in Science and Technology in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}