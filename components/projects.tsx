"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/client"
import Image from "next/image"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.taskManagement.title"),
      description: t("projects.taskManagement.description"),
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.financeDashboard.title"),
      description: t("projects.financeDashboard.description"),
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.fitnessApp.title"),
      description: t("projects.fitnessApp.description"),
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Redux", "Health APIs"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.cms.title"),
      description: t("projects.cms.description"),
      image: "/placeholder.svg",
      tags: ["Next.js", "GraphQL", "Prisma", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t("projects.realEstate.title"),
      description: t("projects.realEstate.description"),
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Google Maps API", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("projects.title")}</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> {t("projects.code")}
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> {t("projects.liveDemo")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

