import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const tableData = [
  { category: "Supplement", before: "11%", after: "13.40%", change: "+2.4%", increase: "70.6%", status: "Live" },
  { category: "Pet", before: "8.5%", after: "10.2%", change: "+1.7%", increase: "55.2%", status: "Coming Soon" },
  { category: "Food & Bev", before: "9.2%", after: "12.8%", change: "+3.6%", increase: "82.4%", status: "Live" },
  { category: "Baby", before: "7.8%", after: "9.5%", change: "+1.7%", increase: "48.9%", status: "Coming Soon" },
  { category: "Toys & Games", before: "6.5%", after: "8.2%", change: "+1.7%", increase: "52.1%", status: "Coming Soon" },
  { category: "Beauty & Personal Care", before: "12.4%", after: "15.9%", change: "+3.5%", increase: "75.3%", status: "Live" }
];

export function ResultsCategoriesTable() {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
      >
        <div className="p-8 md:p-12 border-b border-slate-100">
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-4">Top Categories Performance</h2>
          <p className="font-sans text-lg text-muted-foreground">CTR performance and order increase by Amazon category.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-6 font-heading font-bold text-primary uppercase tracking-widest text-sm">Category Name</th>
                <th className="px-8 py-6 font-heading font-bold text-primary uppercase tracking-widest text-sm text-center">Avg CTR Before</th>
                <th className="px-8 py-6 font-heading font-bold text-primary uppercase tracking-widest text-sm text-center">Avg CTR After</th>
                <th className="px-8 py-6 font-heading font-bold text-primary uppercase tracking-widest text-sm text-center">Absolute Change</th>
                <th className="px-8 py-6 font-heading font-bold text-primary uppercase tracking-widest text-sm text-center">Avg Order Increase</th>
                <th className="px-8 py-6 font-heading font-bold text-primary uppercase tracking-widest text-sm text-center">Data Availability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => (
                <tr key={row.category} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="font-sans font-bold text-primary group-hover:text-accent transition-colors">{row.category}</div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="font-sans text-muted-foreground">{row.status === "Coming Soon" ? "—" : row.before}</div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="font-sans text-muted-foreground">{row.status === "Coming Soon" ? "—" : row.after}</div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="font-sans font-bold text-emerald-600">
                      {row.status === "Coming Soon" ? "—" : row.change}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="font-heading text-xl font-bold text-primary">
                      {row.status === "Coming Soon" ? "—" : row.increase}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    {row.status === "Live" ? (
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-sans">
                        VERIFIED DATA
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-slate-100 text-slate-500 border-slate-200 font-sans">
                        COMING SOON
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-slate-50/50 border-t border-slate-100">
          <p className="font-sans text-sm text-muted-foreground text-center">
            Detailed case studies for each category are available upon request. Data based on average performance of 5+ brands per category.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
