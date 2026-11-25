'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/portfolio-site'
import { useLanguage } from '@/components/language-provider'

const sections = {
  guides: {
    title: { ru: 'Гайды', et: 'Juhendid' },
    intro: { ru: 'Практические материалы, которые помогают ориентироваться в юридических вопросах.', et: 'Praktilised materjalid, mis aitavad õiguslikes küsimustes orienteeruda.' },
    status: { ru: 'Раздел готовится к запуску', et: 'Jaotis on valmimisel' },
    note: { ru: 'Здесь появятся подробные руководства и материалы, которые можно будет приобрести. Пока раздел наполняется.', et: 'Siia tulevad põhjalikud juhendid ja materjalid, mida saab osta. Jaotis on täiendamisel.' },
    topics: { ru: ['Понятные объяснения', 'Практические шаги', 'Материалы для самостоятельного изучения'], et: ['Arusaadavad selgitused', 'Praktilised sammud', 'Iseseisvaks tutvumiseks mõeldud materjalid'] },
    label: { ru: 'Полезные материалы', et: 'Materjalid' },
  },
  news: {
    title: { ru: 'Новости', et: 'Uudised' },
    intro: { ru: 'Изменения законодательства и важные правовые события — с кратким объяснением, что они значат.', et: 'Seadusemuudatused ja olulised õigussündmused koos selgitusega, mida need tähendavad.' },
    status: { ru: 'Публикации скоро появятся', et: 'Uudised ilmuvad peagi' },
    note: { ru: 'В этом разделе будут появляться актуальные правовые новости и комментарии. Следите за обновлениями.', et: 'Selles jaotises avaldatakse õigusuudiseid ja kommentaare. Jälgige uuendusi.' },
    topics: { ru: ['Изменения законов', 'Разбор правовых новостей', 'Практика и разъяснения'], et: ['Seadusemuudatused', 'Õigusuudiste ülevaated', 'Praktika ja selgitused'] },
    label: { ru: 'Правовые новости', et: 'Õigusuudised' },
  },
  webinars: {
    title: { ru: 'Вебинары', et: 'Veebinarid' },
    intro: { ru: 'Онлайн-встречи и разборы правовых тем в удобном формате.', et: 'Veebikohtumised ja õigusteemade käsitlused mugavas vormis.' },
    status: { ru: 'Анонсы появятся здесь', et: 'Teated ilmuvad siin' },
    note: { ru: 'Здесь будут опубликованы темы, даты и информация о регистрации на вебинары, а также записи прошедших встреч.', et: 'Siit leiate veebinaride teemad, kuupäevad ja registreerimisinfo ning toimunud kohtumiste salvestused.' },
    topics: { ru: ['Анонсы встреч', 'Регистрация на участие', 'Записи вебинаров'], et: ['Kohtumiste teated', 'Registreerimine', 'Veebinaride salvestused'] },
    label: { ru: 'Онлайн-встречи', et: 'Veebikohtumised' },
  },
  videos: {
    title: { ru: 'Видео', et: 'Videod' },
    intro: { ru: 'Видеоматериалы и ссылки на YouTube — правовые темы в коротком и доступном формате.', et: 'Videod ja YouTube’i lingid — õigusteemad lühidalt ja arusaadavalt.' },
    status: { ru: 'Видео появятся здесь', et: 'Videod ilmuvad siia' },
    note: { ru: 'В этом разделе соберём видеоматериалы и ссылки на канал. Публикаций пока нет.', et: 'Selles jaotises koondame videod ja kanali lingid. Praegu pole veel avaldatud sisu.' },
    topics: { ru: ['Короткие правовые объяснения', 'Ответы на частые вопросы', 'Ссылки на YouTube'], et: ['Lühikesed õigusselgitused', 'Vastused korduma kippuvatele küsimustele', 'YouTube’i lingid'] },
    label: { ru: 'Правовые видео', et: 'Õigusvideod' },
  },
} as const

type ResourceSlug = keyof typeof sections

export function ResourceSection({ slug }: Readonly<{ slug: ResourceSlug }>) {
  const { language } = useLanguage()
  const section = sections[slug]

  return (
    <>
      <SiteHeader />
      <main className="resource-page">
        <section className="resource-hero">
          <div className="wrap">
            <p className="eyebrow">{section.label[language]}</p>
            <h1>{section.title[language]}</h1>
            <p className="resource-intro">{section.intro[language]}</p>
          </div>
        </section>
        <section className="resource-content">
          <div className="wrap resource-content-grid">
            <div className="resource-status">{section.status[language]}</div>
            <div className="resource-details">
              <p>{section.note[language]}</p>
              <ul>{section.topics[language].map((topic) => <li key={topic}><span />{topic}</li>)}</ul>
              <Link href="/#booking" className="resource-cta">{language === 'ru' ? 'Записаться' : 'Broneeri aeg'}<ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="resource-footer"><div className="wrap"><Link href="/">Алексей Наумкин</Link><span>© {new Date().getFullYear()}</span></div></footer>
    </>
  )
}
