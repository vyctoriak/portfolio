import { redirect } from "next/navigation"
import { defaultLocale } from "@/middleware"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  <SpeedInsights/>
  redirect(`/${defaultLocale}`)
}

