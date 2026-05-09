'use client';

import Link from 'next/link';
import { Rocket, Globe, Mail, Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Discovery Personas', href: '/personas' },
        { name: 'Verified Matches', href: '/matches' },
        { name: 'AI Concierge', href: '/chat' },
      ],
    },
    {
      title: 'Ecosystem',
      links: [
        { name: 'University of Utah', href: '#' },
        { name: 'BYU Research', href: '#' },
        { name: 'USU Innovation', href: '#' },
        { name: 'Utah Startups', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Risk Protocol', href: '#' },
        { name: 'Ecosystem Map', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Compliance', href: '#' },
      ],
    },
  ];

  const resetDemo = async () => {
    if (confirm('Are you sure you want to reset all demo data? This will clear sessions, chats, and matches.')) {
      await fetch('/api/admin/reset', { method: 'POST' });
      window.location.reload();
    }
  };

  return (
    <footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl text-white tracking-tighter">LaunchHive</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-medium">
              Bridging the gap between breakthrough research and commercial reality in the Utah deep-tech corridor. Powered by Hermes Intelligence.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Globe className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Mail className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Shield className="w-5 h-5" />} href="#" />
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-500 hover:text-emerald-400 transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] text-slate-600 uppercase font-black tracking-[0.2em]">
            <span>© 2026 LaunchHive Protocol</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-800" />
            <span>Built in Salt Lake City</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Substrate Active</span>
            </div>
            <button 
              onClick={resetDemo}
              className="text-[10px] text-slate-500 hover:text-white uppercase font-bold tracking-widest px-3 py-1 rounded border border-white/5 hover:bg-white/5 transition-all"
            >
              Reset Environment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link 
      href={href} 
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all"
    >
      {icon}
    </Link>
  );
}
