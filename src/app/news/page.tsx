import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { getNewsList } from "./newsList";

export default async function NewsPage() {
  const newsList = await getNewsList();
  return (
    <div className="bg-white">
      <NewsHeroSection newsList={newsList}/>
      <div className="w-full max-w-[100%] mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-20">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid newsList={newsList}/>
        </div>
      </div>
      <CTASection heading="Partner With Us Today!" subtext="Together, we can foster innovation, empower youth with digital skills, promote research and development, and build smart, sustainable solutions that transform communities and fuel economic growth." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
