import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-primary/20 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about.jpg"
            alt="Николай Семченков — ведущий мероприятий"
            className="w-full rounded-[1.6rem] border border-border object-cover shadow-2xl"
          />
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">О ведущем</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Николай Семченков
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Я веду праздники так, чтобы вечер шёл легко и по-настоящему. Никаких натянутых конкурсов
              и суеты — только спокойная харизма, тонкое чувство момента и внимание к каждому гостю.
            </p>
            <p>
              Тонко чувствую атмосферу зала: даже самые стеснительные гости включаются сами, а
              трогательные моменты сменяются искренним смехом. Всё держится в нужном ритме — от первого
              тоста до финального танца.
            </p>
            <p>
              Перед событием мы вместе продумываем сценарий, тайминг и детали, чтобы в день праздника вы
              были абсолютно спокойны и просто наслаждались своим вечером.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: '100+', l: 'проведённых вечеров' },
              { n: '5.0', l: 'средняя оценка гостей' },
              { n: '0', l: 'устаревших конкурсов' },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border glass p-4">
                <div className="font-display text-2xl font-semibold text-primary sm:text-3xl">{s.n}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
