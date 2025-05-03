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
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'React', level: 'Expert' },
        { name: 'Next.js', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ],
    },
    {
      category: t('techStack.backend.title'),
      icon: <Server className="h-8 w-8 text-primary" />,
      description: t('techStack.backend.description'),
      technologies: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'NestJS', level: 'Advanced' },
        { name: 'Express', level: 'Expert' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'Python', level: 'Advanced' },
      ],
    },
    {
      category: t('techStack.database.title'),
      icon: <Database className="h-8 w-8 text-primary" />,
      description: t('techStack.database.description'),
      technologies: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'Prisma', level: 'Advanced' },
        { name: 'Microsoft SQL Server', level: 'Intermediate' },
        { name: 'SQLite', level: 'Intermediate' },
      ],
    },
    {
      category: t('techStack.cloud.title'),
      icon: <Cloud className="h-8 w-8 text-primary" />,
      description: t('techStack.cloud.description'),
      technologies: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'GCP', level: 'Intermediate' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Advanced' },
      ],
    },
    {
      category: t('techStack.testing.title'),
      icon: <TestTube2 className="h-8 w-8 text-primary" />,
      description: t('techStack.testing.description'),
      technologies: [
        { name: 'Jest', level: 'Expert' },
        { name: 'React Testing Library', level: 'Expert' },
        { name: 'Cypress', level: 'Advanced' },
        { name: 'E2E Testing', level: 'Advanced' },
        { name: 'TDD', level: 'Advanced' },
      ],
    },
    {
      category: t('techStack.tools.title'),
      icon: <Cpu className="h-8 w-8 text-primary" />,
      description: t('techStack.tools.description'),
      technologies: [
        { name: 'Git', level: 'Expert' },
        { name: 'GitHub', level: 'Expert' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Webpack', level: 'Advanced' },
        { name: 'Vite', level: 'Advanced' },
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
