import React from "react";
import { Activity, CheckCircle2, CircleAlert, Database, RefreshCw, SquareStack } from "lucide-react";

const integrations = [
  {
    name: "Affinity CRM",
    description: "Receives verified intake profiles, match opportunities, readiness scores, blockers, and concierge review fields.",
    configured: Boolean(process.env.AFFINITY_API_KEY && process.env.AFFINITY_DEAL_FLOW_LIST_ID),
    missing: [
      !process.env.AFFINITY_API_KEY ? "AFFINITY_API_KEY" : null,
      !process.env.AFFINITY_DEAL_FLOW_LIST_ID ? "AFFINITY_DEAL_FLOW_LIST_ID" : null,
    ].filter(Boolean),
    icon: Database,
    steps: ["Person sync", "Intake opportunity", "Match approval handoff", "Custom field mapping"],
  },
  {
    name: "Squarespace",
    description: "Tracks visitor/contact lifecycle events from intake start through match-ready milestones.",
    configured: Boolean(process.env.SQUARESPACE_API_KEY),
    missing: [!process.env.SQUARESPACE_API_KEY ? "SQUARESPACE_API_KEY" : null].filter(Boolean),
    icon: SquareStack,
    steps: ["Contact capture", "Intake milestone", "Match-ready tag", "Webhook-ready lifecycle"],
  },
];

export default function AdminIntegrationsPage() {
  const readyCount = integrations.filter((integration) => integration.configured).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-hive-white">Integrations</h2>
          <p className="text-hive-white/60 mt-2 text-lg">
            Operator-friendly view of CRM and site handoffs used by the concierge workflow.
          </p>
        </div>
        <div className="rounded-lg border border-hive-emerald/20 bg-hive-slate px-4 py-3 text-sm text-hive-white/70 flex items-center gap-3">
          <Activity className="text-hive-emerald" size={18} />
          <span>{readyCount}/{integrations.length} configured</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <section key={integration.name} className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-6">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-hive-emerald/10 border border-hive-emerald/20 flex items-center justify-center text-hive-emerald">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-hive-white">{integration.name}</h3>
                    <p className="text-sm text-hive-white/60 mt-1 leading-relaxed">{integration.description}</p>
                  </div>
                </div>
                <StatusPill configured={integration.configured} />
              </div>

              <div className="space-y-3 mb-6">
                {integration.steps.map((step) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-hive-white/75">
                    <CheckCircle2 size={16} className={integration.configured ? "text-hive-emerald" : "text-hive-white/25"} />
                    {step}
                  </div>
                ))}
              </div>

              {!integration.configured && (
                <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-100">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <CircleAlert size={16} />
                    Setup needed
                  </div>
                  <p className="text-amber-100/80">
                    Add {integration.missing.join(", ")} to enable live sync. Until then, the app records the workflow and marks sync as not configured.
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>

      <section className="rounded-xl border border-hive-emerald/20 bg-hive-slate p-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-hive-white">Handoff Workflow</h3>
            <p className="text-sm text-hive-white/60 mt-1">What happens after the user confirms the intake summary.</p>
          </div>
          <RefreshCw size={18} className="text-hive-emerald" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {["Verify profile", "Run matching", "Sync CRM", "Prepare reveal"].map((step, index) => (
            <div key={step} className="rounded-lg border border-hive-white/10 bg-hive-charcoal/60 p-4">
              <p className="text-xs uppercase tracking-widest text-hive-mint/70 mb-2">Step {index + 1}</p>
              <p className="font-semibold text-hive-white">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatusPill({ configured }: { configured: boolean }) {
  return (
    <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${
      configured
        ? "bg-hive-emerald/10 text-hive-emerald border-hive-emerald/20"
        : "bg-amber-500/10 text-amber-300 border-amber-500/20"
    }`}>
      {configured ? <CheckCircle2 size={13} /> : <CircleAlert size={13} />}
      {configured ? "Ready" : "Not configured"}
    </span>
  );
}
