# DESIGN — Maison VESPÉR

Keputusan visual yang direkam dari dunia yang dibangun, bukan dari niat.

## Tesis
Wangi adalah bahasa yang tidak diucapkan. Halaman ini menolak template startup AI
(gradient ungu-biru, glassmorphism, kartu seragam, shadow lembut, simetri membosankan)
demi majalah editorial dari rumah parfum kelas atas — Byredo/Le Labo/Aesop, bukan app SaaS.

## Palet (lagi satu strategi warna)
Restrained: neutrals hangat + satu aksen kuningan, dengan burgundy sesekali.
- kertas krem `#F2EDE4`, krem-2 `#EBE4D6`, krem-3 `#F7F4EC`
- tinta hangat `#201713` (hampir-hitam-cokelat) & `#31241D`
- kuningan tua `#A98E4A`, kuningan redup `#8D7A54`, batu `#8A857A`
- burgundy `#6E2E34`
- Latar solid, bukan gradient mencolok. Kedalaman lewat tinta pekat di hero/CTA, bukan bayangan.

## Tipografi
- Display: **Fraunces** (aksis `SOFT`/`WONK`, weight 300–400, tracking -0.03em).
  Fractures pada heading; axis wonky sebagai tanda tangan pada kata miring.
- Aksen italic: **Cormorant** (bobot ringan) untuk kata bersayap / kutipan.
- Body & label: **Inter** ringan, hanya untuk body clusters dan label huruf besar
  kecil ber-spasi 0.32em. Tidak pernah dipakai untuk heading.

## Komponen / Bahasa
- Rambut tipis **1px** (`hairline`) sebagai pemisah, bukan shadow.
- Tombol **ghost** border 1px; isi naik dari bawah saat hover (fill, bukan shadow/scale).
- Underline animasi `scaleX` (origin kiri) untuk tautan — bukan scale/shadow berlebihan.
- Card: tanpa shadow, ring 1px + kertas-3; crop foto dramatis, asimetri sengaja.
- Ilustrasi = geometri SVG garis (piramida aroma, stamp berputar). Tanpa emoji ikon.
- Reveal-on-scroll: eksponen (single moment yang diorkestra), bukan efek tersebar.
- Gradien hanya dipakai: overlay kedalaman foto hero + fill tombol, bukan text-gradient.

## Komposisi & alur scroll
1. **Hero** — full-bleed botol gelap, headung lautan, dua kolom teks, corner text kecil, CTA.
2. **Rumah** — 2 kolom asimetris (teks sempit kiri / gambar lebar kanan) + stamp berputar.
3. **Koleksi** — grid 12 dipatahkan: kartu 7/5 beroffset + blok manifesto (bukan kartu ke-4).
4. **Anatomi** — bagian gelap kontras; piramida top/heart/base sebagai SVG garis + daftar.
5. **Suara** — dua kutipan serif besar, koinsist, tanpa kartu/avatar bulat.
6. **Reservasi** — full-width gelap, satu tombol ghost, bingkai tipis editorial.
7. **Footer** — minimal krem, kolom, hakimbing.

## Detail yang "mahal"
- Micro-interaction: fade-in on scroll, underline animate, stamp berputar 28s, hover gambar
  scale halus (1.04) pada foto produk.
- Space: banyak negative space; lebih banyak ruang di atas heading daripada di bawahnya.
- Satu CTA per viewport utama. Tombol outline, bukan pill gradient.

## Ringkasan teknis
- React 18 + Vite 5 + Tailwind v4 (`@tailwindcss/vite`, token di `@theme`).
- Google Fonts: Fraunces, Cormorant, Inter.
- Fully responsive (grid-cols-1 → md:grid-cols-12; hero min-h-screen).
- Semua 5 foto produk dari Unsplash diverifikasi memuat (200 OK, naturalWidth>0).

## Verifikasi
- `npm run build` lolos (41 modul, JS 51.6 kB gzip, CSS 6.1 kB gzip).
- Tidak ada error console / JS.
- `prefers-reduced-motion` menonaktifkan reveal-on-scroll.