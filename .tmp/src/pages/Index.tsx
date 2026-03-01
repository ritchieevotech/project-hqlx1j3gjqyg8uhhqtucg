import { Header } from "@/components/layout/Header";
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
import { SiteFooter } from "@/components/layout/Footer";

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
       {/*  <ContentResults /> */}
        <ContentCaseStudies />
        <CloserLookGoods />
        <GetItDoneRight />
        <FaqSection />
        <WhyAgenciesPartner />
        <AboutEngin8 />
        <MiniAuditCta />
        <MoreCreativeWorks />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
