'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Send, User, Bot, Loader2, Sparkles, RefreshCcw, ChevronLeft, ShieldCheck, AlertTriangle, ShieldAlert, CheckCircle2, Info, FastForward, XCircle, Eye, Zap, BookOpen, Target, UserCheck } from 'lucide-react';
import { readOpenAIStream } from '@/src/utils/openAIStream';
import { ClientChatMessage } from '@/src/domain/chat/types';
import type { Persona } from '@/src/generated/client';

function ChatContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const conversationId = searchParams.get('conversationId');
  
  const [messages, setMessages] = useState<ClientChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [persona, setPersona] = useState<Persona | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!conversationId) {
      router.push('/personas');
      return;
    }

    fetch(`/api/conversations/${conversationId}`)
      .then(res => {
        if (res.status === 401) {
          router.push('/login');
          return null;
        }
        if (!res.ok) {
          router.push('/personas');
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (data) {
          setMessages(data.messages.map((m: any) => ({ role: m.role, content: m.content })));
          setPersona(data.persona);
          
          if (data.messages.length === 0) {
             const greeting = "Forensic Concierge online. I am auditing your commercialization alpha for ecosystem alignment. What is the primary technical or business blocker you are facing today?";
             setMessages([{ role: 'assistant', content: greeting }]);
             fetch('/api/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ conversationId, role: 'assistant', content: greeting })
            });
          }
        }
        setIsInitializing(false);
      });
  }, [conversationId, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ClientChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, conversationId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Chat request failed');
      }

      let assistantContent = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      await readOpenAIStream(response, (chunk) => {
        assistantContent += chunk;
        setMessages(prev => {
          const last = prev[prev.length - 1];
          if (last && last.role === 'assistant') {
            return [...prev.slice(0, -1), { ...last, content: assistantContent }];
          }
          return prev;
        });
      });

      // Handle Directives
      if (assistantContent.includes('[DIRECTIVE: TRIGGER_MATCHING]') || assistantContent.includes('[DIRECTIVE: SHORT_CIRCUIT]')) {
        fetch('/api/matches/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ conversationId }),
        });
      }

      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId,
          role: 'assistant',
          content: assistantContent
        })
      });

    } catch (error: any) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: error.message || 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#020617] text-slate-200">
      <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900/40 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push('/dashboard')}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold tracking-tight text-white flex items-center gap-2 text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              Forensic Concierge
            </h1>
            {persona && (
              <p className="text-[10px] text-indigo-400 font-medium uppercase tracking-widest">
                Targeting: {persona.name}
              </p>
            )}
          </div>
        </div>
        <button 
          onClick={() => router.push('/matches')}
          className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all"
        >
          View Matches
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden ${
                m.role === 'assistant' 
                  ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}>
                {m.role === 'assistant' ? (
                  <Bot className="w-6 h-6" />
                ) : (
                  <User className="w-6 h-6" />
                )}
              </div>
              
              <div className={`flex flex-col max-w-[80%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`px-5 py-3 rounded-2xl border ${
                  m.role === 'assistant'
                    ? 'bg-slate-900/60 border-slate-800 text-slate-200'
                    : 'bg-indigo-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {m.content
                      .replace(/\[STATUS:.*?\]/g, '')
                      .replace(/\[DIRECTIVE:.*?\]/g, '')
                      .replace(/\[AUDIT_NOTE:.*?\]/g, '')
                      .replace(/\[PREVIEW:.*?\]/g, '')
                      .trim()}
                  </p>
                  
                  {/* Forensic Administrative Signals */}
                  {m.role === 'assistant' && (
                    <div className="space-y-3 mt-3">
                      {m.content.includes('[DIRECTIVE: MATCH_ANTICIPATION:') && (
                        <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-3">
                          <Target className="w-4 h-4 text-indigo-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">Predictive Alignment</p>
                            <p className="text-[10px] text-slate-400 leading-tight">
                              Trending toward role: <span className="text-indigo-200 font-bold">{m.content.match(/\[DIRECTIVE: MATCH_ANTICIPATION: (.*?)\]/)?.[1]}</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {m.content.includes('[STATUS: CONCIERGE_HANDOVER]') && (
                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center gap-3">
                          <UserCheck className="w-4 h-4 text-purple-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">Concierge Handover</p>
                            <p className="text-[10px] text-slate-400 leading-tight">High-value complexity detected. Admin oversight initialized.</p>
                          </div>
                        </div>
                      )}

                      {m.content.includes('[DIRECTIVE: NURTURE]') && (
                        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Readiness Roadmap</p>
                            <p className="text-[10px] text-slate-400 leading-tight">Strategic gaps identified. Roadmap generated below.</p>
                          </div>
                        </div>
                      )}

                      {m.content.includes('[DIRECTIVE: SHORT_CIRCUIT]') && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                          <FastForward className="w-4 h-4 text-amber-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">Velocity Acceleration</p>
                            <p className="text-[10px] text-slate-400 leading-tight">High fidelity detected. Fast-tracking to matches.</p>
                          </div>
                        </div>
                      )}

                      {m.content.includes('[STATUS: AUDIT_PASSED]') && (
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Audit Complete</p>
                            <p className="text-[10px] text-slate-400 leading-tight">Forensic intake successful. Pipeline ready.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 animate-in fade-in duration-300">
               <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
              <div className="px-5 py-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 italic text-sm">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
                  Forensic audit in progress...
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-6 border-t border-slate-800 bg-slate-900/40 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isLoading ? "Auditor is analyzing alpha..." : "Type your evidence or blockers..."}
            disabled={isLoading}
            className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-slate-600 shadow-2xl"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
      <ChatContent />
    </Suspense>
  );
}