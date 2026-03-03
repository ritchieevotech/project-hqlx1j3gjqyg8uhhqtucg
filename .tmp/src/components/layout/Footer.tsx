import { useState, FormEvent } from "react";
import { Mail, Linkedin, Facebook, Instagram, Youtube, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/integrations/core";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await sendEmail({
        to: "success@engin8.io",
        from_name: "Engin8 Website",
        reply_to: email,
        subject: "New footer newsletter sign-up",
        body_html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #2D3663;">New Newsletter Signup</h1>
            <p>A new visitor has signed up for the newsletter from the footer.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Email Address:</strong> ${email}</p>
              <p><strong>Source:</strong> Site footer newsletter block</p>
            </div>
            <p style="color: #666; font-size: 12px;">This is an automated notification from your website.</p>
          </div>
        `,
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Footer newsletter signup error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          <div className="flex flex-col gap-3 md:gap-4 max-w-md mx-auto md:mx-0">
            <div>
              <span className="font-heading text-[11px] tracking-[0.2em] uppercase text-primary/80 font-bold block mb-1">Newsletter</span>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-primary leading-tight mb-2">
                Stay ahead of Amazon creative trends
              </h3>
              <p className="font-sans text-xs md:text-sm text-primary/80">
                Weekly strategy, case studies, and framework updates.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="mt-2 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="you@example.com"
                    className="bg-white/90 border-none text-primary placeholder:text-primary/40 h-10 md:h-11 rounded-full pr-10 focus-visible:ring-primary/20"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-10 md:h-11 px-4 md:px-6 rounded-full bg-primary text-primary-foreground font-heading text-sm md:text-base font-bold shadow-md hover:bg-primary/90 transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Sign Up
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
              
              <div className="min-h-[16px]">
                {status === "success" && (
                  <p className="text-[11px] text-emerald-900 font-medium">You're in. Watch your inbox.</p>
                )}
                {status === "error" && (
                  <p className="text-[11px] text-red-800 font-medium">Please enter a valid email or try again.</p>
                )}
                <p className="text-[10px] text-primary/70 mt-1">No spam. Unsubscribe anytime.</p>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-6 md:items-start">
            <div>
              <h3 className="font-heading text-base md:text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4 font-sans text-sm md:text-base text-primary/90">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary/70" />
                  <a href="mailto:success@engin8.io" className="hover:underline">success@engin8.io</a>
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
