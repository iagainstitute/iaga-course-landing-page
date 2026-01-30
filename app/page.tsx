import dynamic from "next/dynamic";
const AdmissionsForm = dynamic(() => import("@/components/Home/Admission"));
const CreatorJoinCard = dynamic(
  () => import("@/components/Home/CreatorJoinCard"),
);
const HeroSection = dynamic(() => import("@/components/Home/Herosection"));
const IndustryGradeVisuals = dynamic(
  () => import("@/components/Home/Industry-grade-visuals"),
);
const JourneyCard = dynamic(() => import("@/components/Home/Journey"));
const Polishediaga = dynamic(() => import("@/components/Home/Polishediaga"));
const PortfolioJoinCard = dynamic(() => import("@/components/Home/Portfolio"));
const ProcessGrid = dynamic(() => import("@/components/Home/Processgrid"));
const WhyIAGA = dynamic(() => import("@/components/Home/real-creative-studio"));

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
