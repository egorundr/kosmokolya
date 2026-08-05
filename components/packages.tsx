import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CONTACTS } from '@/lib/site'

const PACKAGES = [
  {
    name: 'Старт',
    duration: 'Ведущий и DJ с аппаратурой на 5 часов',
    features: [
      'Welcome-зона с вовлечением гостей в атмосферу праздника; 30 минут в подарок',
      'Индивидуальный сценарий с современными интерактивами и активностями',
      'Координация гостей и тайминга',
      'Работа профессионального DJ, который чувствует праздник и гостей',
      'Насыщенная программа и дискотека',
      'Помощь в подготовке к празднику, чат с вами до мероприятия',
      'Рекомендация проверенных специалистов: фото, видео, декор и др.',
    ],
  },
  {
    name: 'Комфорт',
    duration: 'Ведущий и DJ с аппаратурой на 6 часов',
    featured: true,
    features: [
      'Welcome-зона с вовлечением гостей; 30 минут в подарок',
      'Индивидуальный сценарий с современными интерактивами и активностями',
      'Координация гостей и тайминга',
      'Работа профессионального DJ, который чувствует праздник и гостей',
      'Насыщенная программа и дискотека',
      'Помощь в подготовке к празднику, чат с вами до мероприятия',
      'Рекомендация проверенных специалистов: фото, видео, декор и др.',
      'Подготовка роликов и интерактивов с нейросетями для вашего праздника',
    ],
  },
  {
    name: 'Максимум',
    duration: 'Ведущий и DJ с аппаратурой на 6 часов',
    features: [
      'Welcome-зона с вовлечением гостей; 30 минут в подарок',
      'Индивидуальный сценарий с современными интерактивами и активностями',
      'Координация гостей и тайминга',
      'Работа профессионального DJ, который чувствует праздник и гостей',
      'Насыщенная программа и дискотека',
      'Помощь в подготовке к празднику, чат с вами до мероприятия',
      'Рекомендация проверенных специалистов: фото, видео, декор и др.',
      'Съёмка видеоролика с гостями в формате интервью — покажу в конце вечера',
      'Подготовка роликов и интерактивов с нейросетями для вашего праздника',
    ],
  },
]

export function Packages() {
  return (
    <section id="packages" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Пакеты</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Выберите формат праздника
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Каждый пакет — это полноценная программа под ключ. Точную стоимость рассчитаю под вашу дату и формат.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={
                  'flex h-full flex-col rounded-2xl border p-6 sm:p-7 ' +
                  (p.featured
                    ? 'border-primary bg-primary/10 shadow-2xl'
                    : 'border-border glass')
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  {p.featured && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Популярный
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.duration}</p>

                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTACTS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    'mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ' +
                    (p.featured
                      ? 'bg-primary text-primary-foreground hover:brightness-110'
                      : 'border border-border text-foreground hover:bg-card')
                  }
                >
                  Узнать стоимость
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
