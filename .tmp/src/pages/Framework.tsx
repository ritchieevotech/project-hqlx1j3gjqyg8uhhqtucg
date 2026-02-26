import { Header } from "@/components/layout/Header";
import { FrameworkHero, FrameworkIntro, FrameworkSixComponents } from "@/components/framework/FrameworkHeaderSections";
import { FrameworkAiEra, FrameworkProblems } from "@/components/framework/FrameworkAiAndProblems";
import { FrameworkPillarE, FrameworkPillarN, FrameworkPillarG } from "@/components/framework/FrameworkPillarsPart1";
import { FrameworkPillarI, FrameworkPillarN2, FrameworkPillar8 } from "@/components/framework/FrameworkPillarsPart2";
import { FrameworkImplementation, FrameworkResults, FrameworkMistakes, FrameworkServicesCta, FrameworkFaq } from "@/components/framework/FrameworkFooterSections";
import { SiteFooter } from "@/components/layout/Footer";

const Framework = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      <main>
        <FrameworkHero />
        <FrameworkIntro />
        <FrameworkSixComponents />
        <FrameworkAiEra />
        <FrameworkProblems />
        
        {/* Framework Pillars */}
        <FrameworkPillarE />
        <FrameworkPillarN />
        <FrameworkPillarG />
        <FrameworkPillarI />
        <FrameworkPillarN2 />
        <FrameworkPillar8 />
        
        <FrameworkImplementation />
        <FrameworkResults />
        <FrameworkMistakes />
        <FrameworkServicesCta />
        <FrameworkFaq />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Framework;
