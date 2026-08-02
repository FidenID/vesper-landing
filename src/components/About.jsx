import { IMG } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="rumah" className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8">
        {/* ---- Kolom teks sempit (kiri) ---- */}
        <div className="md:col-span-5 md:pt-10">
          <Reveal>
            <p className="eyebrow text-ink/70">Rumah · Since MMXXVI</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] text-ink" style={{ fontVariationSettings: "'SOFT' 60, 'WONK' 0" }}>
              Kita tidak membuat parfum.
              <br />
              Kita <span className="it">menyunting</span> keheningan.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[52ch] text-[0.95rem] font-light leading-[1.9] text-ink/75">
              Setiap botol melewati <em className="not-italic text-ink">maserasi lambat</em> selama
              tidak kurang dari sembilan puluh hari. Tidak ada wewangian yang menyela kisah botol
              sebelumnya — satu koleksi, satu musim, satu kesan. Bahan ditangani di meja yang sama,
              dengan tangan yang menghafal berat setiap tetes.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t hairline pt-8">
              <div>
                <dt className="eyebrow text-ink/60">Est.</dt>
                <dd className="font-display mt-2 text-2xl text-ink">MMXXVI</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/60">Studi</dt>
                <dd className="font-display mt-2 text-2xl text-ink">Atelier, Jakarta</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/60">Infus</dt>
                <dd className="font-display mt-2 text-2xl text-ink">90 hari</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/60">Edisi</dt>
                <dd className="font-display mt-2 text-2xl text-ink">Satu / musim</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* ---- Kolom gambar lebar (kanan), crop dramatis & asimetris ---- */}
        <div className="relative md:col-span-7">
          <Reveal delay={140}>
            <div className="relative overflow-hidden">
              <img
                src={IMG.about}
                alt="Botol parfum VESPÉR di atas meja atelier beige"
                className="crop aspect-[4/5] w-full object-cover md:aspect-[16/11]"
                loading="lazy"
              />
              {/* caption in-set, overlap gambar */}
              <figcaption className="absolute bottom-4 left-4 bg-cream/90 px-4 py-2 text-[0.7rem] tracking-[0.18em] uppercase text-ink/70 backdrop-blur-sm">
                No. 01 · Material murni, tanpa kompromi
              </figcaption>
            </div>
          </Reveal>

          {/* stamp berputar, overlapping sudut */}
          <Reveal delay={240}>
            <div className="absolute -left-6 -bottom-8 hidden h-32 w-32 md:block lg:-left-10">
              <svg viewBox="0 0 100 100" className="h-full w-full stamp" aria-hidden="true">
                <defs>
                  <path id="stamp-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <circle cx="50" cy="50" r="36" fill="none" stroke="var(--color-brass-dim)" strokeWidth="0.5" />
                <text className="eyebrow" fill="#a98e4a" fontSize="8.2" letterSpacing="2.6">
                  <textPath href="#stamp-circle">VESPÉR · EST. MMXXVI · STUDIO ATELIER ·</textPath>
                </text>
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className="font-display"
                  fontSize="20"
                  fill="var(--color-ink)"
                >
                  V
                </text>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}