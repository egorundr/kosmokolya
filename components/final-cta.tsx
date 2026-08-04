import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CONTACTS } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="relative px-5 py-20 sm:py-28">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-transparent to-primary/10" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />

        <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Давайте сделаем ваш вечер лёгким и незабываемым
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
          Напишите мне в Telegram — обсудим дату, формат и детали. Отвечаю быстро и с удовольствием.
        </p>

        <div className="mt-9 flex justify-center">
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Записаться
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
