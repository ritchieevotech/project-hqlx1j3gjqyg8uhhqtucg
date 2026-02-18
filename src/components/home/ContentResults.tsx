import * as React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Main Image Tests",
    percent: "83.75%",
    sessions: "+145%",
    orders: "+547%",
    color: "from-emerald-400 to-emerald-200",
  },
  {
    label: "A+ Content Tests",
    percent: "86.55%",
    sessions: "+4933%",
    orders: "+1080%",
    color: "from-sky-400 to-sky-200",
  },
  {
    label: "Title & Bullets Tests",
    percent: "71.5%",
    sessions: "+589%",
    orders: "+990%",
    color: "from-amber-400 to-amber-200",
  },
];

export const ContentResults = () => {
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
            Content That Creates <span className="squiggly-underline">Results</span>
          </h2>
          <div className="space-y-1">
            <p className="font-sans text-base md:text-lg text-foreground/80">
              On average, <span className="font-semibold text-primary">80%</span> of clients see a lift in sales
            </p>
            <p className="font-sans text-base md:text-lg text-foreground/80">
              <span className="font-semibold text-primary">60%</span> see a sales increase of <span className="font-semibold text-primary">20–1000%</span> within 30 days of uploading
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary text-center mb-12 tracking-tight">
            Success Rate
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group rounded-[2.5rem] bg-slate-50 border border-border/60 shadow-sm p-8 flex flex-col gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <p className="font-sans text-sm md:text-base font-medium text-muted-foreground/80 group-hover:text-primary transition-colors">
                  {card.label}
                </p>
                <div className="relative w-12 h-12">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${card.color} opacity-80 animate-pulse`} />
                  <div className="absolute inset-[4px] rounded-full bg-white flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-tr ${card.color}`} />
                  </div>
                </div>
              </div>

              <div className="text-center py-4">
                <p className="font-heading text-5xl md:text-6xl text-primary mb-1">
                  {card.percent}
                </p>
                <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Success Rate
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] bg-white border border-border/40 p-4 shadow-sm group-hover:border-primary/20 transition-all">
                  <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-1.5 font-semibold">
                    Sessions
                  </p>
                  <p className="font-heading text-xl md:text-2xl text-primary">
                    {card.sessions}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white border border-border/40 p-4 shadow-sm group-hover:border-primary/20 transition-all">
                  <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-1.5 font-semibold">
                    Orders
                  </p>
                  <p className="font-heading text-xl md:text-2xl text-primary">
                    {card.orders}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
