import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import NewsContent from "./NewsContent";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { getNewsList } from "./newsList";

export default async function NewsPage() {
  const newsList = await getNewsList();
  return (
    <div className="bg-white">
      <NewsHeroSection newsList={newsList}/>
      <NewsContent newsList={newsList} />
      <CTASection heading="Partner With Us Today!" subtext="Together, we can foster innovation, empower youth with digital skills, promote research and development, and build smart, sustainable solutions that transform communities and fuel economic growth." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
