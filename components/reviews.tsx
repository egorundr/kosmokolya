'use client'

import { useState } from 'react'
import { Star, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Lightbox } from '@/components/lightbox'

type Review = {
  name: string
  date: string
  photo?: string
  text: string
}

const CATEGORY = 'Ведущий (тамада) DJ на свадьбу, юбилей, корпоратив'

const REVIEWS: Review[] = [
  {
    name: 'Зария Ибракова',
    date: '31 июля',
    photo: '/reviews/rev1.jpg',
    text: 'Николай, спасибо за нашу свадьбу! Всё прошло легко, непринуждённо и очень душевно. Вы так тонко чувствовали атмосферу, что даже самые стеснительные гости быстро включились в программу. Было много искреннего смеха, трогательных моментов — и при этом никакой суеты. Очень рады, что выбрали именно вас. Спасибо за праздник, который мы будем вспоминать с улыбкой!',
  },
  {
    name: 'Катерина',
    date: '16 июля 2025',
    photo: '/reviews/rev5.jpg',
    text: 'Огромное спасибо Николаю за нашу свадьбу! Гости смеялись от души, все замечательно отдохнули! Очень рады, что именно Вы сделали наш день особенным.',
  },
  {
    name: 'Ольга',
    date: '2 июня 2025',
    photo: '/reviews/rev6.jpg',
    text: 'Николай очень оперативно подключился к подготовке нашего юбилея и удивил всех гостей видео, созданным с помощью искусственного интеллекта. Всё прошло замечательно, выдержаны стиль мероприятия и формат проведения. Благодарим! Уверена, что встретимся снова на семейных мероприятиях.',
  },
  {
    name: 'Sasha',
    date: '20 апреля',
    text: 'Договорились с Николаем, что он проведёт нашу свадьбу. Я очень хотела ведущего, но муж сомневался. Маленький спойлер: он потом весь вечер ходил и восхищался тем, как всё прошло) Мы в восторге, гости в восторге! Всё прошло весело и драйвово. Николай нашёл подход ко всем поколениям, от млада до велика — были и весёлые активности, и трогательные моменты, к которым он подводил настолько филигранно, что не хватало платочков! Огромное спасибо от имени нашей молодой семьи!',
  },
  {
    name: 'Вальтер',
    date: '30 августа 2025',
    text: 'Николай, спасибо за наш прекрасный праздник! Хотим сказать огромное спасибо за то, как он провёл нашу свадьбу — это было по-настоящему душевно и тепло. Всё прошло ровно в том ритме, в каком мы хотели: Николай ловко управлял временем, а его лёгкий юмор и чуткость к гостям создали ту самую семейную атмосферу. Мы были абсолютно спокойны и полностью доверились его профессионализму. Огромная благодарность за Ваш труд и внимание!',
  },
  {
    name: 'Анна',
    date: '17 сентября 2025',
    text: 'Свадьба была 13 сентября. После долгих поисков выбор пал на Николая. Ни капли не пожалели — нам всё понравилось, гости остались довольны. Программа прошла на одном дыхании, в лёгкой и весёлой атмосфере. Спасибо вам большое!',
  },
]

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
      {initials}
    </span>
  )
}

export function Reviews() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="reviews" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Отзывы</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Что говорят гости
          </h2>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + r.date} delay={(i % 3) * 90} className="break-inside-avoid">
              <article className="rounded-2xl border border-border glass p-6">
                <header className="flex items-center gap-3">
                  <Avatar name={r.name} />
                  <div className="min-w-0">
                    <div className="truncate font-display text-base font-semibold tracking-tight">
                      {r.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                </header>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <BadgeCheck className="size-3.5 text-primary" />
                    Сделка состоялась
                  </span>
                </div>

                <p className="mt-1.5 text-xs text-muted-foreground">{CATEGORY}</p>

                {r.photo && (
                  <button
                    type="button"
                    onClick={() => setActive(r.photo!)}
                    aria-label="Открыть фото с мероприятия"
                    className="group mt-4 block overflow-hidden rounded-xl border border-border"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.photo || '/placeholder.svg'}
                      alt={`Фото с мероприятия — отзыв, ${r.name}`}
                      loading="lazy"
                      className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                )}

                <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/90">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox src={active} alt="Фото из отзыва" onClose={() => setActive(null)} />
    </section>
  )
}
