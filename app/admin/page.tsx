import React from "react";
import { Activity, Users, Target, ArrowUpRight } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-hive-white">Dashboard Overview</h2>
          <p className="text-hive-white/60 mt-2 text-lg">System vitals and high-level matchmaking flow.</p>
        </div>
        <button className="bg-hive-emerald hover:bg-hive-mint text-hive-charcoal font-semibold py-2 px-6 rounded-md shadow-glow transition-all flex items-center gap-2">
          Sync Affinity CRM
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-hive-slate border border-hive-emerald/20 p-6 rounded-xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={48} className="text-hive-emerald" />
          </div>
          <p className="text-sm text-hive-white/60 mb-1 font-medium">Total Personas</p>
          <p className="text-4xl font-bold text-hive-emerald">1,248</p>
          <div className="mt-4 text-xs flex items-center gap-2 text-hive-mint">
            <ArrowUpRight size={12} />
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="bg-hive-slate border border-hive-emerald/20 p-6 rounded-xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target size={48} className="text-hive-emerald" />
          </div>
          <p className="text-sm text-hive-white/60 mb-1 font-medium">Active Matches</p>
          <p className="text-4xl font-bold text-hive-emerald">342</p>
          <div className="mt-4 text-xs flex items-center gap-2 text-hive-mint">
            <ArrowUpRight size={12} />
            <span>+5% from last month</span>
          </div>
        </div>

        <div className="bg-hive-slate border border-hive-emerald/20 p-6 rounded-xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity size={48} className="text-hive-emerald" />
          </div>
          <p className="text-sm text-hive-white/60 mb-1 font-medium">Affinity Sync Status</p>
          <p className="text-4xl font-bold text-hive-mint">Healthy</p>
          <div className="mt-4 text-xs flex items-center gap-2 text-hive-white/60">
            <span>Last sync: 2 minutes ago</span>
          </div>
        </div>
      </div>

      <div className="bg-hive-slate border border-hive-emerald/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6 border-b border-hive-emerald/10 pb-4">Recent Deal Flow</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-hive-emerald/20 text-sm text-hive-white/60">
                <th className="pb-3 font-medium">Match ID</th>
                <th className="pb-3 font-medium">Founder</th>
                <th className="pb-3 font-medium">Expert Target</th>
                <th className="pb-3 font-medium">Score</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-hive-white/5 hover:bg-hive-white/5 transition-colors">
                <td className="py-4 font-mono text-hive-mint/70">#M-9921</td>
                <td className="py-4 font-medium">QuantumLens Inc.</td>
                <td className="py-4 text-hive-white/80">Dr. Sarah Vance</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 bg-hive-charcoal rounded-full overflow-hidden">
                      <div className="h-full bg-hive-emerald w-[92%]"></div>
                    </div>
                    <span>0.92</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    Pending Review
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className="text-hive-emerald hover:text-hive-mint text-xs font-medium">Inspect</button>
                </td>
              </tr>
              <tr className="border-b border-hive-white/5 hover:bg-hive-white/5 transition-colors">
                <td className="py-4 font-mono text-hive-mint/70">#M-9920</td>
                <td className="py-4 font-medium">AeroFlow Dynamics</td>
                <td className="py-4 text-hive-white/80">Michael Chang</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 bg-hive-charcoal rounded-full overflow-hidden">
                      <div className="h-full bg-hive-emerald w-[85%]"></div>
                    </div>
                    <span>0.85</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-hive-emerald/10 text-hive-emerald border border-hive-emerald/20">
                    Intro Accepted
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className="text-hive-emerald hover:text-hive-mint text-xs font-medium">Inspect</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
