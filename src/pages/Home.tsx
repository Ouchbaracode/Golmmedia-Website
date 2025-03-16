
import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import CTASection from "@/components/CTASection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Golmmedia | Premium Social Media Marketing for Healthcare Professionals</title>
        <meta name="description" content="Specialized social media marketing agency for optical stores and dental clinics. Boost patient acquisition with tailored strategies." />
      </Helmet>

      <HeroSection />
      <ServicesOverview />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
};

export default Home;
