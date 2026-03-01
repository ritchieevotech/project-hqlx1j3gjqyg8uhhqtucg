import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const successRates = [
  {
    category: "Main Image",
    rate: "81%",
    color: "border-accent",
    bgColor: "bg-accent",
    stats: [
      { label: "Sessions", value: "+132%" },
      { label: "Sales", value: "+541%" }
    ]
  },
  {
    category: "A+ Content",
    rate: "78%",
    color: "border-secondary",
    bgColor: "bg-secondary",
    stats: [
      { label: "Sessions", value: "+2,934%" },
      { label: "Sales", value: "+1,320%" }
    ]
  },
  {
    category: "SEO & Content Copy",
    rate: "79%",
    color: "border-primary",
    bgColor: "bg-primary",
    stats: [
      { label: "Sessions", value: "+645%" },
      { label: "Sales", value: "+1,050%" }
    ]
  }
];

export function ResultsSuccessRates() {
  return (
    <section className="px-6 py-16 bg-slate-50/50 rounded-[3rem] mx-6">
      <div className="mb-12">
        <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-4">Test Type Success Rates</h2>
        <p className="font-sans text-lg text-muted-foreground">Percentage of 2023–2026 experiments that produced a statistically significant win by category.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {successRates.map((item, idx) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Donut visual (CSS) */}
            <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center">
               <div className={`w-full h-full rounded-full border-[6px] ${item.color} border-t-transparent animate-spin-slow`} style={{ animationDuration: '3s' }} />
               <div className="absolute inset-0 flex items-center justify-center font-sans font-bold text-md text-primary">
                 {item.rate}
               </div>
            </div>

            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-6 pr-12">{item.category}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-6xl text-primary leading-none">{item.rate}</span>
                <span className="font-sans text-sm font-bold text-muted-foreground uppercase tracking-widest">Success</span>
              </div>
            </div>
            {/*
            <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-slate-100">
              {item.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                  <div className="flex items-center gap-1 font-heading text-xl font-bold text-primary">
                    <ArrowUpRight size={14} className="text-emerald-500" />
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
            */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
