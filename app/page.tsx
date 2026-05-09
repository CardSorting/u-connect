'use client';

import { useRouter } from 'next/navigation';
import { Rocket, Shield, Zap, Target, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Sparkles className="w-4 h-4" />
          The Utah Deep-Tech Matchmaker
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Scale Your <span className="text-gradient">Impact</span> <br /> in the Hive.
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          LaunchHive bridges the gap between breakthrough research and commercial reality. Discover your next advisory, operational, or technical role in Utah&apos;s elite startup ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <button
            onClick={() => router.push('/login')}
            className="premium-button-primary px-10 py-4 text-lg group w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats / Proof */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12 animate-in fade-in duration-1000 delay-500">
          <Stat label="University Partners" value="3+" />
          <Stat label="Demo Profiles" value="5" />
          <Stat label="Active Matches" value="50+" />
          <Stat label="Deep Tech Sectors" value="12" />
        </div>
      </main>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Target className="w-6 h-6" />}
            title="Precision Matching"
            description="Our AI concierge analyzes your background, goals, and risk tolerance to find the perfect commercialization fit."
          />
          <Feature
            icon={<Shield className="w-6 h-6" />}
            title="Utah Ecosystem"
            description="Built specifically for the University of Utah, BYU, and USU research pipelines."
          />
          <Feature
            icon={<Zap className="w-6 h-6" />}
            title="Local Intelligence"
            description="Powered by Hermes Agent runtime, ensuring all your data stays local and secure on your machine."
          />
        </div>
      </section>

    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</p>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="premium-card hover:bg-white/[0.02]">
      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}