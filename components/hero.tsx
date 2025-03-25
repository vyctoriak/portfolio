"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/client"
import Image from "next/image"

export function Hero() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-20 md:py-32 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("hero.greeting")} <span className="text-primary">Vyctoria Karina</span>
          </h1>
          <p className="text-xl text-muted-foreground">{t("hero.role")}</p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#projects">
                {t("hero.viewWork")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">{t("hero.contactMe")}</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/vyctoriak" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/vyckarina" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com/vyckarina" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
            <Image
              src="/praga2.jpeg"
              alt="Vyctoria Karina"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

