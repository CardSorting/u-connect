'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, MessageSquare, Target, ArrowRight, LayoutDashboard, User } from 'lucide-react';
import type { MatchResult, Persona } from '@/src/generated/client';

type MatchWithPersona = MatchResult & {
  persona?: Persona | null;
};

export default function DashboardPage() {
  const [matches, setMatches] = useState<MatchWithPersona[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/matches')
      .then((res) => {
        if (res.status === 401) {
          router.push('/login');
          return [];
        }
        return res.json();
      })
      .then((data) => {
        setMatches(data);
        setIsLoading(false);
      });
  }, [router]);

  const startNewIntake = async () => {
    const res = await fetch('/api/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personaId: undefined }),
    });

    if (res.ok) {
      const conversation = await res.json();
      router.push(`/chat?conversationId=${conversation.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto bg-[#020617] text-slate-200">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-3 tracking-tight flex items-center gap-3 text-white">
            <LayoutDashboard className="w-8 h-8 text-indigo-500" />
            Dashboard
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Welcome back to LaunchHive. Manage your commercialization journey and active matches.
          </p>
        </div>
        <button
          onClick={startNewIntake}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Start New Intake
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Quick Actions & Stats */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 backdrop-blur-sm">
            <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Quick Start
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Launch our AI concierge to discover new opportunities tailored to your evolving expertise.
            </p>
            <button 
              onClick={startNewIntake}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700"
            >
              Begin Conversational Intake
            </button>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Ecosystem Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Active Matches</span>
                <span className="text-sm font-bold text-white">{matches.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Connected Startups</span>
                <span className="text-sm font-bold text-white">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Active Matches Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-indigo-500" />
              Active Matches
            </h2>
            <button 
              onClick={() => router.push('/matches')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-widest"
            >
              View All
            </button>
          </div>

          {matches.length === 0 ? (
            <div className="p-12 rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 text-center">
              <p className="text-slate-500 text-sm mb-6">No matches identified yet.</p>
              <button 
                onClick={startNewIntake}
                className="text-indigo-400 text-sm font-bold hover:underline"
              >
                Start an intake session &rarr;
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {matches.slice(0, 3).map((match) => (
                <div key={match.id} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:scale-[1.01] transition-all group">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-[9px] font-bold text-indigo-400 uppercase tracking-tight">
                          {Math.round(match.score * 100)}% Match
                        </span>
                        {match.persona && (
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] text-slate-600 uppercase font-bold tracking-tighter">with</span>
                            <span className="text-[9px] text-slate-400 font-bold">
                              {['REVEALED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED'].includes(match.status) ? match.persona.name : 'Masked Partner'}
                            </span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {['REVEALED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED'].includes(match.status) ? match.persona?.title : 'Strategic Opportunity'}
                      </h4>
                      <p className="text-sm text-slate-400 line-clamp-1 mt-1">Status: {match.status.replace('_', ' ')}</p>
                    </div>
                    <button 
                      onClick={() => router.push('/matches')}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
