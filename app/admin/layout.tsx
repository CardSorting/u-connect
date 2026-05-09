import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Settings, 
  Activity,
  LogOut,
  Search,
  Bell
} from "lucide-react";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-hive-charcoal text-hive-white font-sans overflow-hidden">
      {/* Left-Hand Sidebar Navigation */}
      <aside className="w-64 flex flex-col bg-hive-slate border-r border-hive-emerald/20 flex-shrink-0">
        <div className="p-6 border-b border-hive-emerald/20 flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-hive-emerald flex items-center justify-center shadow-glow">
            <span className="text-hive-charcoal font-bold text-lg">L</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-hive-emerald">LaunchHive</h1>
            <p className="text-xs text-hive-mint/70 uppercase tracking-wider mt-0.5">Admin Hub</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          <div className="px-3 text-xs font-semibold text-hive-white/40 uppercase tracking-wider mb-2">Core Workflow</div>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-hive-emerald/10 text-hive-emerald font-medium transition-colors border border-hive-emerald/20">
            <LayoutDashboard size={18} />
            Overview
          </Link>
          <Link href="/admin/matches" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-hive-emerald/5 text-hive-white/80 hover:text-hive-emerald transition-colors">
            <Briefcase size={18} />
            Deal Flow
          </Link>
          <Link href="/admin/personas" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-hive-emerald/5 text-hive-white/80 hover:text-hive-emerald transition-colors">
            <Users size={18} />
            Ecosystem Directory
          </Link>

          <div className="px-3 text-xs font-semibold text-hive-white/40 uppercase tracking-wider mt-8 mb-2">System</div>
          <Link href="/admin/integrations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-hive-emerald/5 text-hive-white/80 hover:text-hive-emerald transition-colors">
            <Activity size={18} />
            Integrations (CRM)
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-hive-emerald/5 text-hive-white/80 hover:text-hive-emerald transition-colors">
            <Settings size={18} />
            Platform Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-hive-emerald/20 bg-hive-slate">
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-red-500/10 text-hive-white/60 hover:text-red-400 transition-colors text-left">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Industry-Standard Top Header */}
        <header className="h-16 border-b border-hive-emerald/20 bg-hive-slate/80 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0 flex-shrink-0">
          <div className="flex items-center text-sm text-hive-white/60 gap-2">
            <span className="hover:text-hive-white cursor-pointer transition-colors">Admin Workspace</span>
            <span className="text-hive-mint/40">/</span>
            <span className="text-hive-emerald font-medium">Overview</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-hive-white/40" size={16} />
              <input 
                type="text" 
                placeholder="Search founders, startups, matches... (Ctrl+K)" 
                className="bg-hive-charcoal border border-hive-emerald/20 text-sm text-hive-white rounded-full pl-9 pr-4 py-1.5 w-72 focus:outline-none focus:border-hive-emerald focus:ring-1 focus:ring-hive-emerald transition-all placeholder:text-hive-white/30"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-hive-white/30 font-mono pointer-events-none hidden group-hover:block transition-opacity">
                ⌘K
              </div>
            </div>
            <button className="text-hive-white/60 hover:text-hive-emerald transition-colors relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-hive-emerald rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-hive-emerald to-hive-mint flex items-center justify-center text-hive-charcoal font-bold text-sm cursor-pointer shadow-glow border border-hive-white/10">
              A
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hive-emerald/5 via-hive-charcoal/0 to-hive-charcoal/0 pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
