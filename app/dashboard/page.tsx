'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, 
  MessageSquare, 
  Target, 
  ArrowRight, 
  Zap, 
  ChevronRight, 
  Plus,
  Clock,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import type { MatchResult, Persona, Conversation } from '@/src/generated/client';

type MatchWithPersona = MatchResult & {
  persona?: Persona | null;
};

type ConversationWithPersona = Conversation & {
  persona?: Persona | null;
};

export default function DashboardPage() {
  const [matches, setMatches] = useState<MatchWithPersona[]>([]);
  const [conversations, setConversations] = useState<ConversationWithPersona[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [matchesRes, convsRes] = await Promise.all([
          fetch('/api/matches'),
          fetch('/api/conversations')
        ]);

        if (matchesRes.status === 401 || convsRes.status === 401) {
          router.push('/login');
          return;
        }

        const [matchesData, convsData] = await Promise.all([
          matchesRes.json(),
          convsRes.json()
        ]);

        setMatches(matchesData);
        setConversations(convsData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 p-6 md:p-12 lg:p-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/5">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="font-black text-white tracking-tighter text-lg uppercase">LaunchHive</span>
          </div>
          <button 
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              router.push('/');
            }}
            className="text-xs font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest"
          >
            Sign Out
          </button>
        </div>

        <header className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-4 text-slate-500">
              <span>LaunchHive</span>
              <ChevronRight className="w-4 h-4 text-slate-700" />
              <span className="text-emerald-400">Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2 uppercase">Ecosystem Hub</h1>
            <p className="text-slate-500 font-medium">Your centralized commercialization mission control.</p>
          </div>
          <button 
            onClick={startNewIntake}
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 group"
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            New Discovery
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Section 1: Chat Sessions (Intakes) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Recent Discovery Chats</h2>
            </div>
            
            <div className="space-y-4">
              {conversations.length === 0 ? (
                <div className="p-12 rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/20 text-center">
                  <p className="text-slate-500 font-medium">No chats found. Your first discovery session will appear here.</p>
                </div>
              ) : (
                conversations.map((conv) => (
                  <div 
                    key={conv.id} 
                    onClick={() => router.push(`/chat?conversationId=${conv.id}`)}
                    className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-all cursor-pointer group flex items-center justify-between shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                          {conv.title || 'Untitled Discovery'}
                        </h4>
                        <p className="text-sm text-slate-500">Last activity {new Date(conv.updatedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Section 2: Verified Matches */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Verified Matches</h2>
            </div>

            <div className="space-y-4">
              {matches.length === 0 ? (
                <div className="p-12 rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/20 text-center">
                  <p className="text-slate-500 font-medium">Your verified matches will appear here after your first audit pass.</p>
                </div>
              ) : (
                matches.map((match) => (
                  <div 
                    key={match.id}
                    onClick={() => router.push('/matches')}
                    className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-all cursor-pointer group shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                          {Math.round(match.score * 100)}% Confidence
                        </span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-tighter ${
                        match.status === 'REVEALED' ? 'text-emerald-400' : 'text-slate-600'
                      }`}>
                        {match.status.replace('_', ' ')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {['REVEALED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED'].includes(match.status) ? match.persona?.name : 'Secured Ecosystem Fit'}
                    </h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      {['REVEALED', 'INTRO_REQUESTED', 'INTRO_ACCEPTED'].includes(match.status) ? match.persona?.title : 'Masked Partner'}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
