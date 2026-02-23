import * as React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    brand: "Nordic Lifting",
    title: "How Nordic Lifting revived Amazon ad performance through AI",
    image:
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771857156541-Gemini-Generated-Image-fhdl04fhdl04fhdl.png",
    link: "/case-studies/nordic-lifting",
  },
  {
    id: 2,
    brand: "Blake's",
    label: "CASE STUDY : SUPPLEMENTS · Collagen Category",
    title: "Collagen Brand Lifts CVR 38% and Adds $42K/Month — Without Touching Ad Spend",
    image:
      "https://images.pexels.com/photos/1181713/pexels-photo-1181713.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    brand: "JIYU",
    label: "CASE STUDY · BEAUTY · Skincare Serum",
    title: "Skincare Brand Drops CPC 34% With a 3-Second Video Hook Overhaul",
    image:
      "https://images.pexels.com/photos/1181714/pexels-photo-1181714.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    brand: "Feel Good Foods",
    title: "Dumplings to Dollars: 2484% Growth in CPG",
    image:
      "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const ContentCaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background overflow-hidden scroll-mt-28 outline-none focus:outline-none focus-visible:outline-none">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-6 tracking-tight">
            Content That Creates <span className="squiggly-underline">Results</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-foreground/80">
            Real brands, real lifts in sales from optimized content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {caseStudies.map((study) => {
            const isInternal = study.link?.startsWith("/");
            const CardWrapper = study.link ? "a" : "div";
            
            return (
              <CardWrapper
                key={study.id}
                href={study.link}
                target={study.link && !isInternal ? "_blank" : undefined}
                rel={study.link && !isInternal ? "noopener noreferrer" : undefined}
                className="flex flex-col items-start group cursor-pointer"
              >
                <div className="w-full rounded-[1.75rem] overflow-hidden bg-black shadow-xl border border-border/70 aspect-[16/9] relative mb-6">
                  <img
                    src={study.image}
                    alt={`Video thumbnail for ${study.brand} case study`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                
                <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground/80 mb-2">
                  {study.label ?? `Case Study: ${study.brand}`}
                </p>
                
                <h3 className="font-heading text-xl md:text-3xl text-primary leading-tight tracking-tight group-hover:text-secondary transition-colors duration-300">
                  {study.title}
                </h3>
              </CardWrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
