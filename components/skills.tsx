'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/client';

export function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: t('skills.frontend.title'),
      description: t('skills.frontend.description'),
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: t('skills.backend.title'),
      description: t('skills.backend.description'),
      technologies: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL'],
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: t('skills.database.title'),
      description: t('skills.database.description'),
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma ORM'],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: t('skills.devops.title'),
      description: t('skills.devops.description'),
      technologies: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vercel'],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: t('skills.mobile.title'),
      description: t('skills.mobile.description'),
      technologies: ['React Native', 'Expo', 'Mobile UI/UX', 'App Store Deployment'],
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t('skills.performance.title'),
      description: t('skills.performance.description'),
      technologies: ['Web Vitals', 'SEO', 'Accessibility', 'Performance Optimization'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">{t('skills.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
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
