import { WORK_EXPERIENCE } from '@/data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" aria-label="Work Experience" className="py-12 border-t border-border space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
          <Briefcase className="h-3.5 w-3.5" />
          <span>[01 // PRODUCTION ENGINEERING RECORD]</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Work Experience
        </h2>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl">
          Track record of shipping enterprise pricing automation features, resolving critical production issues, and optimizing database performance.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="space-y-8">
        {WORK_EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-lg border border-border bg-panel p-6 sm:p-8 space-y-6 hover:border-border-hover transition-colors"
          >
            {/* Top Bar: Role & Metadata */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-border-subtle">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
                    {item.role}
                  </h3>
                  {item.current && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent-emerald/40 bg-accent-emerald/10 px-2.5 py-0.5 text-[11px] font-mono text-accent-emerald">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
                      <span>Current Role</span>
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted font-mono">
                  <span className="font-semibold text-accent-cyan">{item.company}</span>
                  <span className="text-border">|</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-text-dim" />
                    <span>{item.location}</span>
                  </span>
                  <span className="text-border">|</span>
                  <span>{item.type}</span>
                </div>
              </div>

              {/* Period Badge */}
              <div className="inline-flex items-center gap-1.5 rounded border border-border-subtle bg-canvas px-3 py-1 text-xs font-mono text-text-muted shrink-0 self-start">
                <Calendar className="h-3.5 w-3.5 text-accent-cyan" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Key Verified Metric Highlights (Responsive 1-col on mobile, 3-col on sm+) */}
            {item.metrics && item.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded border border-border-subtle bg-canvas p-3 space-y-0.5"
                  >
                    <div className="font-mono text-lg sm:text-xl font-bold text-accent-cyan">
                      {metric.value}
                    </div>
                    <div className="text-[11px] font-mono text-text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Contributions */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Key Production Contributions:
              </h4>
              <ul className="space-y-2.5 text-sm text-text-muted leading-relaxed">
                {item.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-accent-cyan font-mono text-sm leading-none pt-1">&gt;</span>
                    <span className="text-text-primary/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-text-muted mr-1.5">Technologies:</span>
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border-subtle bg-canvas px-2.5 py-0.5 text-xs font-mono text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
