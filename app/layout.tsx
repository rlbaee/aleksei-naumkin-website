import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ViruLex Õigusbüroo — юридическая помощь в Йыхви',
  description: 'Юридическая помощь, семейное примирение и представительство в суде в Йыхви, Ида-Вирумаа. Консультации на русском и эстонском языках.',
  applicationName: 'ViruLex Õigusbüroo',
  keywords: ['юрист Йыхви', 'юридическая помощь Эстония', 'семейное примирение', 'ViruLex'],
  openGraph: { title: 'ViruLex Õigusbüroo', description: 'Юридическая помощь в Йыхви. Русский и эстонский языки.', locale: 'ru_EE', type: 'website' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f6f2', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
