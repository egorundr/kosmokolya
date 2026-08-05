'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CONTACTS, NAV } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-border glass py-3' : 'py-5',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
            Николай <span className="text-primary">Семченков</span>
          </span>
          <span className="mt-0.5 text-[11px] tracking-wide text-muted-foreground sm:text-xs">
            {CONTACTS.handle}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:inline-flex"
          >
            Записаться
          </a>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-border glass p-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-card hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Записаться
          </a>
        </nav>
      )}
    </header>
  )
}
