import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Showcase", href: "#showcase" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Services", href: "#services" },
  { name: "Results", href: "#results" },
  { name: "Method", href: "#services" },
  { name: "Blog", href: "#results" },
  { name: "About Us", href: "#about-us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771407866640-Screenshot-2026-02-18-at-5.43.32-PM.png"
            alt="Engin8 logo"
            className="h-20 md:h-22 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-semibold md:text-xl text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold rounded-full px-6">
            <a 
              href="https://forms.engin8.io/Engin8/form/SignUpforYourFreeAmazonAccountAuditToday/formperma/6372zGl__oyc-Chb5bba6ijq4Mcw2oI960VZR-dGWdg?zf_lang=en" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LET'S CHAT
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-heading text-2xl font-bold text-primary border-b border-border pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold rounded-full w-full py-6 text-xl mt-4 h-auto">
            <a 
              href="https://forms.engin8.io/Engin8/form/SignUpforYourFreeAmazonAccountAuditToday/formperma/6372zGl__oyc-Chb5bba6ijq4Mcw2oI960VZR-dGWdg?zf_lang=en" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LET'S CHAT
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
