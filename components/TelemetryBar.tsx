import { Zap, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export default function TelemetryBar() {
  return (
    <div className="w-full rounded-lg border border-border bg-panel overflow-hidden shadow-sm">
      {/* Telemetry Header */}
      <div className="flex items-center justify-between border-b border-border-subtle bg-canvas-subtle px-4 py-2 text-[11px] font-mono text-text-muted">
        <div className="flex items-center gap-2">
          <Cpu className="h-3.5 w-3.5 text-accent-cyan shrink-0" />
          <span className="font-semibold text-text-primary">SYSTEM TELEMETRY</span>
          <span className="text-border">|</span>
          <span className="hidden sm:inline">IMPACT ANALYTICS PRODUCTION METRICS</span>
          <span className="sm:hidden">PRODUCTION METRICS</span>
        </div>
        <div className="flex items-center gap-1.5 text-accent-emerald shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
          <span>VERIFIED</span>
        </div>
      </div>

      {/* 3 Metrics Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Metric 1: Query Optimization */}
        <div className="p-5 space-y-1.5 hover:bg-panel-hover transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-text-muted">SQL Query Latency</span>
            <Zap className="h-4 w-4 text-accent-cyan" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-accent-cyan">
            40s → 7s
          </div>
          <p className="text-xs text-text-muted">
            Key API latency reduced by <span className="text-text-primary font-medium font-mono">~82.5%</span> through SQL and indexing optimization.
          </p>
        </div>

        {/* Metric 2: Tickets Delivered */}
        <div className="p-5 space-y-1.5 hover:bg-panel-hover transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-text-muted">Production Tickets</span>
            <CheckCircle2 className="h-4 w-4 text-accent-emerald" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            200+
          </div>
          <p className="text-xs text-text-muted">
            Delivered across enterprise pricing automation tools including fixes, features & enhancements.
          </p>
        </div>

        {/* Metric 3: Rollback Record */}
        <div className="p-5 space-y-1.5 hover:bg-panel-hover transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-text-muted">Change Request Reliability</span>
            <ShieldAlert className="h-4 w-4 text-accent-emerald" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-accent-emerald">
            0 Rollbacks
          </div>
          <p className="text-xs text-text-muted">
            Maintained across <span className="text-text-primary font-medium font-mono">5 major CRs</span> and 14+ resolved critical production bugs.
          </p>
        </div>
      </div>
    </div>
  );
}
