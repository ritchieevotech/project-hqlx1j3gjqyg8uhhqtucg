import * as React from "react";
import { motion } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:gap-20 md:grid-cols-2 items-center"
        >
          {/* 1. Top-left blue panel with oval image */}
          <div className="bg-brand-blue rounded-[3rem] flex items-center justify-center py-16 px-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-[999px] overflow-hidden shadow-2xl border-4 border-white/30 transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/4109990/pexels-photo-4109990.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Colorful packaged snacks arranged in a bold product image layout"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* 2. Top-right text block: “Product Images” */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="font-heading text-3xl md:text-5xl text-primary tracking-tight">
                Product Images
              </h3>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>
            
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
                <span className="font-bold text-primary uppercase tracking-wider text-sm block mb-1">The What</span>
                Amazon product images are the first thing shoppers see when they enter your product page. <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">Each & every image should be serving a function</span> towards improving conversion.
              </p>
              
              <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
                <span className="font-bold text-primary uppercase tracking-wider text-sm block mb-1">The How</span>
                Share your product photography with us and <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">watch us take your product images from zero to hero</span> with show & tell images that use a mix of product-in-use and lifestyle infographics.
              </p>
              
              <div className="p-4 bg-muted/30 rounded-2xl border-l-4 border-secondary">
                <p className="font-sans text-sm md:text-base text-foreground/80 italic">
                  <span className="font-bold text-primary not-italic uppercase tracking-wider text-xs mr-2">Bonus</span>
                  High quality stock photography is included in all packages.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Bottom-left text block: “SEO Listing Copy” */}
          <div className="flex flex-col justify-center space-y-8 order-2 md:order-none">
            <div className="space-y-4">
              <h3 className="font-heading text-3xl md:text-5xl text-primary tracking-tight">
                SEO Listing Copy
              </h3>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
                <span className="font-bold text-primary uppercase tracking-wider text-sm block mb-1">The What</span>
                Amazon is a search engine, which means it relies on keywords within your listing to help you <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">get found in the search results page</span>.
              </p>
              
              <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
                <span className="font-bold text-primary uppercase tracking-wider text-sm block mb-1">The How</span>
                We always start with <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">compelling copy that converts</span> and then infuse keywords from our extensive research. Our SEO research blends internal and external Amazon data to understand how shoppers search, find and buy.
              </p>
              
              <div className="p-4 bg-muted/30 rounded-2xl border-l-4 border-secondary">
                <p className="font-sans text-sm md:text-base text-foreground/80 italic">
                  <span className="font-bold text-primary not-italic uppercase tracking-wider text-xs mr-2">Bonus</span>
                  Using our title calculator we build you two titles so you can immediately run a split test with Amazon Experiments and learn <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">which title will earn you the most revenue</span>.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Bottom-right blue panel with SEO graphic */}
          <div className="bg-brand-blue rounded-[3rem] flex items-center justify-center py-16 px-8 shadow-2xl relative overflow-hidden group order-1 md:order-none">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-[999px] overflow-hidden shadow-2xl border-4 border-white/30 transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Notebook with search engine results concepts"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
