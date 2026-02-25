import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you measure whether a creative test actually worked?",
    answer: "We track session-to-order rate, CTR, and revenue per session over a defined pre/post window. We normalize for traffic swings and only declare a winner when the lift is significant enough to impact your bottom line."
  },
  {
    question: "What kind of lift do brands typically see from a winning test?",
    answer: "While every brand is unique, winning tests often see a 10–30% conversion rate lift. Not every test is a home run, but the cumulative impact of multiple optimizations compounds into massive growth."
  },
  {
    question: "How long does it take to gather reliable data?",
    answer: "Most tests run for 3–6 weeks depending on your listing's traffic. We ensure we gather enough sessions and orders per variant to eliminate noise and provide data you can trust."
  },
  {
    question: "What happens if a test underperforms or there is no clear winner?",
    answer: "If there's no clear winner, we revert to the strongest performing variant. We document the learnings from the 'failure' and use those insights to sharpen our next creative hypothesis."
  },
  {
    question: "Can you show impact if Amazon's built-in experiment tool isn't available?",
    answer: "Absolutely. We use robust manual pre/post analysis, controlling for seasonality and traffic shifts. We provide clear before-and-after snapshots so you can see exactly how the changes shifted your performance."
  },
  {
    question: "Where do these results show up in my business?",
    answer: "Improvements manifest as higher organic rankings, stronger hero ASIN performance, and more efficient ad spend. When your listing converts better, every dollar spent on traffic works much harder for you."
  }
];

export function ResultsFaqSection() {
  return (
    <section className="px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            Everything you need to know about our data-driven approach to Amazon creative testing.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-none bg-slate-50/50 rounded-2xl px-6 py-2 transition-colors data-[state=open]:bg-slate-100/50"
            >
              <AccordionTrigger className="font-heading text-lg md:text-xl font-bold text-primary hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
