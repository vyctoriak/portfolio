"use client"

import { useLanguage } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Locale } from "@/lib/i18n/types"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  const handleChangeLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLanguage("en")} className={locale === "en" ? "bg-muted" : ""}>
          {t("languageSwitcher.en")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChangeLanguage("pt-br")}
          className={locale === "pt-br" ? "bg-muted" : ""}
        >
          {t("languageSwitcher.pt-br")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

