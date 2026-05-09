'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Briefcase, GraduationCap, Microscope, Megaphone, Shield, ArrowRight, Plus } from 'lucide-react';
import type { Persona } from '@/src/generated/client';

const iconMap: Record<string, any> = {
  operator: Briefcase,
  student: GraduationCap,
  founder: Microscope,
  advisor: Megaphone,
  executive: Shield,
};

export default function PersonasPage() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/personas')
      .then((res) => {
        if (res.status === 401) {
          router.push('/login');
          return [];
        }
        return res.json();
      })
      .then((data) => {
        setPersonas(data);
        setIsLoading(false);
      });
  }, [router]);

  const startChat = async (personaId?: string) => {
    const res = await fetch('/api/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personaId }),
    });

    if (res.ok) {
      const conversation = await res.json();
      router.push(`/chat?conversationId=${conversation.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-2">Discovery Personas</h1>
          <p className="text-slate-500 font-medium max-w-2xl">
            Select a commercialization profile to simulate a specific ecosystem journey.
          </p>
        </div>
        <button
          onClick={() => startChat()}
          className="px-6 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-sm font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Blank Discovery
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((persona) => {
          const Icon = iconMap[persona.personaType] || User;
          return (
            <div
              key={persona.id}
              className="premium-card flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center overflow-hidden">
                  {persona.avatarUrl ? (
                    <img src={persona.avatarUrl} alt={persona.name} className="w-full h-full object-cover" />
                  ) : (
                    <Icon className="w-6 h-6 text-emerald-400" />
                  )}
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400 border border-slate-700 uppercase tracking-wider">
                  {persona.personaType}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">{persona.name}</h3>
              <p className="text-emerald-400 text-sm font-medium mb-3">{persona.title}</p>
              
              <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
                {persona.background}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {persona.industries.split(',').slice(0, 2).map((industry: string) => (
                    <span key={industry} className="px-2 py-0.5 rounded-md bg-emerald-500/5 text-[10px] text-emerald-300 border border-emerald-500/10">
                      {industry.trim()}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => startChat(persona.id)}
                  className="premium-button-primary w-full py-2.5 text-sm group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  Start as {persona.name.split(' ')[0]}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
