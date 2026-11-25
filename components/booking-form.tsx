'use client'

import { useState, type FormEvent } from 'react'
import { useLanguage } from '@/components/language-provider'
import { serviceDetails, serviceOrder, type ServiceSlug } from '@/components/service-content'

type BookingFormProps = Readonly<{
  selectedService: ServiceSlug | ''
  onServiceChange: (service: ServiceSlug | '') => void
  notice: string
  submittedMessage: string
}>

export function BookingForm({ selectedService, onServiceChange, notice, submittedMessage }: BookingFormProps) {
  const { language } = useLanguage()
  const [status, setStatus] = useState('')
  const isRussian = language === 'ru'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(submittedMessage)
  }

  return (
    <div className="booking-layout">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-fields">
          <label>
            {isRussian ? 'Имя' : 'Eesnimi'}
            <input name="firstName" type="text" autoComplete="given-name" required />
          </label>
          <label>
            {isRussian ? 'Фамилия' : 'Perekonnanimi'}
            <input name="lastName" type="text" autoComplete="family-name" required />
          </label>
          <label>
            {isRussian ? 'Номер телефона' : 'Telefon'}
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            {isRussian ? 'Электронная почта' : 'E-post'}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="booking-field-wide">
            {isRussian ? 'Услуга' : 'Teenus'}
            <select
              name="service"
              value={selectedService}
              onChange={(event) => {
                const value = event.currentTarget.value
                onServiceChange(serviceOrder.find((slug) => slug === value) ?? '')
              }}
              required
            >
              <option value="" disabled>{isRussian ? 'Выберите услугу' : 'Valige teenus'}</option>
              {serviceOrder.map((slug) => (
                <option key={slug} value={slug}>{serviceDetails[slug][language].title}</option>
              ))}
            </select>
          </label>
          <label className="booking-field-wide">
            {isRussian ? 'Кратко опишите проблему' : 'Kirjeldage lühidalt probleemi'}
            <textarea name="comment" rows={5} maxLength={1500} required />
          </label>
        </div>
        <div className="booking-submit-row">
          <button className="button button-primary" type="submit">{isRussian ? 'Отправить заявку' : 'Saada päring'}</button>
          <p>{notice}</p>
        </div>
        {status && <p className="booking-status" role="status">{status}</p>}
      </form>
      <p className="booking-privacy">
        {isRussian
          ? 'Пожалуйста, не указывайте в форме конфиденциальные сведения и документы.'
          : 'Palun ärge lisage vormi konfidentsiaalseid andmeid ega dokumente.'}
      </p>
    </div>
  )
}
