"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Loader2,
  Megaphone,
  RefreshCw,
  Search,
  Shield,
  User,
  Users,
} from "lucide-react";
import type { Persona } from "@/src/generated/client";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  operator: Briefcase,
  student: GraduationCap,
  founder: Briefcase,
  advisor: Megaphone,
  executive: Shield,
  mentor: Megaphone,
};

export default function AdminPersonasPage() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPersonas = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/personas");
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Unable to load personas");
      setPersonas(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load personas");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isActive = true;

    fetch("/api/personas")
      .then(async (res) => {
        const data = await res.json().catch(() => null);
        if (!res.ok) throw new Error(data?.error || "Unable to load personas");
        return Array.isArray(data) ? data : [];
      })
      .then((data) => {
        if (!isActive) return;
        setPersonas(data);
        setError(null);
      })
      .catch((err) => {
        if (!isActive) return;
        setError(err instanceof Error ? err.message : "Unable to load personas");
      })
      .finally(() => {
        if (!isActive) return;
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const filteredPersonas = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return personas;

    return personas.filter((persona) => {
      const searchable = [
        persona.name,
        persona.title,
        persona.organization,
        persona.personaType,
        persona.background,
        persona.skills,
        persona.industries,
        persona.goals,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [personas, query]);

  const personaTypes = useMemo(() => new Set(personas.map((persona) => persona.personaType)).size, [personas]);
  const highValueCount = personas.filter((persona) => persona.isHighValue).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-hive-white">Ecosystem Directory</h2>
          <p className="text-hive-white/60 mt-2 text-lg">
            Review the operators, mentors, executives, and subject-matter experts available for matching.
          </p>
        </div>
        <button
          onClick={loadPersonas}
          className="bg-hive-emerald hover:bg-hive-mint text-hive-charcoal font-semibold py-2 px-5 rounded-md shadow-glow transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw size={16} />
          Refresh Directory
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard icon={<Users size={20} />} label="Directory Profiles" value={personas.length.toString()} />
        <MetricCard icon={<Briefcase size={20} />} label="Profile Types" value={personaTypes.toString()} />
        <MetricCard icon={<Shield size={20} />} label="Concierge Review" value={highValueCount.toString()} />
      </div>

      <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-hive-white/40" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, role, industry, skill, or goal..."
            className="w-full rounded-lg bg-hive-charcoal border border-hive-emerald/20 text-hive-white pl-10 pr-4 py-3 focus:outline-none focus:border-hive-emerald placeholder:text-hive-white/30"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200 flex items-start gap-3">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Directory could not be loaded</p>
            <p className="text-red-200/75 mt-1">{error}</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-16 flex flex-col items-center justify-center text-hive-white/60">
          <Loader2 className="animate-spin text-hive-emerald mb-4" size={32} />
          Loading ecosystem directory...
        </div>
      ) : filteredPersonas.length === 0 ? (
        <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-16 text-center">
          <div className="w-14 h-14 rounded-full bg-hive-emerald/10 border border-hive-emerald/20 text-hive-emerald flex items-center justify-center mx-auto mb-5">
            <User size={28} />
          </div>
          <h3 className="text-xl font-semibold text-hive-white">No profiles found</h3>
          <p className="text-hive-white/60 mt-2">Adjust the search or seed more personas into the directory.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredPersonas.map((persona) => {
            const Icon = iconMap[persona.personaType?.toLowerCase()] || User;
            const industries = persona.industries.split(",").map((industry) => industry.trim()).filter(Boolean).slice(0, 3);

            return (
              <section key={persona.id} className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hive-emerald/10 border border-hive-emerald/20 flex items-center justify-center text-hive-emerald shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-hive-white truncate">{persona.name}</h3>
                      {persona.isHighValue && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Review
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-hive-emerald">{persona.title || "No title"}</p>
                    <p className="text-xs text-hive-white/45 mt-1 uppercase tracking-wider">{persona.personaType}</p>
                  </div>
                </div>

                <p className="text-sm text-hive-white/65 leading-relaxed mt-5 line-clamp-3">{persona.background}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {industries.map((industry) => (
                    <span key={industry} className="px-2.5 py-1 rounded-md bg-hive-charcoal border border-hive-white/10 text-xs text-hive-white/70">
                      {industry}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                  <ProfileSignal label="Capacity" value={`${persona.currentLoad}/${persona.capacity}`} />
                  <ProfileSignal label="Availability" value={persona.availability || "Unknown"} />
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-5">
      <div className="text-hive-emerald mb-3">{icon}</div>
      <p className="text-sm text-hive-white/60">{label}</p>
      <p className="text-3xl font-bold text-hive-white mt-1">{value}</p>
    </div>
  );
}

function ProfileSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-hive-charcoal/60 border border-hive-white/10 p-3">
      <p className="text-[10px] uppercase tracking-widest text-hive-white/40 mb-1">{label}</p>
      <p className="text-hive-white/80 truncate flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-hive-emerald shrink-0" />
        {value}
      </p>
    </div>
  );
}
