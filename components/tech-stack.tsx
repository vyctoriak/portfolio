'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/client';
import { Database, Server, Cloud, TestTube2, Layers, Cpu } from 'lucide-react';

export function TechStack() {
  const { t } = useLanguage();

  const techStack = [
    {
      category: t('techStack.frontend.title'),
      icon: <Layers className="h-8 w-8 text-primary" />,
      description: t('techStack.frontend.description'),
      technologies: [
        { name: 'JavaScript', level: '5+ years' },
        { name: 'TypeScript', level: '4+ years' },
        { name: 'React', level: '5+ years' },
        { name: 'Next.js', level: '3+ years' },
        { name: 'Tailwind CSS', level: '3+ years' },
      ],
    },
    {
      category: t('techStack.backend.title'),
      icon: <Server className="h-8 w-8 text-primary" />,
      description: t('techStack.backend.description'),
      technologies: [
        { name: 'Node.js', level: '2+ years' },
        { name: 'NestJS', level: '2+ years' },
        { name: 'Express', level: '5+ years' },
        { name: 'REST APIs', level: '5+ years' },
        { name: 'Python', level: '3+ years' },
      ],
    },
    {
      category: t('techStack.database.title'),
      icon: <Database className="h-8 w-8 text-primary" />,
      description: t('techStack.database.description'),
      technologies: [
        { name: 'PostgreSQL', level: '4+ years' },
        { name: 'MongoDB', level: '2+ years' },
        { name: 'Redis', level: '1 year' },
        { name: 'Prisma', level: '4+ years' },
        { name: 'Microsoft SQL Server', level: '3+ years' },
        { name: 'SQLite', level: '3+ years' },
      ],
    },
    {
      category: t('techStack.cloud.title'),
      icon: <Cloud className="h-8 w-8 text-primary" />,
      description: t('techStack.cloud.description'),
      technologies: [
        { name: 'AWS', level: '4+ years' },
        { name: 'GCP', level: '1 year' },
        { name: 'Docker', level: '4+ years' },
        { name: 'CI/CD', level: '2+ years' },
        { name: 'GitHub Actions', level: '1 year' },
      ],
    },
    {
      category: t('techStack.testing.title'),
      icon: <TestTube2 className="h-8 w-8 text-primary" />,
      description: t('techStack.testing.description'),
      technologies: [
        { name: 'Jest', level: '5+ years' },
        { name: 'React Testing Library', level: '4+ years' },
        { name: 'Cypress', level: '3+ years' },
        { name: 'E2E Testing', level: '3+ years' },
        { name: 'TDD', level: '4+ years' },
      ],
    },
    {
      category: t('techStack.tools.title'),
      icon: <Cpu className="h-8 w-8 text-primary" />,
      description: t('techStack.tools.description'),
      technologies: [
        { name: 'Git', level: '5+ years' },
        { name: 'GitHub', level: '5+ years' },
        { name: 'VS Code', level: '5+ years' },
        { name: 'Webpack', level: '3+ years' },
        { name: 'Vite', level: '2+ years' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('techStack.title')}</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">{t('techStack.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex justify-between items-center">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-primary">{tech.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
