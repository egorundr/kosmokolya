'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQ = [
  {
    q: 'Работаете ли Вы по договору?',
    a: 'Да, обязательно заключаем договор.',
  },
  {
    q: 'Можно ли посмотреть видео с мероприятий?',
    a: 'Да, по запросу отправляю портфолио и проморолики.',
  },
  {
    q: 'Работаете ли Вы со своим DJ и оборудованием?',
    a: 'Да, работаю в команде с DJ и предоставляю полный комплект оборудования.',
  },
  {
    q: 'Делаете ли Вы индивидуальный сценарий?',
    a: 'Да, каждая программа создаётся индивидуально под формат мероприятия и гостей.',
  },
  {
    q: 'У нас будет молодёжь и старшее поколение. Как сделать так, чтобы всем было интересно?',
    a: 'Я подбираю интерактивы и составляю программу так, чтобы комфортно чувствовали себя люди любых возрастов. Моя программа будет интересна и понятна как старшему поколению, так и молодёжи.',
  },
  {
    q: 'Будут ли перерывы на танцы и свободное общение?',
    a: 'Обязательно! Я соблюдаю баланс между программой и перерывами. Гости смогут потанцевать, пообщаться, подышать свежим воздухом или покурить — всё будет в меру, чтобы никто не устал.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Часто спрашивают</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Вопросы и ответы
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="rounded-2xl border border-border glass">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
