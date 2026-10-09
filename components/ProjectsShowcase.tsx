import { PROJECTS_DATA } from '@/data/projects';
import { FolderGit2, ArrowUpRight, Github, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      aria-label="Featured Systems and Projects"
      className="py-12 border-t border-border space-y-8"
    >
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>[03 // FEATURED SYSTEMS & PROJECTS]</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Projects & Engineering Case Studies
        </h2>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl">
          Detailed technical reviews covering production systems engineering, machine learning
          benchmarking, and statistical data analysis.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            className="rounded-lg border border-border bg-panel p-6 space-y-5 hover:border-border-hover transition-colors flex flex-col justify-between"
          >
            {/* Header: Category & Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded border border-border-subtle bg-canvas px-2 py-0.5 text-xs font-mono text-accent-cyan">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-text-muted">
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-text-primary leading-snug">
                {project.title}
              </h3>

              {/* Problem / Context */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-text-dim uppercase tracking-wider">
                  Problem & Context:
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {project.problemContext}
                </p>
              </div>

              {/* Role & Contribution */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-text-dim uppercase tracking-wider">
                  Role & Contribution:
                </div>
                <p className="text-xs text-text-primary/90 leading-relaxed">
                  {project.roleContribution}
                </p>
              </div>

              {/* Key Approach */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-text-dim uppercase tracking-wider">
                  Key Decisions & Approach:
                </div>
                <ul className="space-y-1 text-xs text-text-muted">
                  {project.approachKeyDecisions.map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-accent-cyan font-mono">&gt;</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results & Learnings */}
              <div className="space-y-1 rounded border border-border-subtle bg-canvas/60 p-3">
                <div className="text-[11px] font-mono text-accent-emerald flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Result & Evidence:</span>
                </div>
                <p className="text-xs text-text-primary/90 leading-relaxed font-mono">
                  {project.resultsLearnings}
                </p>
              </div>

              {/* Missing Information Note if applicable */}
              {project.missingInfo && project.missingInfo.length > 0 && (
                <div className="space-y-1 text-[11px] font-mono text-text-dim pt-1">
                  {project.missingInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-text-dim">
                      <AlertCircle className="h-3 w-3 text-border shrink-0 mt-0.5" />
                      <span>{info}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer: Tech Stack & Links */}
            <div className="space-y-3 pt-4 border-t border-border-subtle">
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border-subtle bg-canvas px-2 py-0.5 text-[11px] font-mono text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1 text-xs font-mono">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-cyan hover:underline"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-text-dim text-[11px]">
                    {project.status === 'Production Case Study'
                      ? 'Closed-source enterprise software'
                      : 'Source link pending public release'}
                  </span>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-text-primary hover:text-accent-cyan"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Demo</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
