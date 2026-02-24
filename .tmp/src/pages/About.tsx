import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Mail, Linkedin, Compass, Target, TrendingUp, Cog, CheckCircle2, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    {
      name: "Robert Ferreira",
      role: "Founder",
      specialty: "Strategic Marketplace Visionary",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771966126993-1766640578560-pasted-image-1766640468322-1.png",
      position: "object-left"
    },
    {
      name: "Lee Loree",
      role: "Founder",
      specialty: "E-commerce Operations Expert",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771965555709-Gemini-Generated-Image-1vm75r1vm75r1vm7.png",
      position: "object-center"
    },
    {
      name: "Henrik Anderson",
      role: "Director of Product",
      specialty: "Product Innovation & Architecture",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771963711801-Gemini-Generated-Image-utg57hutg57hutg5.png",
      position: "object-right"
    },
    {
      name: "Blake Gale",
      role: "Chief Relationship Officer",
      specialty: "Strategic Partnerships & Growth",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771962948656-Gemini-Generated-Image-c0r71cc0r71cc0r7.png",
      position: "object-left"
    },
    {
      name: "Lauren Gentile",
      role: "Chief Operations Officer",
      specialty: "Workflow Optimization Specialist",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771962723162-Gemini-Generated-Image-49hwek49hwek49hw.png",
      position: "object-center"
    },
    {
      name: "Kristy Pinand",
      role: "Creative Director",
      specialty: "Visual Narrative Design",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771966305333-Gemini-Generated-Image-d0k97bd0k97bd0k9.png",
      position: "object-right"
    },
    {
      name: "Jeff Scolnick",
      role: "Chief Go-To-Market Officer",
      specialty: "Market Entry & Scaling Strategy",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771963230591-Gemini-Generated-Image-v5r2a4v5r2a4v5r2.png",
      position: "object-center"
    }
  ];

  const values = [
    {
      title: "Make decisions with clarity.",
      icon: <Compass className="w-6 h-6 text-secondary" />
    },
    {
      title: "Execute with precision.",
      icon: <Target className="w-6 h-6 text-accent" />
    },
    {
      title: "Move with intention.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "Build systems that scale.",
      icon: <Cog className="w-6 h-6 text-secondary" />
    }
  ];

  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Brands Scaled", value: "200+" },
    { label: "Revenue Generated", value: "$500M+" }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      
      <main className="pt-28 md:pt-40 pb-16">
        {/* Hero Section */}
        <section className="relative mb-24 overflow-hidden bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.25em] text-white/70 mb-6">
                ABOUT ENGIN8.IO
              </p>
              
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Infinity className="h-8 w-8 text-white" />
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight mb-6">
                The Engine Behind Ecommerce Growth
              </h1>

              <div className="font-sans text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto space-y-4">
                <p>
                  Engin8 supports brands and agencies across Amazon, Walmart, TikTok, and beyond with a model built for real marketplace performance.
                </p>
                <p className="italic opacity-90">
                  The eight represents continuous motion: capabilities reinforcing each other over time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8 tracking-tight">
                  Our Role for Agencies & Brands
                </h2>
                <div className="space-y-6 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    We saw a consistent problem in the marketplace: agencies charging premium retainers and brands investing heavily in ads, yet listings were still underperforming. Not because the product lacked potential, but because the page wasn’t engineered to convert.
                  </p>
                  <p>
                    Engin8.io provides the scalable back-office execution that agencies need and the performance-first creative infrastructure that brands want—without the need for internal expansion.
                  </p>
                  <p>
                    Our focus is narrow but deep: A+ content architecture, structured split testing, and mobile-first storefronts that actually move the needle on your P&L.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-border/50"
              >
                <h3 className="font-heading text-xl md:text-2xl text-primary mb-6 font-bold uppercase tracking-wide">
                  What We Care About
                </h3>
                <ul className="space-y-4">
                  {[
                    "Measurable performance lifts",
                    "White-label operational excellence",
                    "Psychology-driven design",
                    "Mobile-first optimization",
                    "Rapid execution & scalability"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-base text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50/70 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4 tracking-tight">What We Believe</h2>
              <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Four principles that guide how we think, build, and operate for our partners.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-8 rounded-[1.75rem] border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-primary font-bold leading-tight">{value.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-primary text-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl mb-4 tracking-tight">Meet the Team</h2>
              <p className="font-sans text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                A small, senior team focused on what actually moves your marketplace P&L.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white/5 rounded-[1.75rem] border border-white/10 overflow-hidden hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      className={`w-full h-full object-cover ${member.position} group-hover:scale-[1.03] transition-all duration-500`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                    <p className="font-sans text-sm text-secondary font-semibold mb-3">{member.role}</p>
                    <p className="font-sans text-xs text-white/60 leading-relaxed italic border-t border-white/10 pt-3">
                      {member.specialty}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[2.5rem] p-12 text-center text-white"
            >
              <h2 className="font-heading text-3xl md:text-5xl mb-6 tracking-tight">Want Engin8 in your corner?</h2>
              <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto">
                Stop leaving profit on the table. Let's engineer your listings for maximum conversion.
              </p>
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary font-bold rounded-full px-12 py-7 text-xl shadow-lg shadow-black/10">
                <a 
                  href="https://calendar.app.google/iqBESxmECENgqPon9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK A STRATEGY CALL
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
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
                    <a href="mailto:jeff@engin8.com" className="hover:underline">jeff@engin8.com</a>
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

export default About;
