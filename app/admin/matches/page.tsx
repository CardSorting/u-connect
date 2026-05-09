"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Loader2,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  XCircle,
} from "lucide-react";

type AdminMatch = {
  id: string;
  score: number;
  readinessScore: number;
  constraintFitScore: number;
  expertiseFitScore: number;
  relationshipFitScore: number;
  timingFitScore: number;
  outcomeScore: number;
  status: string;
  reasons?: string | null;
  risks?: string | null;
  rationale?: string | null;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  persona?: {
    id: string;
    name: string;
    title?: string | null;
    organization?: string | null;
    personaType: string;
  } | null;
};

type ReviewAction = "APPROVE" | "REJECT" | "NEEDS_INTAKE";

function safeParseList(value?: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function AdminMatchesPage() {
  const [matches, setMatches] = useState<AdminMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyMatchId, setBusyMatchId] = useState<string | null>(null);
  const [rationales, setRationales] = useState<Record<string, string>>({});

  const fetchMatches = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/matches");
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Unable to load deal flow");
      }

      setMatches(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load deal flow");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isActive = true;

    fetch("/api/admin/matches")
      .then(async (res) => {
        const data = await res.json().catch(() => null);
        if (!res.ok) {
          throw new Error(data?.error || "Unable to load deal flow");
        }
        return Array.isArray(data) ? data : [];
      })
      .then((data) => {
        if (!isActive) return;
        setMatches(data);
        setError(null);
      })
      .catch((err) => {
        if (!isActive) return;
        setError(err instanceof Error ? err.message : "Unable to load deal flow");
      })
      .finally(() => {
        if (!isActive) return;
        setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const stats = useMemo(() => {
    const averageScore = matches.length
      ? matches.reduce((total, match) => total + match.score, 0) / matches.length
      : 0;
    const highConfidence = matches.filter((match) => match.score >= 0.85).length;

    return { averageScore, highConfidence };
  }, [matches]);

  const submitReview = async (matchId: string, action: ReviewAction) => {
    setBusyMatchId(matchId);
    setError(null);

    try {
      const res = await fetch("/api/admin/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          matchId,
          action,
          rationale: rationales[matchId] || null,
        }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Review action failed");
      }

      setMatches((current) => current.filter((match) => match.id !== matchId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Review action failed");
    } finally {
      setBusyMatchId(null);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-hive-white">Deal Flow Review</h2>
          <p className="text-hive-white/60 mt-2 text-lg">
            Review high-value matches before they move into recommendations and CRM handoff.
          </p>
        </div>
        <button
          onClick={fetchMatches}
          className="bg-hive-emerald hover:bg-hive-mint text-hive-charcoal font-semibold py-2 px-5 rounded-md shadow-glow transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw size={16} />
          Refresh Queue
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard icon={<Clock size={20} />} label="Pending Reviews" value={matches.length.toString()} />
        <MetricCard icon={<Target size={20} />} label="High Confidence" value={stats.highConfidence.toString()} />
        <MetricCard icon={<ShieldCheck size={20} />} label="Average Score" value={`${Math.round(stats.averageScore * 100)}%`} />
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200 flex items-start gap-3">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Deal flow could not be loaded</p>
            <p className="text-red-200/75 mt-1">{error}</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-16 flex flex-col items-center justify-center text-hive-white/60">
          <Loader2 className="animate-spin text-hive-emerald mb-4" size={32} />
          Loading review queue...
        </div>
      ) : matches.length === 0 ? (
        <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-16 text-center">
          <div className="w-14 h-14 rounded-full bg-hive-emerald/10 border border-hive-emerald/20 text-hive-emerald flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={28} />
          </div>
          <h3 className="text-xl font-semibold text-hive-white">No matches need concierge review</h3>
          <p className="text-hive-white/60 mt-2 max-w-xl mx-auto">
            High-value matches will appear here when the matching engine flags them for a human approval pass.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {matches.map((match) => {
            const reasons = safeParseList(match.reasons);
            const risks = safeParseList(match.risks);

            return (
              <section key={match.id} className="rounded-xl border border-hive-emerald/20 bg-hive-slate overflow-hidden">
                <div className="p-6 border-b border-hive-emerald/10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {match.status.replaceAll("_", " ")}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-hive-emerald/10 text-hive-emerald border border-hive-emerald/20">
                        {Math.round(match.score * 100)}% match
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-hive-white">
                      {match.user.name} → {match.persona?.name || "Unknown ecosystem target"}
                    </h3>
                    <p className="text-sm text-hive-white/60 mt-1">
                      {match.user.email} · {match.persona?.title || "No title"} {match.persona?.organization ? `at ${match.persona.organization}` : ""}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 min-w-0 lg:min-w-[420px]">
                    <Score label="Ready" value={match.readinessScore} />
                    <Score label="Expertise" value={match.expertiseFitScore} />
                    <Score label="Timing" value={match.timingFitScore} />
                    <Score label="Outcome" value={match.outcomeScore} />
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-hive-mint/70 font-semibold mb-3 flex items-center gap-2">
                      <SlidersHorizontal size={14} />
                      Match Evidence
                    </h4>
                    <div className="space-y-3">
                      {reasons.length > 0 ? reasons.slice(0, 4).map((reason: any, index: number) => (
                        <div key={index} className="rounded-lg border border-hive-white/10 bg-hive-charcoal/50 p-3">
                          <p className="text-xs uppercase tracking-wider text-hive-emerald mb-1">
                            {String(reason.category || "evidence").replaceAll("_", " ")}
                          </p>
                          <p className="text-sm text-hive-white/75 leading-relaxed">{String(reason.evidence || "Evidence pending review.")}</p>
                        </div>
                      )) : (
                        <p className="text-sm text-hive-white/50">No structured evidence was attached to this match.</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-hive-mint/70 font-semibold mb-3 flex items-center gap-2">
                      <AlertCircle size={14} />
                      Risks And Decision Note
                    </h4>
                    <div className="space-y-3 mb-4">
                      {risks.length > 0 ? risks.slice(0, 3).map((risk: any, index: number) => (
                        <div key={index} className="rounded-lg border border-red-500/10 bg-red-500/5 p-3">
                          <p className="text-xs uppercase tracking-wider text-red-300 mb-1">
                            {String(risk.risk || "risk").replaceAll("_", " ")} · {risk.severity || "medium"}
                          </p>
                          <p className="text-sm text-hive-white/65 leading-relaxed">{String(risk.mitigation || "Confirm mitigation before approval.")}</p>
                        </div>
                      )) : (
                        <p className="text-sm text-hive-white/50">No material risks were attached to this match.</p>
                      )}
                    </div>

                    <textarea
                      value={rationales[match.id] || ""}
                      onChange={(event) => setRationales((current) => ({ ...current, [match.id]: event.target.value }))}
                      placeholder="Add a concise approval, rejection, or follow-up note..."
                      className="w-full min-h-24 rounded-lg bg-hive-charcoal border border-hive-emerald/20 text-sm text-hive-white p-3 focus:outline-none focus:border-hive-emerald placeholder:text-hive-white/30"
                    />

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <ReviewButton
                        disabled={busyMatchId === match.id}
                        onClick={() => submitReview(match.id, "APPROVE")}
                        tone="approve"
                        label="Approve"
                      />
                      <ReviewButton
                        disabled={busyMatchId === match.id}
                        onClick={() => submitReview(match.id, "NEEDS_INTAKE")}
                        tone="intake"
                        label="Needs Intake"
                      />
                      <ReviewButton
                        disabled={busyMatchId === match.id}
                        onClick={() => submitReview(match.id, "REJECT")}
                        tone="reject"
                        label="Dismiss"
                      />
                    </div>
                  </div>
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

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-hive-charcoal/60 border border-hive-white/10 p-3">
      <p className="text-[10px] uppercase tracking-widest text-hive-white/40 mb-2">{label}</p>
      <div className="flex items-end gap-2">
        <p className="text-lg font-bold text-hive-white">{Math.round(value * 100)}%</p>
        <div className="h-1.5 flex-1 bg-hive-white/10 rounded-full overflow-hidden mb-1.5">
          <div className="h-full bg-hive-emerald rounded-full" style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

function ReviewButton({
  disabled,
  onClick,
  tone,
  label,
}: {
  disabled: boolean;
  onClick: () => void;
  tone: "approve" | "intake" | "reject";
  label: string;
}) {
  const styles = {
    approve: "bg-hive-emerald hover:bg-hive-mint text-hive-charcoal",
    intake: "bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border border-amber-500/20",
    reject: "bg-red-500/10 hover:bg-red-500/20 text-red-200 border border-red-500/20",
  };
  const Icon = tone === "approve" ? ArrowUpRight : tone === "intake" ? Clock : XCircle;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${styles[tone]}`}
    >
      <Icon size={15} />
      {label}
    </button>
  );
}
