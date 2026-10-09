import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0D1117',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Yashraj Jha | Software Engineer — Backend & Database Systems',
  description:
    'Backend Software Developer specializing in high-throughput API development, SQL query optimization, distributed cloud task orchestration, and scalable retail analytics systems.',
  authors: [{ name: 'Yashraj Jha', url: 'https://github.com/yskjha' }],
  keywords: [
    'Yashraj Jha',
    'Backend Developer',
    'Software Engineer',
    'Python',
    'Rust',
    'SQL Optimization',
    'PostgreSQL',
    'GCP',
    'Distributed Systems',
    'Impact Analytics',
  ],
  metadataBase: new URL('https://yskjha.github.io'),
  alternates: {
    canonical: 'https://yskjha.github.io',
  },
  openGraph: {
    title: 'Yashraj Jha | Software Engineer — Backend & Database Systems',
    description:
      'Backend Software Developer with proven production ownership: 200+ tickets delivered, 40s to 7s query optimization, and zero-rollback change requests at Impact Analytics.',
    url: 'https://yskjha.github.io',
    type: 'website',
    locale: 'en_US',
    siteName: 'Yashraj Jha Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Yashraj Jha | Software Engineer — Backend Developer',
    description:
      'Backend Software Developer specializing in API development, SQL optimization, and distributed cloud task orchestration.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yashraj Jha',
  alternateName: 'Yashraj Santosh Kumar Jha',
  jobTitle: 'Software Engineer - Backend Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Impact Analytics',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'BITS Pilani, Hyderabad Campus',
  },
  url: 'https://yskjha.github.io',
  sameAs: [
    'https://github.com/yskjha',
    'https://linkedin.com/in/yskjha',
  ],
  knowsAbout: [
    'Backend Development',
    'API Optimization',
    'SQL Optimization',
    'PostgreSQL',
    'Python',
    'Rust',
    'Distributed Cloud Tasks',
    'Google Cloud Platform',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-text-primary antialiased flex flex-col selection:bg-accent-cyan/20 selection:text-text-primary">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
