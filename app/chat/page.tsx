'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Send, User, Bot, Loader2, Sparkles, RefreshCcw, ChevronLeft } from 'lucide-react';
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
          
          // If brand new conversation with a persona, add a greeting
          if (data.messages.length === 0 && data.persona) {
            const greeting = `Hi ${data.persona.name.split(' ')[0]} — I’ll help you find commercialization matches based on your ${data.persona.industries.split(',')[0]} background. Before I recommend anything, can I confirm whether you prefer advisory, fractional, or full-time opportunities?`;
            setMessages([{ role: 'assistant', content: greeting }]);
            // Save initial greeting
            fetch('/api/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                conversationId,
                role: 'assistant',
                content: greeting
              })
            });
          } else if (data.messages.length === 0) {
            // New blank chat
             const greeting = "Hi! I'm your LaunchHive concierge. How can I help you today? Are you a researcher, founder, or looking for operator roles?";
             setMessages([{ role: 'assistant', content: greeting }]);
             fetch('/api/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                conversationId,
                role: 'assistant',
                content: greeting
              })
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

      // Stream finished, parse matches if any
      let matches = null;
      try {
        const jsonMatch = assistantContent.match(/<MATCH_JSON>([\s\S]*?)<\/MATCH_JSON>/);
        if (jsonMatch && jsonMatch[1]) {
          const parsed = JSON.parse(jsonMatch[1].trim());
          matches = parsed.matches;
        }
      } catch (e) {
        console.error('Failed to parse matches from assistant response', e);
      }

      // Save assistant message (server will parse matches from content)
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="h-16 border-b border-[var(--border)] px-6 flex items-center justify-between bg-black/20 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push('/personas')}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold tracking-tight">LaunchHive Concierge</h1>
            {persona && (
              <p className="text-[10px] text-indigo-400 font-medium uppercase tracking-widest">
                Acting as {persona.name}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => router.push('/matches')}
            className="premium-button-secondary py-1.5 px-4 text-xs"
          >
            View Matches
          </button>
        </div>
      </header>

      {/* Chat Area */}
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
                  persona?.avatarUrl ? (
                    <img src={persona.avatarUrl} alt={persona.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-6 h-6" />
                  )
                )}
              </div>
              
              <div className={`flex flex-col max-w-[80%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`px-5 py-3 rounded-2xl border ${
                  m.role === 'assistant'
                    ? 'bg-slate-900/50 border-slate-800 text-slate-200'
                    : 'bg-indigo-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {m.content.replace(/<MATCH_JSON>[\s\S]*?<\/MATCH_JSON>/, '').trim()}
                  </p>
                  
                  {/* JSON Match Detection Feedback */}
                  {m.role === 'assistant' && m.content.includes('<MATCH_JSON>') && (
                    <div className="mt-4 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">Matches Generated</p>
                        <p className="text-[10px] text-slate-400">Analysis complete. Results saved to your dashboard.</p>
                      </div>
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
              <div className="px-5 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400 italic text-sm">
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">
                  {messages.length < 6 ? 'Learning about you' : 
                   messages.length < 10 ? 'Reviewing your profile' : 
                   messages.some(m => m.content.includes('<MATCH_JSON>')) ? 'Explaining fit' : 'Finding matches'}
                </p>
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-[var(--border)] bg-black/40 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isLoading ? "Hermes is typing..." : "Type your response..."}
            disabled={isLoading}
            className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-slate-600 shadow-2xl"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <p className="text-center mt-4 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
          Powered by Hermes Agent Runtime • Local Development
        </p>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    }>
      <ChatContent />
    </Suspense>
  );
}