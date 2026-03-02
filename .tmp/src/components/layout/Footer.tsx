import { Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-primary py-12 md:py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
          <div className="md:col-span-2 flex items-center">
            <div className="flex flex-col gap-3" style={{ marginTop: "-40px" }}>
              <Link to="/">
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771407501460-2.png"
                  alt="Engin8 logo"
                  className="w-40 md:w-52 h-auto"
                />
              </Link>
              <p className="font-sans text-sm md:text-base text-primary/80 max-w-sm">
                The engine quietly powering your Amazon and marketplace wins behind the scenes.
              </p>
            </div>
          </div>
          
          <div>
            {/* Empty column for spacing as per original layout */}
          </div>

          <div className="flex flex-col gap-6 md:items-start">
            <div>
              <h3 className="font-heading text-base md:text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4 font-sans text-sm md:text-base text-primary/90">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary/70" />
                  <a href="mailto:success@engin8.io" className="hover:underline">123success@engin8.io</a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-primary/70" />
                  <a 
                    href="https://www.linkedin.com/company/95691138/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider text-primary/70">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61585258760760" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/engin8.io/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@engin8.social" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-primary/40" />
        <div className="flex justify-center">
          <p className="mt-4 font-sans text-xs md:text-sm text-primary/80 text-center">
            © {currentYear} Engin8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
