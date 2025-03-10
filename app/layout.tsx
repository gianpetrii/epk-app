import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { FirebaseProvider } from "@/components/firebase-provider"
import { PasswordProvider } from "@/lib/password-context"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Nacho Gomez Cao - Electronic Press Kit",
  description: "Electronic Press Kit for Nacho Gomez Cao",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <FirebaseProvider>
          <LanguageProvider>
            <PasswordProvider>
              <Navigation />
              <div className="pt-16">
                {children}
              </div>
            </PasswordProvider>
          </LanguageProvider>
        </FirebaseProvider>
      </body>
    </html>
  )
}

