import { Header } from "@/components/layout/Header";
import { Mail, Linkedin } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { SocialProof } from "@/components/home/SocialProof";
import { TrustBar } from "@/components/home/TrustBar";
import { CreativeWorks } from "@/components/home/CreativeWorks";
import { APlusShowcase } from "@/components/home/APlusShowcase";
import { Storefronts } from "@/components/home/Storefronts";
import { StorefrontGallery } from "@/components/home/StorefrontGallery";
import { ListingOptimization } from "@/components/home/ListingOptimization";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DailyOptimizations } from "@/components/home/DailyOptimizations";
import { ClientVideoTestimonial } from "@/components/home/ClientVideoTestimonial";
import { ContentResults } from "@/components/home/ContentResults";
import { ContentCaseStudies } from "@/components/home/ContentCaseStudies";
import { CloserLookGoods } from "@/components/home/CloserLookGoods";
import { GetItDoneRight } from "@/components/home/GetItDoneRight";
import { FaqSection } from "@/components/home/FaqSection";
import { WhyAgenciesPartner } from "@/components/home/WhyAgenciesPartner";
import { AboutEngin8 } from "@/components/home/AboutEngin8";
import { MiniAuditCta } from "@/components/home/MiniAuditCta";
import { MoreCreativeWorks } from "@/components/home/MoreCreativeWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      <main>
        <Hero />
        <WorkShowcase />
        <SocialProof />
        <TrustBar />
        <CreativeWorks />
        <APlusShowcase />
        <Storefronts />
        <StorefrontGallery />
        <ListingOptimization />
        <HowItWorks />
        <DailyOptimizations />
        <ClientVideoTestimonial />
        <ContentResults />
        <ContentCaseStudies />
        <CloserLookGoods />
        <GetItDoneRight />
        <FaqSection />
        <WhyAgenciesPartner />
        <AboutEngin8 />
        <MiniAuditCta />
        <MoreCreativeWorks />
      </main>
      
      <footer className="bg-secondary text-primary py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
          {/* top row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
            {/* Left: logo / brand */}
            <div className="md:col-span-2 flex items-center">
              <div className="flex flex-col gap-3">
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

            {/* Middle: Services 
            <div>
              <h3 className="font-heading text-base md:text-lg font-semibold mb-3">Services</h3>
              <ul className="space-y-1.5 font-sans text-sm md:text-base text-primary/90">
                <li>Amazon Services</li>
                <li>Walmart Services</li>
                <li>Listing Optimization</li>
                <li>Traffic &amp; TikTok</li>
              </ul>
            </div>
            */}

            {/* Right: Resources and Contact Us */}
            <div className="flex flex-col gap-6 md:items-start">
              
              <div>
                <h3 className="font-heading text-base md:text-lg font-semibold mb-3"></h3>
              {/*  
              <ul className="space-y-1.5 font-sans text-sm md:text-base text-primary/90">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Legal</li>
                </ul>
                */}
              </div>
              
              <div>
                <h3 className="font-heading text-base md:text-lg font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 font-sans text-sm md:text-base text-primary/90">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:jeff@engin8.com" className="hover:underline">jeff@engin8.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <a href="#" className="hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* divider and bottom copyright */}
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

export default Index;
