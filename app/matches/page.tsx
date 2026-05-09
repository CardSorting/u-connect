'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, Sparkles, ChevronRight, Target, Clock, AlertCircle, ArrowUpRight, LayoutDashboard, User } from 'lucide-react';
import type { MatchResult, Persona } from '@/src/generated/client';

type MatchWithPersona = MatchResult & {
  persona?: Persona | null;
};

export default function MatchesPage() {
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            Commercialization Engine
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Your Matches</h1>
        </div>
        <button
          onClick={() => router.push('/personas')}
          className="premium-button-secondary gap-2"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>
      </header>

      {matches.length === 0 ? (
        <div className="premium-card text-center py-20 bg-slate-900/20">
          <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-slate-600" />
          </div>
          <h2 className="text-xl font-bold mb-2">No matches yet</h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            Complete a chat intake with our concierge to generate your personalized commercialization matches.
          </p>
          <button
            onClick={() => router.push('/personas')}
            className="premium-button-primary inline-flex"
          >
            Start Intake
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {matches.map((match) => (
            <div key={match.id} className="premium-card group hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                      {match.matchType || 'Opportunity'}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {match.sector || 'General'}
                    </div>
                    {match.persona && (
                      <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-indigo-500/5 border border-indigo-500/10">
                        {match.persona.avatarUrl ? (
                          <img src={match.persona.avatarUrl} alt="" className="w-4 h-4 rounded-full object-cover" />
                        ) : (
                          <User className="w-3 h-3 text-indigo-400" />
                        )}
                        <span className="text-[9px] font-medium text-indigo-300/70 uppercase tracking-tight">Match for {match.persona.name.split(' ')[0]}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {match.matchName}
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {match.explanation}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Confidence
                      </p>
                      <p className="text-sm font-semibold text-indigo-300">{match.confidence || 'Medium'}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        Stage
                      </p>
                      <p className="text-sm font-semibold text-slate-300">{match.startupStage || 'Early'}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Gaps
                      </p>
                      <p className="text-sm font-semibold text-slate-300 truncate">{match.gaps || 'None'}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Matched
                      </p>
                      <p className="text-sm font-semibold text-slate-300">
                        {new Date(match.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-6">
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Next Recommended Step</h4>
                    <p className="text-xs text-slate-400 italic">&quot;{match.nextStep || 'Reach out to ecosystem lead.'}&quot;</p>
                  </div>
                  <button className="premium-button-primary py-2 text-xs mt-6">
                    Initiate Connection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
