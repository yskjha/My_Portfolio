import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-canvas-subtle mt-auto">
      <div className="mx-auto max-w-container px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* System Identity & Location */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-text-primary">
              <span className="text-accent-cyan font-bold">&gt;</span>
              <span className="font-semibold">yashraj.jha // backend-systems</span>
            </div>
            <p className="text-xs text-text-muted">
              Software Developer • Bengaluru, India • Specializing in APIs, SQL & Cloud Orchestration
            </p>
          </div>

          {/* Direct Social & Connect Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="mailto:yskjhajobs@gmail.com"
              className="inline-flex items-center gap-1 text-text-muted hover:text-accent-cyan transition-colors"
              aria-label="Send email to yskjhajobs@gmail.com"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>yskjhajobs@gmail.com</span>
            </a>

            <span className="text-border">|</span>

            <a
              href="https://github.com/yskjha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="h-2.5 w-2.5 text-text-dim" />
            </a>

            <span className="text-border">|</span>

            <a
              href="https://linkedin.com/in/yskjha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-2.5 w-2.5 text-text-dim" />
            </a>
          </div>
        </div>

        {/* Bottom Technical Note */}
        <div className="mt-6 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-text-dim">
          <p>© {currentYear} Yashraj Jha. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald"></span>
            <span>All metrics verified against production engineering records</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
