export default function Footer() {
  return (
    <footer className="bg-cream text-ink">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-16 pb-10 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-display text-3xl tracking-[0.18em] uppercase">Vespér</p>
            <p className="mt-4 max-w-[34ch] text-[0.82rem] font-light leading-relaxed text-ink/60">
              Maison de parfum yang menyuling keheningan menjadi wangi. Satu botol per musim,
              dari atelier kami di Jakarta.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-ink/55">Navigasi</p>
            <ul className="mt-5 space-y-3 text-[0.85rem] text-ink/75">
              {[
                ['Rumah', '#rumah'],
                ['Koleksi', '#koleksi'],
                ['Anatomi', '#anatomi'],
                ['Suara', '#suara'],
                ['Reservasi', '#reservasi'],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="u-line">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-ink/55">Atelier</p>
            <address className="mt-5 space-y-3 text-[0.85rem] not-italic leading-relaxed text-ink/75">
              <p>Jl. Senyap No. 12, Menteng</p>
              <p>Jakarta 10310 · Indonesia</p>
              <p className="pt-2">
                <a href="mailto:bonjour@vesper.parfum" className="link">
                  bonjour@vesper.parfum
                </a>
              </p>
            </address>
            <div className="mt-8 space-y-1 text-[0.7rem] tracking-[0.18em] uppercase text-ink/45">
              <p>Min · Kam 10.00 — 20.00</p>
              <p>Jum · Ming, dengan janji</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t hairline pt-6 text-[0.7rem] tracking-wide text-ink/45 md:flex-row md:items-center md:justify-between">
          <p>© MMXXVI — Maison Vespér. Seluruh hak dilindungi.</p>
          <p className="it text-base text-ink/55">“Bukan untuk hadir; untuk diingat.”</p>
        </div>
      </div>
    </footer>
  )
}