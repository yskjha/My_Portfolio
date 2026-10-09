import { EDUCATION_DATA } from '@/data/education';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Academic Background and Education"
      className="py-12 border-t border-border space-y-8"
    >
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>[04 // ACADEMIC BACKGROUND]</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Education
        </h2>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl">
          Academic qualifications and core computer science fundamentals.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EDUCATION_DATA.map((item, index) => {
          const isPrimary = index === 0;
          return (
            <article
              key={item.institution}
              className={`rounded-lg border bg-panel p-5 space-y-3 flex flex-col justify-between hover:border-border-hover transition-colors ${
                isPrimary ? 'border-accent-cyan/40 md:col-span-3' : 'border-border'
              }`}
            >
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.degree}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-text-muted shrink-0">
                    <Calendar className="h-3 w-3 text-accent-cyan" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="text-xs font-mono font-medium text-accent-cyan">
                  {item.institution}
                </div>

                {item.details && (
                  <div className="pt-2 border-t border-border-subtle flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <BookOpen className="h-3.5 w-3.5 text-text-dim shrink-0 mt-0.5" />
                    <span>{item.details}</span>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
