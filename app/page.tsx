import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import SkillsMatrix from '@/components/SkillsMatrix';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Education from '@/components/Education';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 00 // Hero Headline & Production Telemetry */}
      <Hero />

      {/* 01 // Production Engineering Experience (Impact Analytics) */}
      <Experience />

      {/* 02 // Technical Skills & Architecture Arsenal */}
      <SkillsMatrix />

      {/* 03 // Modular Projects & Systems Showcase */}
      <ProjectsShowcase />

      {/* 04 // Academic Background & Core CS Coursework */}
      <Education />

      {/* 05 // Contact, Inquiries & Resume Access */}
      <ContactSection />
    </div>
  );
}
