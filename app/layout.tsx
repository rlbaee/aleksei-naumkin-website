import type { Metadata, Viewport } from 'next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Юрист Алексей Наумкин — семейное право по всей Эстонии',
  description: 'Алексей Наумкин — юрист и семейный примиритель. Семейное право, гражданские и административные дела, проступки, уголовные дела и коучинг. Приём в Йыхви, Sompa 1; помощь по всей Эстонии на русском и эстонском языках.',
  applicationName: 'Алексей Наумкин',
  keywords: [
    'Алексей Наумкин',
    'семейный юрист Эстония',
    'юрист по всей Эстонии',
    'юрист Йыхви Sompa 1',
    'русскоязычный юрист Эстония',
    'jurist Eestis',
    'perelepitus Jõhvis',
    'jurist Jõhvis',
    'perekonnaõigus Eestis',
  ],
  openGraph: {
    title: 'Юрист Алексей Наумкин — помощь по всей Эстонии',
    description: 'Семейное право, примирение, коучинг и другие юридические услуги. Офис в Йыхви, Sompa 1.',
    locale: 'ru_EE',
    type: 'website',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f4f0', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className="antialiased"><LanguageProvider>{children}</LanguageProvider></body></html>
}
