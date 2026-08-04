import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    step: 'Шаг 1',
    title: 'Знакомство',
    text: 'Созваниваемся, обсуждаем формат, пожелания и настроение вашего вечера.',
  },
  {
    step: 'Шаг 2',
    title: 'Сценарий',
    text: 'Собираю программу и тайминг под вас, согласовываем детали и акценты.',
  },
  {
    step: 'Шаг 3',
    title: 'Праздник',
    text: 'Веду вечер легко и в нужном ритме — вы просто наслаждаетесь моментом.',
  },
  {
    step: 'Шаг 4',
    title: 'Воспоминания',
    text: 'Остаются искренние эмоции и вечер, который хочется вспоминать с улыбкой.',
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Как проходит</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            От заявки до праздника
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="relative">
              <div className="h-full rounded-2xl border border-border glass p-6">
                <div className="font-display text-5xl font-semibold text-primary/30">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary">{s.step}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
