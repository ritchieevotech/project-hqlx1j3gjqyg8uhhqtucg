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
          title="Product Images"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771441817248-Untitled-design-9.png"
          imageAlt="Vega protein powder tub with chocolate splash and glass"
          theWhat={<>Amazon product images are the first thing shoppers see when they enter your product page. <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">Each & every image should be serving a function</span> towards improving conversion.</>}
          theHow={<>Share your product photography with us and <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">watch us take your product images from zero to hero</span> with show & tell images that use a mix of product-in-use and lifestyle infographics.</>}
          bonus="High quality stock photography is included in all packages."
        />

        <DetailRow
          delay={0.1}
          title="SEO Listing Copy"
          imageSrc="https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Notebook with search engine results concepts"
          theWhat={<>Amazon is a search engine, which means it relies on keywords within your listing to help you <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">get found in the search results page</span>.</>}
          theHow={<>We always start with <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">compelling copy that converts</span> and then infuse keywords from our extensive research. Our SEO research blends internal and external Amazon data to understand how shoppers search, find and buy.</>}
          bonus={<>Using our title calculator we build you two titles so you can immediately run a split test with Amazon Experiments and learn <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">which title will earn you the most revenue</span>.</>}
        />

        <DetailRow
          isReversed
          delay={0.15}
          title="Enhanced Main Images"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771442386194-Untitled-design-10.png"
          imageAlt="Pink DIA hydration supplement jar with strawberries and vitamin callouts"
          theWhat={<>The hero image is the product-on-white image that draws shoppers to click into your Amazon product listing from the search results. Optimizing main images is the <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">#1 way to improve your click-through rate</span>.</>}
          theHow={<>Our goal is to steal clicks from the competition. We create <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">eye-candy hero image concepts</span> you can test in your own Amazon experiments so shoppers (and Amazon) tell you which main image will win.</>}
          bonus="Includes split testing suggestions so you can gather real feedback from Amazon Prime shoppers before you roll out a winner."
        />

        <DetailRow
          delay={0.2}
          title="Premium A+ Content"
          imageSrc="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771442829083-Screenshot-2026-02-19-at-3.26.14-AM.png"
          imageAlt="Joejis ceramic bakeware Premium A+ content graphic with family dinner scene and colorful dishes"
          theWhat={<>One of the best ways to improve listing performance is with A+ Content. Brands upgrading from basic to Premium A+ are often seeing up to <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">300% increases in sales</span>.</>}
          theHow={<>Our signature strategy uses large, scroll-stopping modules to create a <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">story-driven landing page effect</span>, backed by keywords that boost your organic SEO reach on and off Amazon.</>}
          bonus="We’ll help you unlock your Premium A+ content and dial in your brand story so every panel works hard for both mobile and desktop shoppers."
        />

        <DetailRow
          isReversed
          delay={0.25}
          title="Storefront Homepage"
          imageSrc="https://images.pexels.com/photos/4194625/pexels-photo-4194625.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Colorful food brand storefront-style layout"
          theWhat={<>Your storefront is the <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">only space to fully share your brand story</span> without competing ads. It’s where Google and Amazon shoppers land before diving into your product pages.</>}
          theHow={<>From layout strategy to module selection, we obsess over every detail so your storefront feels like a custom, editorial experience that moves shoppers from browsing to buying.</>}
          bonus={<>Every storefront homepage we design includes <span className="underline decoration-secondary decoration-2 underline-offset-4 font-medium">attention-grabbing motion elements</span> like subtle gifs or loops for a more engaging experience.</>}
        />
      </div>
    </section>
  );
};
