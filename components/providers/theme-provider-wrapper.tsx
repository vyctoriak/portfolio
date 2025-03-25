"use client"

import { ThemeProvider } from "@/components/theme-provider"
import React from "react"

export function ThemeProviderWrapper({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
} 