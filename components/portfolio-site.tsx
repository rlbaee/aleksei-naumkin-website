'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { LanguageToggle, useLanguage } from '@/components/language-provider'
import { BookingForm } from '@/components/booking-form'
import { serviceDetails, serviceOrder, type ServiceSlug } from '@/components/service-content'

const copy = {
  ru: {
    nav: [
      ['Услуги', '/#services'],
      ['Гайды', '/guides'],
      ['Новости', '/news'],
      ['Вебинары', '/webinars'],
      ['Видео', '/videos'],
    ],
    contact: 'Записаться',
    title: <>Алексей<br />Наумкин</>,
    heroRole: 'Юрист · семейный примиритель',
    intro: 'Юридическая помощь по всей Эстонии, в первую очередь по семейному праву.',
    primary: 'Услуги',
    languages: 'Русский · Эстонский',
    portrait: 'Алексей Наумкин, юрист',
    aboutLabel: 'О юристе',
    aboutTitle: <>Юрист и семейный примиритель</>,
    aboutParagraphs: [
      'Три года практики в семейном примирении. Работаю на русском и эстонском.',
    ],
    servicesLabel: 'Юридическая помощь',
    servicesTitle: 'Услуги',
    servicesNote: 'Нажмите «Записаться» у услуги — она подставится в форму.',
    bookService: 'Записаться',
    officeLabel: 'Офис',
    officeTitle: 'Sompa 1, Jõhvi',
    officeText: 'Приём по предварительной записи в Йыхви.',
    officeDirections: 'Открыть карту',
    bookingLabel: 'Запись на консультацию',
    bookingTitle: 'Опишите ваш вопрос',
    bookingIntro: 'Оставьте контакты и коротко опишите вопрос.',
    bookingNotice: 'Форма пока не подключена к электронной почте. Нажатие кнопки не отправит и не сохранит заявку.',
    bookingNotSent: 'Заявка не отправлена: форма пока не подключена.',
    footerText: 'Юридическая практика · Эстония',
    footerNote: 'Информация на сайте носит общий характер и не является юридическим заключением по конкретному делу.',
    up: 'Наверх',
  },
  et: {
    nav: [
      ['Teenused', '/#services'],
      ['Juhendid', '/guides'],
      ['Uudised', '/news'],
      ['Veebinarid', '/webinars'],
      ['Videod', '/videos'],
    ],
    contact: 'Broneeri aeg',
    title: <>Aleksei<br />Naumkin</>,
    heroRole: 'Jurist · perelepitaja',
    intro: 'Õigusabi üle Eesti, eelkõige perekonnaõiguses.',
    primary: 'Vali teenus',
    languages: 'Eesti keel · vene keel',
    portrait: 'Jurist Aleksei Naumkin',
    aboutLabel: 'Juristist',
    aboutTitle: <>Jurist ja perelepitaja</>,
    aboutParagraphs: [
      'Kolm aastat perelepituse kogemust. Töötan eesti ja vene keeles.',
    ],
    servicesLabel: 'Õigusabi',
    servicesTitle: 'Teenused',
    servicesNote: 'Vajutage teenuse juures „Broneeri aeg“ — see valitakse vormil automaatselt.',
    bookService: 'Broneeri aeg',
    officeLabel: 'Kontor',
    officeTitle: 'Sompa 1, Jõhvi',
    officeText: 'Vastuvõtt Jõhvis eelneval kokkuleppel.',
    officeDirections: 'Ava kaart',
    bookingLabel: 'Nõustamisele registreerimine',
    bookingTitle: 'Kirjelda oma küsimust',
    bookingIntro: 'Jäta kontaktandmed ja kirjelda küsimust lühidalt.',
    bookingNotice: 'Vorm ei ole veel e-postiga ühendatud. Nupu vajutamisel avaldust ei saadeta ega salvestata.',
    bookingNotSent: 'Päringut ei saadetud: vorm ei ole veel ühendatud.',
    footerText: 'Õigusabi · Eesti',
    footerNote: 'Veebilehe teave on üldist laadi ega ole konkreetse juhtumi õiguslik hinnang.',
    up: 'Tagasi üles',
  },
}

export function SiteHeader() {
  const { language } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const text = copy[language]

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label={language === 'ru' ? 'Алексей Наумкин — главная' : 'Aleksei Naumkin — avaleht'}>
          <span className="brand-name">Алексей Наумкин</span>
          <span className="brand-caption">{text.heroRole}</span>
        </Link>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={language === 'ru' ? 'Основная навигация' : 'Peamenüü'}>
          {text.nav.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link className="mobile-contact" href="/#booking" onClick={() => setMenuOpen(false)}>
            {text.contact}<ArrowUpRight size={15} />
          </Link>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <Link className="header-contact" href="/#booking">{text.contact}<ArrowUpRight size={15} /></Link>
        </div>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? (language === 'ru' ? 'Закрыть меню' : 'Sulge menüü') : (language === 'ru' ? 'Открыть меню' : 'Ava menüü')} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}

export function PortfolioSite() {
  const { language } = useLanguage()
  const text = copy[language]
  const [selectedService, setSelectedService] = useState<ServiceSlug | ''>('')

  function chooseService(slug: ServiceSlug) {
    setSelectedService(slug)
    window.history.replaceState(null, '', '#booking')
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>{text.title}</h1>
              <p className="hero-role">{text.heroRole}</p>
              <p className="hero-intro">{text.intro}</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#services">{text.primary}<ArrowRight size={16} /></Link>
              </div>
              <div className="hero-meta">{text.languages}</div>
            </div>
            <div className="hero-photo">
              <div className="portrait-wrap">
                <Image src="/images/aleksei-naumkin.jpg" alt={text.portrait} fill priority sizes="(max-width: 760px) 90vw, 46vw" className="portrait" />
              </div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="eyebrow">{text.servicesLabel}</p><h2>{text.servicesTitle}</h2></div>
              <p>{text.servicesNote}</p>
            </div>
            <div className="service-list">
              {serviceOrder.map((slug, index) => {
                const service = serviceDetails[slug][language]

                return (
                  <article className={`service-entry${index === 0 ? ' service-entry-primary' : ''}${selectedService === slug ? ' service-entry-selected' : ''}`} id={slug} key={slug}>
                    <div className="service-entry-heading">
                      <h3>{service.title}</h3>
                      <p>{service.intro}</p>
                    </div>
                    <ul className="service-topics">
                      {service.topics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                    {'note' in service && <p className="service-note">{service.note}</p>}
                    <button className="service-book" type="button" aria-pressed={selectedService === slug} onClick={() => chooseService(slug)}>
                      {text.bookService}<ArrowUpRight size={16} />
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="booking section-pad" id="booking">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="eyebrow">{text.bookingLabel}</p><h2>{text.bookingTitle}</h2></div>
              <p>{text.bookingIntro}</p>
            </div>
            <BookingForm
              selectedService={selectedService}
              onServiceChange={setSelectedService}
              notice={text.bookingNotice}
              submittedMessage={text.bookingNotSent}
            />
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="wrap about-grid">
            <div className="about-heading">
              <p className="eyebrow">{text.aboutLabel}</p>
              <h2>{text.aboutTitle}</h2>
            </div>
            <div className="about-copy">
              {text.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="office section-pad" id="office">
          <div className="wrap office-grid">
            <div className="office-copy">
              <p className="eyebrow">{text.officeLabel}</p>
              <h2>{text.officeTitle}</h2>
              <p>{text.officeText}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Sompa+1%2C+J%C3%B5hvi%2C+Estonia" target="_blank" rel="noreferrer">
                {text.officeDirections}<ArrowUpRight size={16} />
              </a>
            </div>
            <div className="office-map">
              <iframe
                title={language === 'ru' ? 'Карта офиса на Sompa 1 в Йыхви' : 'Sompa 1 kontori kaart Jõhvis'}
                src="https://maps.google.com/maps?q=Sompa%201%2C%20J%C3%B5hvi%2C%20Estonia&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>
      <footer className="site-footer">
        <div className="wrap footer-top">
          <Link className="brand brand-footer" href="/"><span className="brand-name">Алексей Наумкин</span><span className="brand-caption">{text.heroRole}</span></Link>
          <p>{text.footerText}</p>
          <a className="footer-up" href="#home">{text.up}<ArrowUpRight size={15} /></a>
        </div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Алексей Наумкин</span><span>{text.footerNote}</span></div>
      </footer>
    </>
  )
}
