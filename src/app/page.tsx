"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { translations } from "@/i18n/translations"
import { Github, Twitter, Send, X } from "lucide-react"

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">(() => {
    if (typeof document !== 'undefined') {
      document.dir = "rtl"
    }
    return "ar"
  })
  
  useEffect(() => {
    document.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar")
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="notification-bar">
        <span className="font-arabic">{translations[lang].congrats}</span>
        <Image
          src="/flag.svg"
          alt="Flag"
          width={25}
          height={25}
          className="inline-block ml-2 mx-3"
        />
      </div>

      <main className={`flex-1 ${lang === "ar" ? "text-right font-arabic" : "text-left font-archivo"}`}>
        <div className="container mx-auto h-full py-4 px-2 flex flex-col">
          {/* Header with Language Switcher */}
          <div className={`flex ${lang === "ar" ? "justify-end" : "justify-start"} mb-16`}>
            <Button 
              variant="default"
              color="foreground" 
              onClick={toggleLanguage}
              className="w-full sm:w-auto"
            >
              {lang === "ar" ? "English" : <span className="font-arabic">العربية</span>}
            </Button>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl mx-auto flex flex-col justify-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/logo-black.png"
                alt="Logo"
                width={200}
                height={80}
                priority
              />
            </div>

            {/* Description */}
            <p className="text-xl text-center text-gray-700">
              {translations[lang].description}
            </p>

            {/* CTA Button with New Badge */}
            <div className="flex justify-center">
              <div className="relative">
                <Button 
                  size="lg" 
                  className="text-lg" 
                  onClick={() => window.location.href = 'https://guide.syriadata.net'}
                >
                  {translations[lang].exploreGuide}
                </Button>
                <Badge 
                  variant="secondary" 
                  className="absolute -top-3 -right-3 animate-pulse"
                >
                  {translations[lang].newBadge}
                </Badge>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => window.open('https://twitter.com/syriadatanet', '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://t.me/syriadatanet', '_blank')}
              >
                <Send className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://github.com/syriadata', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}