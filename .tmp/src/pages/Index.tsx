import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      <main>
        <Hero />
      </main>
      
      {/* Additional sections can be added here */}
      <footer className="bg-primary text-white py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-heading text-2xl font-bold">Engin8</div>
          <div className="font-sans text-sm text-white/60">
            © {new Date().getFullYear()} Engin8. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
