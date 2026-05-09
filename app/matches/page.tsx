'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, Sparkles, ChevronRight, Target, Clock, AlertCircle, ArrowUpRight, LayoutDashboard, Shield, Zap, TrendingUp, CheckCircle2, AlertTriangle, ShieldCheck, Lock, Unlock } from 'lucide-react';
import type { MatchResult, Persona } from '@/src/generated/client';

type MatchWithPersona = MatchResult & {
  persona?: Persona | null;
  parsedReasons?: any[];
  parsedRisks?: any[];
};

export default function MatchesPage() {
  const [matches, setMatches] = useState<MatchWithPersona[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchMatches = () => {
    fetch('/api/matches')
      .then((res) => {
        if (res.status === 401) {
          router.push('/login');
          return [];
        }
        return res.json();
      })
      .then((data) => {
        const processed = data.map((m: any) => ({
          ...m,
          parsedReasons: m.reasons ? JSON.parse(m.reasons) : [],
          parsedRisks: m.risks ? JSON.parse(m.risks) : [],
        }));
        setMatches(processed);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMatches();
  }, [router]);

  const handleReveal = async (matchId: string) => {
    try {
      const res = await fetch(`/api/matches/${matchId}/reveal`, { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        fetchMatches();
      } else {
        alert(data.error || "Revelation failed");
      }
    } catch (err) {
      console.error(err);
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
    <div className="min-h-screen bg-[#020617] text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              LaunchHive Authentic Matching V2
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">Commercialization Stack</h1>
            <p className="text-slate-400 mt-2">Evidence-based matching for the Utah deep-tech ecosystem.</p>
          </div>
          <button
            onClick={() => router.push('/personas')}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700 flex items-center gap-2 text-sm font-medium"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </button>
        </header>

        {matches.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-20 text-center backdrop-blur-sm">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 border border-slate-700">
              <Target className="w-10 h-10 text-slate-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Verified Matches</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              Complete your high-fidelity intake to verify commercial alignment.
            </p>
            <button
              onClick={() => router.push('/chat')}
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/20"
            >
              Begin Intake Protocol
            </button>
          </div>
        ) : (
          <div className="grid gap-8">
            {matches.map((match) => (
              <div key={match.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md shadow-2xl transition-all hover:border-slate-700 group">
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Persona & Overall Score */}
                  <div className="lg:w-80 p-8 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between bg-indigo-500/[0.02]">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter border ${
                          match.status === 'REVEALED' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                        }`}>
                          {match.status.replace('_', ' ')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {['REVEALED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED', 'MEETING_SCHEDULED', 'OUTCOME_RECORDED'].includes(match.status) 
                          ? match.persona?.name 
                          : `Opportunity ${match.personaId.slice(-4).toUpperCase()}`}
                      </h3>
                      <p className="text-slate-400 text-sm mb-6">
                        {['REVEALED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED', 'MEETING_SCHEDULED', 'OUTCOME_RECORDED'].includes(match.status)
                          ? match.persona?.title
                          : 'Masked Ecosystem Partner'}
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                          <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Match Score</span>
                            <span className="text-2xl font-black text-indigo-400">{Math.round(match.score * 100)}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${match.score * 100}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <button 
                        onClick={() => router.push(`/chat?conversationId=${match.conversationId}`)}
                        className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700"
                      >
                        Resume Conversation
                      </button>
                      
                      {match.status === 'REVEALED' || match.status === 'INTRO_REQUESTED' || match.status === 'INTRO_ACCEPTED' ? (
                        <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-500/20">
                          Initiate Handshake
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleReveal(match.id)}
                          disabled={match.status === 'PENDING_CONCIERGE_REVIEW'}
                          className={`w-full py-3 rounded-xl font-bold text-xs transition-all border flex items-center justify-center gap-2 ${
                            match.status === 'PENDING_CONCIERGE_REVIEW' 
                            ? 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed'
                            : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                          }`}
                        >
                          {match.status === 'PENDING_CONCIERGE_REVIEW' ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                          {match.status === 'PENDING_CONCIERGE_REVIEW' ? 'In Concierge Review' : 'Request Reveal'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Middle: Evidence & Scoring Layers */}
                  <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Layered Scores */}
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5" />
                        Scoring Stack
                      </h4>
                      <div className="grid gap-3">
                        <ScoreLayer label="Eligibility Gate" score={match.eligibilityScore} icon={<CheckCircle2 className="w-3 h-3" />} />
                        <ScoreLayer label="Readiness Gate" score={match.readinessScore || 0} icon={<ShieldCheck className="w-3 h-3" />} />
                        <ScoreLayer label="Constraint Fit" score={match.constraintFitScore} icon={<Zap className="w-3 h-3" />} />
                        <ScoreLayer label="Expertise Fit" score={match.expertiseFitScore || 0} icon={<Sparkles className="w-3 h-3" />} />
                        <ScoreLayer label="Relationship Fit" score={match.relationshipFitScore || 0} icon={<ShieldCheck className="w-3 h-3" />} />
                        <ScoreLayer label="Timing Fit" score={match.timingFitScore || 0} icon={<Clock className="w-3 h-3" />} />
                        <ScoreLayer label="Outcome Prob" score={match.outcomeScore} icon={<TrendingUp className="w-3 h-3" />} />
                      </div>
                    </div>

                    {/* Match Reasons */}
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Match Evidence
                      </h4>
                      <div className="space-y-4">
                        {match.parsedReasons?.map((reason, i) => (
                          <div key={i} className="group/reason">
                            <div className="flex items-start gap-3">
                              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/reason:scale-150 transition-transform" />
                              <div>
                                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter mb-0.5">{reason.category.replace('_', ' ')}</p>
                                <p className="text-xs text-slate-300 leading-relaxed italic">"{reason.evidence}"</p>
                              </div>
                            </div>
                          </div>
                        )) || <p className="text-xs text-slate-500 italic">No structured evidence available.</p>}
                      </div>
                    </div>

                    {/* Risks & Mitigations */}
                    <div className="md:col-span-2 pt-6 border-t border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Strategic Risks & Mitigations
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {match.parsedRisks?.map((risk, i) => (
                          <div key={i} className="p-3 rounded-xl bg-red-500/[0.03] border border-red-500/10 flex gap-3 items-start">
                            <AlertCircle className={`w-4 h-4 mt-0.5 ${risk.severity === 'high' ? 'text-red-400' : 'text-amber-400'}`} />
                            <div>
                              <p className="text-[10px] font-bold text-slate-200 uppercase tracking-tighter">{risk.risk.replace('_', ' ')}</p>
                              <p className="text-[11px] text-slate-400 mt-1 mb-2 leading-relaxed">{risk.mitigation}</p>
                            </div>
                          </div>
                        )) || <p className="text-xs text-slate-500 italic">No strategic risks identified.</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ScoreLayer({ label, score, icon }: { label: string; score: number; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between group/layer">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-slate-500 group-hover/layer:bg-indigo-500/20 group-hover/layer:text-indigo-400 transition-colors">
          {icon}
        </div>
        <span className="text-[11px] font-medium text-slate-400 group-hover/layer:text-slate-200 transition-colors">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
          <div className="h-full bg-slate-600 rounded-full" style={{ width: `${score * 100}%` }} />
        </div>
        <span className="text-[11px] font-mono text-slate-500 w-8 text-right">{Math.round(score * 100)}%</span>
      </div>
    </div>
  );
}
