import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { TechStack } from '@/components/tech-stack';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import type { Locale } from '@/lib/i18n/types';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  await params;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
