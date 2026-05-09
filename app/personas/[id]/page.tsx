'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { User, Briefcase, Target, Clock, ArrowLeft, Shield, Globe, Mail, Sparkles } from 'lucide-react';
import type { Persona } from '@/src/generated/client';

export default function PersonaProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [persona, setPersona] = useState<Persona | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/personas/${params.id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setPersona(data);
        setIsLoading(false);
      })
      .catch(() => {
        router.push('/dashboard');
      });
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!persona) return null;

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Matches
      </button>

      <div className="premium-card p-10 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full -mr-20 -mt-20" />
        
        <div className="flex flex-col md:flex-row gap-10 relative z-10">
          {/* Left Side: Avatar & Core Info */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 p-1 mb-6 relative group">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl">
                {persona.avatarUrl ? (
                  <img src={persona.avatarUrl} alt={persona.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    <User className="w-16 h-16 text-slate-600" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-lg bg-indigo-600 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                {persona.personaType}
              </div>
            </div>

            <h1 className="text-3xl font-black mb-1">{persona.name}</h1>
            <p className="text-indigo-400 font-bold text-sm mb-6 uppercase tracking-wider">{persona.title}</p>
            
            <div className="w-full space-y-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <Shield className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-300 font-medium">Verified Persona</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <Globe className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-300 font-medium">Utah Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Profile */}
          <div className="flex-1 space-y-10">
            <section>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Background</h3>
              <p className="text-slate-300 leading-relaxed italic">&quot;{persona.background}&quot;</p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <section>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {persona.industries.split(',').map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-indigo-500/5 text-[10px] font-bold text-indigo-300 border border-indigo-500/10 uppercase">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-400" />
                  Mission
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {persona.missionInterests}
                </p>
              </section>
            </div>

            <section className="pt-6 border-t border-slate-800">
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Availability</p>
                  <p className="text-sm font-bold text-slate-200">{persona.availability}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Risk Profile</p>
                  <p className="text-sm font-bold text-slate-200">{persona.riskTolerance}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Stage Preference</p>
                  <p className="text-sm font-bold text-slate-200">{persona.stagePreference}</p>
                </div>
              </div>
            </section>

            <div className="pt-4 flex gap-4">
              <button className="premium-button-primary px-8 flex-1">
                <Mail className="w-4 h-4" />
                Inquire Directly
              </button>
              <button className="premium-button-secondary px-8">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em] flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3" />
          Powered by LaunchHive Commercialization Engine
        </p>
      </div>
    </div>
  );
}
