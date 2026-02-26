import { Header } from "@/components/layout/Header";
import { ResultsHero } from "@/components/results/ResultsHero";
import { ResultsSuccessRates } from "@/components/results/ResultsSuccessRates";
import { ResultsDistributionSection } from "@/components/results/ResultsDistributionSection";
import { ResultsFaqSection } from "@/components/results/ResultsFaqSection";
import { ResultsTestimonialsWall } from "@/components/results/ResultsTestimonialsWall";
import { SiteFooter } from "@/components/layout/Footer";

const Results = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      <main className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto">
          <ResultsHero />
          <ResultsSuccessRates />
          <ResultsDistributionSection />
          <ResultsFaqSection />
          <ResultsTestimonialsWall />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Results;
