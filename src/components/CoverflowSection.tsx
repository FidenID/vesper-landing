import { CoverflowCarousel } from './ui/coverflow-carousel'
import type { CoverflowSlide } from './ui/coverflow-carousel'

const SLIDES: CoverflowSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=640&h=640&fit=crop&q=70&auto=format',
    alt: 'Botol parfum kristal bening di atas permukaan marmer putih',
    title: 'Vespér Blanc',
    subtitle: 'Eau de Parfum',
    meta: [
      { label: 'Konsentrasi', value: '18%' },
      { label: 'Ukuran', value: '50 ml' },
      { label: 'Musim', value: 'Musim Semi' },
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=640&h=640&fit=crop&q=70&auto=format',
    alt: 'Parfum mewah dengan latar belakang bunga mawar merah',
    title: 'Vespér Noir',
    subtitle: 'Extrait de Parfum',
    meta: [
      { label: 'Konsentrasi', value: '25%' },
      { label: 'Ukuran', value: '30 ml' },
      { label: 'Musim', value: 'Musim Gugur' },
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=640&h=640&fit=crop&q=70&auto=format',
    alt: 'Koleksi botol parfum berjejer di rak kayu gelap',
    title: 'Vespér Ambre',
    subtitle: 'Eau de Parfum',
    meta: [
      { label: 'Konsentrasi', value: '20%' },
      { label: 'Ukuran', value: '50 ml' },
      { label: 'Musim', value: 'Musim Dingin' },
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=640&h=640&fit=crop&q=70&auto=format',
    alt: 'Botol parfum elegan dengan warna emas dan kemasan hitam premium',
    title: 'Vespér Or',
    subtitle: 'Parfum',
    meta: [
      { label: 'Konsentrasi', value: '30%' },
      { label: 'Ukuran', value: '15 ml' },
      { label: 'Musim', value: 'Sepanjang Tahun' },
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=640&h=640&fit=crop&q=70&auto=format',
    alt: 'Parfum oriental dengan rempah dan oud di atas kain sutra merah',
    title: 'Vespér Oud',
    subtitle: 'Eau de Parfum Intense',
    meta: [
      { label: 'Konsentrasi', value: '22%' },
      { label: 'Ukuran', value: '50 ml' },
      { label: 'Musim', value: 'Musim Gugur' },
    ],
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=640&h=640&fit=crop&q=70&auto=format',
    alt: 'Botol parfum minimalis transparan di samping bunga putih segar',
    title: 'Vespér Lys',
    subtitle: 'Eau de Toilette',
    meta: [
      { label: 'Konsentrasi', value: '12%' },
      { label: 'Ukuran', value: '75 ml' },
      { label: 'Musim', value: 'Musim Panas' },
    ],
  },
]

export default function CoverflowSection() {
  return (
    <section className="w-full overflow-hidden py-20 md:py-32" style={{ backgroundColor: 'var(--color-ink)' }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p
            className="eyebrow mb-4"
            style={{ color: 'var(--color-brass)' }}
          >
            Seluruh Koleksi · 2024
          </p>
          <h2
            className="display text-[clamp(2rem,4.5vw,3.4rem)]"
            style={{
              color: 'var(--color-cream)',
              fontVariationSettings: "'SOFT' 60, 'WONK' 1",
            }}
          >
            Jelajahi setiap{' '}
            <span className="it font-light" style={{ color: 'var(--color-brass)' }}>
              aroma.
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[42ch] text-[0.88rem] font-light leading-relaxed"
            style={{ color: 'var(--color-cream-2)', opacity: 0.6 }}
          >
            Geser untuk menjelajahi koleksi kami. Klik nama untuk melihat detail aroma.
          </p>
        </div>

        {/* Carousel */}
        <CoverflowCarousel
          slides={SLIDES}
          showCaption
          showNavigation
          showPagination
          cardWidth="clamp(180px, 26vw, 300px)"
          label="Koleksi parfum Vespér"
          className="[--cf-card:clamp(180px,26vw,300px)]"
        />
      </div>
    </section>
  )
}
