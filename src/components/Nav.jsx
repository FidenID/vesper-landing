import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Rumah', href: '#rumah' },
  { label: 'Koleksi', href: '#koleksi' },
  { label: 'Anatomi', href: '#anatomi' },
  { label: 'Suara', href: '#suara' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = scrolled // ukuran background krem setelah scroll

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        dark ? 'bg-cream text-ink' : 'text-cream'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 transition-colors ${
          dark ? 'border-b border-ink/10' : 'border-b border-cream/20'
        }`}
      >
        <a
          href="#top"
          className="font-display text-[1.35rem] tracking-[0.18em] uppercase"
          aria-label="VESPÉR — beranda"
        >
          Vespér
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow u-line ${dark ? 'text-ink/70 hover:text-ink' : 'text-cream/70 hover:text-cream'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservasi"
          className={`btn-ghost btn-ghost--mini ${dark ? '' : 'btn-ghost--light'}`}
        >
          <span>Reservasi</span>
        </a>
      </div>
    </header>
  )
}