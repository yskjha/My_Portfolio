import { ArrowDown, Github, Linkedin, Terminal, MapPin } from 'lucide-react';
import CopyEmailButton from './CopyEmailButton';
import TelemetryBar from './TelemetryBar';

export default function Hero() {
  return (
    <section aria-label="Hero Introduction" className="pt-6 sm:pt-10 pb-12 space-y-8">
      {/* Eyebrow & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs font-mono">
        <span className="inline-flex items-center gap-1.5 rounded border border-border-subtle bg-panel px-2.5 py-1 text-accent-cyan self-start">
          <Terminal className="h-3.5 w-3.5 shrink-0" />
          <span>[SYSTEMS & BACKEND SOFTWARE ENGINEER]</span>
        </span>

        <span className="inline-flex items-center gap-1 text-text-muted">
          <MapPin className="h-3.5 w-3.5 text-text-dim shrink-0" />
          <span>Bengaluru, India</span>
        </span>
      </div>

      {/* Main Headline & Positioning */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
          Yashraj Jha
        </h1>
        <p className="text-lg sm:text-xl font-medium text-text-muted">
          Software Developer at <span className="text-text-primary font-semibold">Impact Analytics</span>
        </p>
        <p className="text-base text-text-muted leading-relaxed sm:text-lg">
          Specializing in distributed cloud task orchestration, database query optimization, and
          resilient API development. Proven production ownership delivering 200+ tickets and
          zero-rollback change requests on enterprise retail analytics systems.
        </p>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <CopyEmailButton email="yskjhajobs@gmail.com" />

        <a
          href="#experience"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel px-4 py-2 text-xs font-mono font-medium text-text-primary hover:border-border-hover hover:bg-panel-hover transition-colors"
        >
          <span>Production Track Record</span>
          <ArrowDown className="h-3.5 w-3.5 text-text-muted" />
        </a>

        <div className="flex items-center gap-2 pl-1 sm:pl-2">
          <a
            href="https://linkedin.com/in/yskjha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel text-text-muted hover:border-border-hover hover:text-text-primary transition-colors"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="https://github.com/yskjha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel text-text-muted hover:border-border-hover hover:text-text-primary transition-colors"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Above-the-Fold Production Telemetry Bar */}
      <div className="pt-4">
        <TelemetryBar />
      </div>
    </section>
  );
}
