import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Infinity, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Showcase", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Services", href: "#" },
  { name: "Metrics", href: "#" },
  { name: "Method", href: "#" },
  { name: "Blog", href: "#" },
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
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="w-8 h-8 text-primary transition-transform group-hover:rotate-180 duration-500" />
          <span className="font-heading text-2xl font-bold tracking-tight text-primary">
            Engin8
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold rounded-full px-6">
            LET'S CHAT
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
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold rounded-full w-full py-6 text-xl mt-4">
            LET'S CHAT
          </Button>
        </div>
      </div>
    </header>
  );
}
