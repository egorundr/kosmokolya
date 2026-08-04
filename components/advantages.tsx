import {
  Sparkles,
  HeartHandshake,
  Users,
  Wand2,
  ClipboardList,
  Smile,
  Feather,
  Flame,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  {
    icon: Sparkles,
    title: 'Современный формат',
    text: 'Актуальный ведущий вместо привычного «тамады» — стильно, динамично и по делу.',
  },
  {
    icon: Flame,
    title: 'Без устаревших конкурсов',
    text: 'Никакого кринжа: развлечения, за которые не будет стыдно ни вам, ни гостям.',
  },
  {
    icon: Feather,
    title: 'Лёгкая атмосфера',
    text: 'Вечер идёт непринуждённо и на одном дыхании, без пауз и неловкости.',
  },
  {
    icon: Users,
    title: 'Внимание каждому гостю',
    text: 'Нахожу подход к любому поколению — от самых юных до самых старших.',
  },
  {
    icon: Wand2,
    title: 'Гибкий сценарий',
    text: 'Программа собирается под ваш формат и меняется прямо по ходу вечера.',
  },
  {
    icon: ClipboardList,
    title: 'Помощь в подготовке',
    text: 'Вместе продумываем тайминг и детали ещё до начала праздника.',
  },
  {
    icon: Smile,
    title: 'Спокойная харизма',
    text: 'Уверенно держу зал без давления и лишнего пафоса.',
  },
  {
    icon: HeartHandshake,
    title: 'Живые эмоции',
    text: 'Искренний смех и трогательные моменты, которые хочется вспоминать.',
  },
]

export function Advantages() {
  return (
    <section className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Почему я</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Что вы получаете
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-border glass p-6 transition hover:border-primary/50">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
