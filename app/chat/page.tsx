'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Send, User, Bot, Loader2, Sparkles, RefreshCcw, ChevronLeft, ChevronRight, ShieldCheck, AlertTriangle, ShieldAlert, CheckCircle2, Info, FastForward, XCircle, Eye, Zap, BookOpen, Target, UserCheck, Compass, Paperclip } from 'lucide-react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const msg = `[User uploaded resume: ${file.name}]`;
      setInput(msg);
    }
  };

  const currentStepMatch = messages
    .filter(m => m.role === 'assistant')
    .map(m => m.content.match(/\[STATUS: SCREENING_STEP_(\d)\]/)?.[1])
    .filter(Boolean)
    .pop();
  
  const currentStep = currentStepMatch ? parseInt(currentStepMatch) : 1;

  const wizardSteps = [
    { num: 1, label: "Start", helper: "Resume or LinkedIn" },
    { num: 2, label: "Role", helper: "Your best-fit category" },
    { num: 3, label: "Dig Deeper", helper: "Stage, proof, blockers" },
    { num: 4, label: "Goal", helper: "The right next ask" },
    { num: 5, label: "Review", helper: "Confirm and match" },
  ];

  const currentStepLabel = wizardSteps.find((step) => step.num === currentStep)?.label ?? "Start";

  const quickPrompts = [
    "I'm at the prototype stage and need help finding the right first pilot partner.",
    "The biggest blocker is customer discovery. I need introductions to people who can validate demand.",
    "There may be regulatory or IP considerations, but I need help understanding the path.",
  ];

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
             const greeting = "Welcome to LaunchHive. I'm your Discovery Concierge, and I'll keep this short and practical. To get started, upload your resume with the paperclip or paste your LinkedIn profile link so I can understand your background without making you retype it. [STATUS: SCREENING_STEP_1]";
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

      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId,
          role: 'assistant',
          content: assistantContent
        })
      });

      // Handle Directives
      if (assistantContent.includes('[DIRECTIVE: TRIGGER_MATCHING]') || assistantContent.includes('[DIRECTIVE: SHORT_CIRCUIT]')) {
        const matchRunRes = await fetch('/api/matches/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ conversationId }),
        });

        const matchRunData = await matchRunRes.json().catch(() => null);
        const integrationCopy = matchRunData?.integrations
          ? ` Affinity: ${matchRunData.integrations.affinity}. Squarespace: ${matchRunData.integrations.squarespace}.`
          : '';
        const matchMessage = matchRunRes.ok && matchRunData?.success
          ? `Matches generated and queued for review.${integrationCopy} [STATUS: AUDIT_PASSED]`
          : matchRunRes.ok
            ? `I need one more prep pass before revealing matches. ${matchRunData?.recommendations?.join(' ') || 'Please clarify your exact ask and supporting evidence.'} [STATUS: SCREENING_STEP_3]`
            : `I could not run matching yet: ${matchRunData?.error || 'matching service unavailable'}. [STATUS: SCREENING_STEP_5]`;

        setMessages(prev => [...prev, { role: 'assistant', content: matchMessage }]);
        await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            conversationId,
            role: 'assistant',
            content: matchMessage
          })
        });
      }

    } catch (error: any) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: error.message || 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-black text-slate-200">
      <header className="h-16 border-b border-white/5 px-6 flex items-center justify-between bg-black/60 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">
            <button onClick={() => router.push('/dashboard')} className="flex items-center gap-1 hover:text-white transition-colors group">
              <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Dashboard
            </button>
            <ChevronRight className="w-3 h-3 text-slate-700" />
            <span className="text-emerald-400 flex items-center gap-1">
              <Compass className="w-3 h-3" />
              Concierge
            </span>
          </div>
          <div className="w-px h-4 bg-white/10 mx-2 hidden sm:block"></div>
          <div>
            <h1 className="font-bold tracking-tight text-white flex items-center gap-2 text-sm sm:text-base">
              <Compass className="w-4 h-4 text-emerald-400" />
              Discovery Concierge
            </h1>
            {persona && (
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                Journey: {persona.name}
              </p>
            )}
          </div>
        </div>
        <button 
          onClick={() => router.push('/matches')}
          className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all"
        >
          View Matches
        </button>
      </header>

      {/* Global Wizard Navigation */}
      <div className="bg-slate-900/60 border-b border-white/5 py-3 px-6 shrink-0 z-10 backdrop-blur-md relative shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Guided Intake</p>
              <p className="text-sm font-semibold text-white">Current step: <span className="text-emerald-300">{currentStepLabel}</span></p>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Answer one question at a time. LaunchHive uses this to find better matches and prepare the CRM handoff.
            </p>
          </div>
          <div className="flex items-center justify-between gap-2 relative">
            {/* Background Line */}
            <div className="absolute top-3 left-0 w-full h-0.5 bg-slate-800 -z-10 -translate-y-1/2" />
            
            {wizardSteps.map((step) => {
              const isPast = currentStep > step.num;
              const isCurrent = currentStep === step.num;
              
              return (
                <div key={step.num} className="flex flex-col items-center flex-1 relative group">
                  {/* Active Line Fill */}
                  {step.num !== 1 && (
                    <div 
                      className="absolute top-3 right-1/2 w-full h-0.5 -translate-y-1/2 -z-10 transition-colors duration-700 ease-in-out bg-emerald-500"
                      style={{ opacity: currentStep >= step.num ? 1 : 0 }}
                    />
                  )}
                  
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all duration-500 shadow-sm ${
                    isPast ? 'bg-emerald-500 border-emerald-500 text-white' :
                    isCurrent ? 'bg-black border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)] scale-110' :
                    'bg-slate-900 border-slate-700 text-slate-500'
                  }`}>
                    {isPast ? <CheckCircle2 className="w-3 h-3" /> : step.num}
                  </div>
                  <span className={`text-[9px] mt-1.5 font-bold uppercase tracking-wider transition-colors duration-500 ${
                    isCurrent ? 'text-emerald-400' : 
                    isPast ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {step.label}
                  </span>
                  <span className="hidden sm:block text-[9px] text-slate-600 mt-0.5 text-center leading-tight max-w-24">
                    {step.helper}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_280px] gap-6">
          <div className="space-y-6">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden ${
                m.role === 'assistant' 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
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
                    : 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {m.content
                      .replace(/\[STATUS:.*?\]/g, '')
                      .replace(/\[DIRECTIVE:.*?\]/g, '')
                      .replace(/\[AUDIT_NOTE:.*?\]/g, '')
                      .replace(/\[PREVIEW:.*?\]/g, '')
                      .trim()}
                  </p>
                  
                  {/* Demo-Optimized Signals */}
                  {m.role === 'assistant' && (
                    <div className="space-y-3 mt-3">
                      {m.content.match(/\[STATUS: SCREENING_STEP_(\d)\]/) && (() => {
                        const step = m.content.match(/\[STATUS: SCREENING_STEP_(\d)\]/)?.[1];
                        const labels: Record<string, string> = {
                          "1": "Professional Grounding",
                          "2": "Identity & Categorization",
                          "3": "Deep Investigation",
                          "4": "Ecosystem Synergy",
                          "5": "Review & Handoff"
                        };
                        const label = step ? labels[step] : "Onboarding";
                        
                        return (
                          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-4 items-start w-full max-w-sm">
                            <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <div className="flex-1 w-full">
                              <div className="flex justify-between items-end mb-1">
                                <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Onboarding Phase</p>
                                <p className="text-[10px] font-mono text-blue-400">{step}/5</p>
                              </div>
                              <p className="text-xs text-slate-200 font-medium mb-3">{label}</p>
                              <div className="w-full h-1.5 bg-blue-900/40 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out" 
                                  style={{ width: `${(parseInt(step || '1') / 5) * 100}%` }} 
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                      {m.content.includes('[PREVIEW:') && (
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                          <Eye className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Opportunity Detected</p>
                            <p className="text-[10px] text-slate-400 leading-tight">
                              Initial fit identified: <span className="text-emerald-200 font-bold">{m.content.match(/\[PREVIEW: (.*?)\]/)?.[1]}</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {m.content.includes('[DIRECTIVE: SHORT_CIRCUIT]') && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                          <FastForward className="w-4 h-4 text-amber-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">Discovery Accelerated</p>
                            <p className="text-[10px] text-slate-400 leading-tight">Matching protocol fast-tracked for maximum demo velocity.</p>
                          </div>
                        </div>
                      )}

                      {m.content.includes('[STATUS: AUDIT_PASSED]') && (
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Alignment Verified</p>
                            <p className="text-[10px] text-slate-400 leading-tight">Matches are now live in your dashboard.</p>
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
               <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
              <div className="px-5 py-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 italic text-sm">
                <span className="flex items-center gap-2">
                  <Compass className="w-3 h-3 text-emerald-400 animate-pulse" />
                  Mapping Utah deep-tech alignment...
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
          </div>

          <aside className="hidden lg:block space-y-4 sticky top-4 self-start">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Dig Deeper Checklist</p>
              <div className="space-y-3 text-xs text-slate-400">
                <ChecklistItem active={currentStep >= 1} label="Background source captured" />
                <ChecklistItem active={currentStep >= 2} label="Role category confirmed" />
                <ChecklistItem active={currentStep >= 3} label="Stage, blocker, proof, risk" />
                <ChecklistItem active={currentStep >= 4} label="One clear ecosystem ask" />
                <ChecklistItem active={currentStep >= 5} label="Summary ready for handoff" />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Helpful Examples</p>
              <div className="space-y-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setInput(prompt)}
                    className="w-full rounded-xl border border-slate-800 bg-black/30 p-3 text-left text-xs leading-relaxed text-slate-300 hover:border-emerald-500/30 hover:text-white transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="p-6 border-t border-slate-800 bg-slate-900/40 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isLoading ? "Onboarding in progress..." : "Share your background or link your LinkedIn..."}
            disabled={isLoading}
            className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl py-4 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-white placeholder:text-slate-600 shadow-2xl"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

function ChecklistItem({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 className={`w-4 h-4 ${active ? 'text-emerald-400' : 'text-slate-700'}`} />
      <span className={active ? 'text-slate-200' : 'text-slate-500'}>{label}</span>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ChatContent />
    </Suspense>
  );
}
