import { Mail, Github, Linkedin, FileText, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';
import CopyEmailButton from './CopyEmailButton';

export default function ContactSection() {
  const mailtoUrl =
    'mailto:yskjhajobs@gmail.com?subject=Job%20Inquiry%3A%20Backend%20Software%20Engineer%20-%20Yashraj%20Jha';

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-12 border-t border-border space-y-8"
    >
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
          <Mail className="h-3.5 w-3.5" />
          <span>[05 // CONTACT & INQUIRIES]</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl">
          Interested in discussing full-time backend engineering positions, database performance
          optimization, or client consulting projects.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="rounded-lg border border-border bg-panel p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <Terminal className="h-4 w-4 text-accent-cyan" />
              <span>DIRECT_INBOX // JOB_INQUIRIES</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              yskjhajobs@gmail.com
            </h3>
            <p className="text-xs sm:text-sm text-text-muted">
              Dedicated channel for technical recruiters, engineering leaders, and client inquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <CopyEmailButton email="yskjhajobs@gmail.com" />
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-canvas px-4 py-2 text-xs font-mono font-medium text-text-primary hover:border-border-hover hover:text-accent-cyan transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Open Mail Client</span>
            </a>
          </div>
        </div>

        {/* Channels & Resume Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yskjha"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border-subtle bg-canvas p-4 space-y-1 hover:border-border-hover transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-text-muted">Professional Network</span>
              <Linkedin className="h-4 w-4 text-accent-cyan" />
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="h-3 w-3 text-text-dim" />
            </div>
            <div className="text-[11px] font-mono text-text-dim truncate">
              linkedin.com/in/yskjha
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yskjha"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border-subtle bg-canvas p-4 space-y-1 hover:border-border-hover transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-text-muted">Code & Systems</span>
              <Github className="h-4 w-4 text-accent-cyan" />
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
              <span>GitHub Profile</span>
              <ArrowUpRight className="h-3 w-3 text-text-dim" />
            </div>
            <div className="text-[11px] font-mono text-text-dim truncate">
              github.com/yskjha
            </div>
          </a>

          {/* Download Resume */}
          <a
            href="/Yashraj_Jha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border-subtle bg-canvas p-4 space-y-1 hover:border-accent-cyan transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-text-muted">Complete Credentials</span>
              <FileText className="h-4 w-4 text-accent-emerald" />
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
              <span>Download Resume</span>
              <ArrowUpRight className="h-3 w-3 text-text-dim" />
            </div>
            <div className="text-[11px] font-mono text-text-dim truncate">
              PDF Format (Verified Credentials)
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
