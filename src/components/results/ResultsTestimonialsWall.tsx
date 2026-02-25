import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Naturals",
    industry: "Beauty & Personal Care Brand",
    initials: "SJ",
    content: "The clarity Engin8 brings to testing is unparalleled. We saw a 45% jump in CTR within weeks of implementing their main image recommendations.",
    date: "June 12, 2025"
  },
  {
    name: "Michael Chen",
    role: "Brand Director, Zenith Labs",
    industry: "Supplements & Wellness Brand",
    initials: "MC",
    content: "Finally, an agency that speaks data. Their A+ content refresh literally doubled our conversion rate overnight. The ROI was immediate.",
    date: "May 28, 2025"
  },
  {
    name: "Elena Rodriguez",
    role: "E-commerce Manager",
    industry: "Omnichannel Retailer",
    initials: "ER",
    content: "The reporting is so easy to follow. I can actually show my team the direct impact of our creative spend. No more guessing what works.",
    date: "May 15, 2025"
  },
  {
    name: "David Ross",
    role: "CEO, Peak Performance Co.",
    industry: "Sports Nutrition Brand",
    initials: "DR",
    content: "Engin8 took the guesswork out of our Amazon strategy. We now know exactly what visuals drive our sales and why our customers convert.",
    date: "April 22, 2025"
  },
  {
    name: "Amanda Lee",
    role: "Founder, Glow Beauty",
    industry: "Skincare & Cosmetics Brand",
    initials: "AL",
    content: "The emotional relief of knowing our listings are optimized by experts is huge. Our best year yet, and we owe a lot of that to this testing.",
    date: "April 05, 2025"
  },
  {
    name: "James Wilson",
    role: "Director of Ops, NutraCore",
    industry: "Nutraceuticals Brand",
    initials: "JW",
    content: "Stellar results and even better communication. The testing process was seamless and the findings were eye-opening for our entire product line.",
    date: "March 18, 2025"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function ResultsTestimonialsWall() {
  return (
    <section className="px-6 py-20 bg-slate-50/60 rounded-[3rem] mx-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-4">
            What brands say about our testing
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Real feedback from marketplace leaders who trust our data-driven process.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-lg shadow-slate-200/60 border border-slate-100 p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-slate-50">
                  <AvatarFallback className="bg-accent text-white font-heading font-bold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-heading font-bold text-primary leading-tight">{t.industry}</div>
                </div>
              </div>
              
              <p className="font-sans text-base text-primary/90 leading-relaxed italic">
                "{t.content}"
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-50">
                <span className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {t.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
