import React from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const mediaItems: [] = [];

export default function MediaPage() {
  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Explore Our Gallery"
        subtitle="Discover how the Ministry of Youth Development and Talent Hunt empowers young people and nurtures talent for a brighter future."
        backgroundImage="/images/heroImage.png"
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={mediaItems} />
      </section>
      <CTASection 
        heading="Join us in pioneering a tech-driven future for Imo State." 
        subtext="Together, we can foster innovation, empower youth with digital skills, promote research and development, and build smart, sustainable solutions that transform communities and fuel economic growth." 
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
