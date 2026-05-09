'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Rocket, LayoutDashboard, Users, Target, MessageSquare, LogOut, Menu, X, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  const isLanding = pathname === '/';
  const navLinks = [
    { name: 'Home', href: '/', icon: Rocket },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Discovery', href: '/personas', icon: Users },
    { name: 'Matches', href: '/matches', icon: Target },
  ];

  const startNewIntake = async () => {
    const res = await fetch('/api/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personaId: undefined }),
    });

    if (res.ok) {
      const conversation = await res.json();
      router.push(`/chat?conversationId=${conversation.id}`);
      setIsOpen(false);
    } else {
      router.push('/login');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-black text-white tracking-tighter text-lg">LaunchHive</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side: User / Logout */}
          <div className="hidden md:flex items-center gap-4 border-l border-white/5 pl-6 ml-2">
            {isLanding ? (
              <Link href="/login" className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-500 transition-colors">
                Sign In
              </Link>
            ) : (
              <>
                <button
                  onClick={startNewIntake}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-500 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Intake
                </button>
                <button 
                  onClick={async () => {
                    await fetch('/api/auth/logout', { method: 'POST' });
                    window.location.href = '/';
                  }}
                  className="p-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-500/5 transition-all"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/90 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold flex items-center gap-3 transition-all ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-white/5">
              {isLanding ? (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-3 rounded-xl text-white bg-emerald-600 font-bold flex items-center gap-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  Sign In
                </Link>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={startNewIntake}
                    className="w-full px-4 py-3 rounded-xl text-white bg-emerald-600 font-bold flex items-center gap-3"
                  >
                    <Plus className="w-5 h-5" />
                    New Intake
                  </button>
                  <button
                    onClick={async () => {
                      await fetch('/api/auth/logout', { method: 'POST' });
                      window.location.href = '/';
                    }}
                    className="w-full px-4 py-3 rounded-xl text-red-400 bg-red-500/5 font-bold flex items-center gap-3"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
