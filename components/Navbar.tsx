'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-canvas/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Operational Identity */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-text-primary hover:text-accent-cyan transition-colors"
            aria-label="Yashraj Jha Portfolio Homepage"
          >
            <span className="text-accent-cyan font-bold">&gt;</span>
            <span>yashraj.jha</span>
          </Link>

          {/* Operational Status Dot (Visible on tablet & desktop) */}
          <div
            className="hidden md:flex items-center gap-1.5 rounded-full border border-border-subtle bg-panel px-2.5 py-0.5 text-xs font-mono text-text-muted"
            title="Operational Status: Open to Backend Roles"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald"></span>
            </span>
            <span className="text-[11px] text-text-muted">Open to Backend Roles</span>
          </div>
        </div>

        {/* Large Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-text-muted"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-text-primary focus-visible:text-accent-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Large Desktop Quick Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/yskjha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel text-text-muted hover:border-border-hover hover:text-text-primary transition-colors"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <Github className="h-4 w-4" />
          </a>

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
            href="/Yashraj_Jha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel px-3 py-1.5 text-xs font-mono font-medium text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            aria-label="Download Resume PDF (opens in new tab)"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3 text-text-muted" />
          </a>
        </div>

        {/* Mobile & Tablet Menu Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="/Yashraj_Jha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 rounded-md border border-border bg-panel px-2.5 py-1.5 text-xs font-mono text-text-primary hover:border-accent-cyan transition-colors"
            aria-label="Resume"
          >
            <FileText className="h-3 w-3" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel text-text-muted hover:border-accent-cyan hover:text-text-primary transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-panel px-4 py-4 lg:hidden">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border-subtle">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald"></span>
            </span>
            <span className="text-xs font-mono text-text-muted">Status: Open to Backend Roles</span>
          </div>

          <nav className="flex flex-col gap-3 font-medium text-sm text-text-muted" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap items-center gap-2">
            <a
              href="/Yashraj_Jha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-canvas px-3 py-1.5 text-xs font-mono text-text-primary"
            >
              <FileText className="h-3.5 w-3.5 text-accent-cyan" />
              <span>Resume PDF</span>
            </a>
            <a
              href="https://github.com/yskjha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-canvas px-3 py-1.5 text-xs font-mono text-text-muted hover:text-text-primary"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yskjha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-canvas px-3 py-1.5 text-xs font-mono text-text-muted hover:text-text-primary"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
