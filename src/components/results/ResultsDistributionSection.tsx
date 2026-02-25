import { motion } from "framer-motion";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const pieData = [
  { name: "10–20%", value: 41, color: "#1F2F5B" },
  { name: "20–80%", value: 31, color: "#FBA834" },
  { name: "80–200%", value: 20, color: "#60C6F0" },
  { name: "200–600%", value: 4, color: "#E1E1E1" },
  { name: "600–2000%", value: 3, color: "#10b981" }
];

const barData = [
  { name: "Total", count: 120, fill: "#1F2F5B" },
  { name: "Favorable", count: 102, fill: "#10b981" },
  { name: "In Progress", count: 10, fill: "#FBA834" },
  { name: "Inconclusive", count: 8, fill: "#60C6F0" }
];

export function ResultsDistributionSection() {
  return (
    <section className="px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Card: Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
        >
          <div className="mb-8">
            <h3 className="font-heading text-3xl font-bold text-primary mb-2">Sales Increase Distribution</h3>
            <p className="font-sans text-muted-foreground">Percentage of clients by sale increase ranges</p>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`${value}%`, 'Percentage']}
                />
                <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingLeft: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute top-12 right-12 text-right">
            <div className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Average Increase</div>
            <div className="font-display text-5xl text-accent leading-none">92.8%</div>
          </div>
        </motion.div>

        {/* Right Card: Bar Chart & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
        >
          <div className="mb-10 flex justify-between items-start">
            <div>
              <h3 className="font-heading text-3xl font-bold text-primary mb-2">Client Performance</h3>
              <p className="font-sans text-muted-foreground">Internal split testing results summary</p>
            </div>
            <div className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl border border-emerald-100 flex flex-col items-center">
              <span className="font-sans text-xs font-bold uppercase tracking-widest">Success Rate</span>
              <span className="font-display text-4xl">78.8%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {barData.map((item) => (
              <div key={item.name} className="bg-slate-50 p-4 rounded-2xl text-center">
                <div className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 line-clamp-1">{item.name}</div>
                <div className="font-display text-3xl text-primary">{item.count}</div>
              </div>
            ))}
          </div>

          <div className="flex-1 h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-6 font-sans text-sm text-muted-foreground italic text-center">
            * Data updated monthly. Includes current MYE and external split tests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
