import { Header } from "@/components/layout/Header";
import { FrameworkHero, FrameworkIntro, FrameworkSixComponents } from "@/components/framework/FrameworkHeaderSections";
import { FrameworkAiEra, FrameworkProblems } from "@/components/framework/FrameworkAiAndProblems";
import { FrameworkPrinciples } from "@/components/framework/FrameworkAcronym";
import { FrameworkPillarE, FrameworkPillarN, FrameworkPillarG } from "@/components/framework/FrameworkPillarsPart1";
import { FrameworkPillarI, FrameworkPillarN2, FrameworkPillar8 } from "@/components/framework/FrameworkPillarsPart2";
import { FrameworkImplementation, FrameworkResults, FrameworkMistakes, FrameworkServicesCta, FrameworkFaq } from "@/components/framework/FrameworkFooterSections";
import { Mail, Linkedin } from "lucide-react";

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

      <footer className="bg-secondary text-primary py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
            <div className="md:col-span-2 flex items-center">
              <div className="flex flex-col gap-3" style={{ marginTop: "-40px" }}>
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771407501460-2.png"
                  alt="Engin8 logo"
                  className="w-40 md:w-52 h-auto"
                />
                <p className="font-sans text-sm md:text-base text-primary/80 max-w-sm">
                  The engine quietly powering your Amazon and marketplace wins behind the scenes.
                </p>
              </div>
            </div>
            <div></div>
            <div className="flex flex-col gap-6 md:items-start">
              <div>
                <h3 className="font-heading text-base md:text-lg font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 font-sans text-sm md:text-base text-primary/90">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:success@engin8.com" className="hover:underline">success@engin8.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <a href="https://www.linkedin.com/company/95691138/" className="hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-primary/40" />
          <div className="flex justify-center">
            <p className="mt-4 font-sans text-xs md:text-sm text-primary/80 text-center">
              © {new Date().getFullYear()} Engin8. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Framework;
