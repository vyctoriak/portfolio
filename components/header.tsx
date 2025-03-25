"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "@/lib/i18n/client"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, locale } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl">
          VK<span className="text-primary">.</span>
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4">
                <Link
                  href="#about"
                  onClick={toggleMenu}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header.about")}
                </Link>
                <Link
                  href="#skills"
                  onClick={toggleMenu}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header.skills")}
                </Link>
                <Link
                  href="#projects"
                  onClick={toggleMenu}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header.projects")}
                </Link>
                <Link
                  href="#testimonials"
                  onClick={toggleMenu}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header.testimonials")}
                </Link>
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header.contact")}
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center">
            <nav className="flex items-center gap-6 mr-4">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("header.about")}
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("header.skills")}
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("header.projects")}
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("header.testimonials")}
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("header.contact")}
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

