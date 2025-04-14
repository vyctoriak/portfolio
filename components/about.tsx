"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { useLanguage } from "@/lib/i18n/client"
import { saveAs } from 'file-saver'

export function About() {
  const { t, locale } = useLanguage()

  const handleDownload = () => {
    const resumeFiles = {
      'en': '/documents/resumes/Vyctoria-en.pdf',
      'pt-br': '/documents/resumes/Vyctoria-pt-br.pdf'
    }

    const resumeUrl = resumeFiles[locale]
    const fileName = locale === 'en' ? 'Vyctoria-en.pdf' : 'Vyctoria-pt-br.pdf'
    
    saveAs(resumeUrl, fileName)
  }

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">{t("about.paragraph1")}</p>
            <p className="text-lg">{t("about.paragraph2")}</p>
            <Button className="mt-4" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> {t("about.downloadResume")}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">{t("about.yearsExperience")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-muted-foreground">{t("about.projectsCompleted")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">{t("about.happyClients")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
                <p className="text-muted-foreground">{t("about.industryAwards")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

