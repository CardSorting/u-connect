import React from "react";
import {
  Bell,
  CheckCircle2,
  CircleAlert,
  Database,
  KeyRound,
  Lock,
  Settings,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const configGroups = [
  {
    title: "Core Runtime",
    icon: Settings,
    items: [
      { label: "Hermes API URL", configured: Boolean(process.env.HERMES_API_BASE_URL), env: "HERMES_API_BASE_URL" },
      { label: "Hermes API Key", configured: Boolean(process.env.HERMES_API_KEY), env: "HERMES_API_KEY" },
      { label: "Hermes Model", configured: Boolean(process.env.HERMES_MODEL), env: "HERMES_MODEL" },
      { label: "Database URL", configured: Boolean(process.env.DATABASE_URL), env: "DATABASE_URL" },
    ],
  },
  {
    title: "Integrations",
    icon: Database,
    items: [
      { label: "Affinity API Key", configured: Boolean(process.env.AFFINITY_API_KEY), env: "AFFINITY_API_KEY" },
      { label: "Affinity Deal Flow List", configured: Boolean(process.env.AFFINITY_DEAL_FLOW_LIST_ID), env: "AFFINITY_DEAL_FLOW_LIST_ID" },
      { label: "Squarespace API Key", configured: Boolean(process.env.SQUARESPACE_API_KEY), env: "SQUARESPACE_API_KEY" },
    ],
  },
  {
    title: "Operator Controls",
    icon: UserCog,
    items: [
      { label: "Human review queue", configured: true, env: "PENDING_CONCIERGE_REVIEW" },
      { label: "Reveal audit log", configured: true, env: "RevealAuditLog" },
      { label: "Trust-tier model", configured: true, env: "ReputationProfile" },
    ],
  },
];

export default function AdminSettingsPage() {
  const configured = configGroups.flatMap((group) => group.items).filter((item) => item.configured).length;
  const total = configGroups.flatMap((group) => group.items).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-hive-white">Platform Settings</h2>
          <p className="text-hive-white/60 mt-2 text-lg">
            Configuration status for the concierge, matching engine, audit model, and external handoffs.
          </p>
        </div>
        <div className="rounded-lg border border-hive-emerald/20 bg-hive-slate px-4 py-3 text-sm text-hive-white/70 flex items-center gap-3">
          <ShieldCheck className="text-hive-emerald" size={18} />
          <span>{configured}/{total} checks ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard icon={<Lock size={20} />} label="Access Model" value="Session" />
        <MetricCard icon={<Bell size={20} />} label="Review Mode" value="Human-in-loop" />
        <MetricCard icon={<KeyRound size={20} />} label="Secrets Source" value=".env" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {configGroups.map((group) => {
          const Icon = group.icon;
          return (
            <section key={group.title} className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-hive-emerald/10 border border-hive-emerald/20 text-hive-emerald flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-hive-white">{group.title}</h3>
              </div>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.env} className="rounded-lg border border-hive-white/10 bg-hive-charcoal/60 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-hive-white truncate">{item.label}</p>
                        <p className="text-xs text-hive-white/40 mt-0.5 font-mono truncate">{item.env}</p>
                      </div>
                      <StatusIcon configured={item.configured} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-6">
        <h3 className="text-xl font-semibold text-hive-white mb-2">Operational Defaults</h3>
        <p className="text-sm text-hive-white/60 leading-relaxed max-w-3xl">
          LaunchHive currently runs as a local-development MVP with session-based access, server-side Prisma data access,
          deterministic matching fallbacks, and explicit not-configured states for external systems. Missing API keys do not
          break the user journey; they mark Affinity or Squarespace handoffs as not configured.
        </p>
      </section>
    </div>
  );
}

function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-5">
      <div className="text-hive-emerald mb-3">{icon}</div>
      <p className="text-sm text-hive-white/60">{label}</p>
      <p className="text-2xl font-bold text-hive-white mt-1">{value}</p>
    </div>
  );
}

function StatusIcon({ configured }: { configured: boolean }) {
  return configured ? (
    <CheckCircle2 className="text-hive-emerald shrink-0" size={18} />
  ) : (
    <CircleAlert className="text-amber-300 shrink-0" size={18} />
  );
}
