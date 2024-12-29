import { Archivo, IBM_Plex_Sans_Arabic } from 'next/font/google'
import "@/app/globals.css"  // This should be the first import

const archivo = Archivo({ 
  subsets: ['latin'],
  variable: '--font-archivo',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-arabic',
})

export const metadata = {
  title: 'بيانات سورية - Syria Data',
  description: 'مصدرك الأول لبيانات وموارد البحث المتعلقة بسوريا',
  icon: '/favicon.ico',
  icons: {
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${archivo.variable} ${ibmPlexSansArabic.variable} font-arabic`}>
        {children}
      </body>
    </html>
  )
}