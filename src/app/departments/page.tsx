import UnitsHeroSection from "./UnitsHeroSection";
import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function DepartmentsPage() {
  return (
    <div className="bg-white">
      <UnitsHeroSection />
      <UnitsTabsSection />
      <CTASection heading="Partner with Us to Create a Bright Future in Science and Technology in Imo State" buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
