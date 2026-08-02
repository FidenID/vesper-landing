import Reveal from './Reveal.jsx'

/* Geometri piramida aroma — SVG garis, label, dot. */
function Pyramid() {
  const apex = [200, 120]
  const baseY = 460
  const halfBase = 196
  const W = (y) => ((y - apex[1]) / (baseY - apex[1])) * halfBase
  const tiers = [
    { top: 122, bot: 225, label: 'TOP', sub: 'Cahaya pertama' },
    { top: 230, bot: 345, label: 'HEART', sub: 'Detak wangi' },
    { top: 350, bot: 462, label: 'BASE', sub: 'Yang menyimpan' },
  ]

  return (
    <svg viewBox="0 0 400 490" className="w-full max-w-md" role="img" aria-label="Piramida aroma: top, heart, dan base notes">
      <defs>
        <pattern id="ptn" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="0.7" fill="var(--color-brass-dim)" opacity="0.55" />
        </pattern>
      </defs>
      {/* panduan vertikal putus-putus */}
      <line x1={apex[0]} y1={apex[1]} x2={apex[0]} y2={baseY} stroke="var(--color-ink)" strokeOpacity="0.16" strokeDasharray="2 6" />

      {tiers.map((t, i) => {
        const wTop = W(t.top)
        const wBot = W(t.bot)
        const mid = (t.top + t.bot) / 2
        return (
          <g key={t.label}>
            <polygon
              points={`${apex[0] - wTop},${t.top} ${apex[0] + wTop},${t.top} ${apex[0] + wBot},${t.bot} ${apex[0] - wBot},${t.bot}`}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="1"
            />
            {/* isi halus */}
            <polygon
              points={`${apex[0] - wTop},${t.top} ${apex[0] + wTop},${t.top} ${apex[0] + wBot},${t.bot} ${apex[0] - wBot},${t.bot}`}
              fill="url(#ptn)"
              opacity={0.35 * (1 - i * 0.25)}
            />
            <text x={apex[0]} y={mid + 4} textAnchor="middle" className="eyebrow" fill="var(--color-ink)" fontSize="10.5" letterSpacing="3">
              {t.label}
            </text>
            <text x={apex[0]} y={mid + 20} textAnchor="middle" className="font-display" fill="var(--color-ink)" fontSize="15">
              {t.sub}
            </text>
          </g>
        )
      })}

      {/* titik apex */}
      <circle cx={apex[0]} cy={apex[1]} r="2.4" fill="var(--color-brass)" />
    </svg>
  )
}

const LISTS = [
  { lvl: 'Top', items: ['Bergamot Calabria', 'Pink Pepper', 'Élèmi'] },
  { lvl: 'Heart', items: ['Orris', 'Tobacco Blossom', 'Jasmin Sambac'] },
  { lvl: 'Base', items: ['Iris Vetiver', 'Patchouli', 'Ambre'] },
]

export default function Notes() {
  return (
    <section id="anatomi" className="bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-6 md:pr-10">
          <Reveal>
            <p className="eyebrow text-brass">Anatomi · Piramida Aroma</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.2rem,4.4vw,3.6rem)] text-cream" style={{ fontVariationSettings: "'SOFT' 60, 'WONK' 0" }}>
              Setiap botol adalah{' '}
              <span className="it text-cream/80">arsitektur</span> tiga lantai.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[50ch] text-[0.92rem] font-light leading-[1.9] text-cream/65">
              Aroma berjalan ke atas: <span className="text-cream">puncak</span> menyambar dan pergi,
              <span className="text-cream"> jantung</span> berdenyut di kulit, dan
              <span className="text-cream"> dasar</span> menetap lebih lama daripada ingatan Anda
              tentang cara mengenakannya.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-12 space-y-0 border-t border-cream/15">
              {LISTS.map((row) => (
                <li key={row.lvl} className="flex items-baseline gap-5 border-b border-cream/15 py-5">
                  <span className="eyebrow w-14 shrink-0 text-cream/45">{row.lvl}</span>
                  <span className="text-[0.85rem] font-light tracking-wide text-cream/85">
                    {row.items.join('  ·  ')}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:flex md:justify-end">
          <Reveal delay={140}>
            <Pyramid />
          </Reveal>
        </div>
      </div>
    </section>
  )
}