'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export default function CopyEmailButton({
  email = 'yskjhajobs@gmail.com',
  className = '',
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for environments where Clipboard API is restricted
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Graceful fallback to mailto if clipboard fails
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-md border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-xs font-mono font-medium text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/20 active:scale-[0.98] transition-all shadow-glow-cyan ${className}`}
      aria-label={`Copy contact email ${email} to clipboard`}
      title="Click to copy email address"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-accent-emerald animate-in fade-in zoom-in duration-150" />
          <span className="text-text-primary" aria-live="polite">
            Copied {email}!
          </span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-accent-cyan" />
          <span>Copy Email: {email}</span>
        </>
      )}
    </button>
  );
}
