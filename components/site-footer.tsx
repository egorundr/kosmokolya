import { Phone, Send, Camera } from 'lucide-react'
import { CONTACTS } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="font-display text-lg font-semibold tracking-tight">
            Николай <span className="text-primary">Семченков</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Современный ведущий на свадьбу, юбилей и корпоратив. Праздник без кринжа — с лёгкой
            атмосферой и живыми эмоциями.
          </p>
        </div>

        <div className="grid gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Контакты</p>
          <a
            href={CONTACTS.phoneHref}
            className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <Phone className="size-4 text-primary" />
            {CONTACTS.phone}
          </a>
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <Send className="size-4 text-primary" />
            {CONTACTS.telegramHandle}
          </a>
          <a
            href={CONTACTS.vk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <span className="flex size-4 items-center justify-center text-[11px] font-bold text-primary">
              VK
            </span>
            {CONTACTS.vkLabel}
          </a>
          <a
            href={CONTACTS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <Camera className="size-4 text-primary" />
            {CONTACTS.instagramLabel}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Николай Семченков. Все права защищены.
      </div>
    </footer>
  )
}
