import { SKILL_CATEGORIES } from '@/data/skills';
import { Layers, Terminal, Database, Cloud, Activity, BookOpen } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Languages & APIs': <Terminal className="h-4 w-4 text-accent-cyan" />,
  'Databases & Storage': <Database className="h-4 w-4 text-accent-cyan" />,
  'Cloud & Orchestration': <Cloud className="h-4 w-4 text-accent-cyan" />,
  'Observability & Tools': <Activity className="h-4 w-4 text-accent-cyan" />,
  'CS Foundations': <BookOpen className="h-4 w-4 text-accent-cyan" />,
};

export default function SkillsMatrix() {
  return (
    <section id="skills" aria-label="Technical Skills and Competencies" className="py-12 border-t border-border space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
          <Layers className="h-3.5 w-3.5" />
          <span>[02 // TECHNICAL COMPETENCIES]</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Skills & Systems Arsenal
        </h2>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl">
          Core technologies, data storage engines, and orchestration frameworks utilized across production workloads and systems.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-border bg-panel p-5 space-y-3 flex flex-col justify-between hover:border-border-hover transition-colors"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                {CATEGORY_ICONS[category.title] || <Terminal className="h-4 w-4 text-accent-cyan" />}
                <span>{category.title}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border-subtle bg-canvas px-2.5 py-1 text-xs font-mono text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
