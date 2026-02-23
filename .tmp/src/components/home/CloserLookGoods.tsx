import * as React from "react";
import { motion } from "framer-motion";
import { DetailRow } from "./closer-look/DetailRow";

export const CloserLookGoods = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-6 tracking-tight">
            A Closer Look <span className="text-secondary italic">at the Goods</span>
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <DetailRow
          isFirst
          isReversed
          bonusLabel="Bonus"
          title="Product Images That Convert"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771441817248-Untitled-design-9.png"
          imageAlt="Vega protein powder tub with chocolate splash and glass"
          theWhat={<>Your image stack is your first conversion lever. It controls the click, sets expectations, and shapes perceived value before a single word is read.</>}
          theHow={<>We build structured visual sequences that guide attention, highlight benefits, and visually handle objections — all engineered to improve CTR and on-page conversion.</>}
          bonus={<>Access to curated lifestyle and supporting visual assets when strategically needed, ensuring your image stack feels elevated and complete.</>}
        />

        <DetailRow
          delay={0.1}
          bonusLabel="Included"
          title="SEO + AI-Ready Listing Copy"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771862323641-Gemini-Generated-Image-j9jfmdj9jfmdj9jf.png"
          imageAlt="SEO and AI-ready listing concept art with growth chart and AI brain"
          theWhat={<>Amazon is both a search engine and an AI-driven shopping platform. Your listing must rank, resonate, and be interpreted correctly by Rufus.</>}
          theHow={<>We develop persuasive messaging aligned with buyer psychology, then layer in structured keyword and intent mapping to improve discoverability and AI surfacing.</>}
          bonus={<>Two optimized title variations structured for immediate split testing inside Amazon Experiments.</>}
        />

        <DetailRow
          isReversed
          delay={0.15}
          bonusLabel=""
          title="Main Image Performance Optimization"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771442386194-Untitled-design-10.png"
          imageAlt="Pink DIA hydration supplement jar with strawberries and vitamin callouts"
          theWhat={<>Your hero image determines whether you earn the click or lose it to a competitor.</>}
          theHow={<>We develop differentiated main image concepts built to increase CTR while maintaining compliance and clarity.</>}
          bonus={
            <>
              <span className="font-semibold not-italic text-primary">Included:</span>{" "}
              Pre-validation testing with targeted shopper panels to gather qualitative and quantitative feedback before launch.
            </>
          }
        />

        <DetailRow
          delay={0.2}
          bonusLabel="Included"
          title="Premium A+ Content Architecture"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771442829083-Screenshot-2026-02-19-at-3.26.14-AM.png"
          imageAlt="Joejis ceramic bakeware Premium A+ content graphic with family dinner scene and colorful dishes"
          theWhat={
            <>A+ Content should function like a conversion landing page — structured storytelling, visual hierarchy, and benefit reinforcement.</>
          }
          theHow={
            <>We design modular, mobile-first layouts that improve engagement, clarity, and buyer confidence.</>
          }
          bonus={
            <>Brand Story refinement and backend keyword alignment for stronger organic visibility.</>
          }
        />

        <DetailRow
          isReversed
          delay={0.25}
          bonusLabel="Included"
          title="Custom Storefront Infrastructure"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771542743651-Untitled-design-15.png"
          imageAlt="Colorful food brand storefront-style layout"
          theWhat={<>Your Storefront is your brand’s controlled ecosystem inside Amazon. It should nurture, educate, and convert — not simply display products.</>}
          theHow={<>We architect guided, mobile-first Storefront experiences using the ENGIN8 framework to improve trust, engagement, and revenue per visitor.</>}
          bonus={
            <>Strategic motion elements (where appropriate) to increase engagement and visual differentiation.</>
          }
        />
      </div>
    </section>
  );
};
