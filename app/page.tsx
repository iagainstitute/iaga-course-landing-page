import AdmissionsForm from "@/components/Home/Admission";
import CreatorJoinCard from "@/components/Home/CreatorJoinCard";
import HeroSection from "@/components/Home/Herosection";
import IndustryGradeVisuals from "@/components/Home/Industry-grade-visuals";
import JourneyCard from "@/components/Home/Journey";
import Polishediaga from "@/components/Home/Polishediaga";
import PortfolioJoinCard from "@/components/Home/Portfolio";
import ProcessGrid from "@/components/Home/Processgrid";
import WhyIAGA from "@/components/Home/real-creative-studio";

function Index() {
  return (
    <>
      {/* Full Width Hero with integrated Video Showcase */}
      <HeroSection />

      {/* Rest content in container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        <IndustryGradeVisuals />
        <Polishediaga />
        <CreatorJoinCard />
        <JourneyCard />
        <ProcessGrid />
        <PortfolioJoinCard />
        <AdmissionsForm />
        <WhyIAGA />
      </div>
    </>
  );
}

export default Index;
