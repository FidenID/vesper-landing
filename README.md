# VESPÉR — Maison de Parfum

Landing page editorial untuk rumah parfum high-end. React + Vite + Tailwind v4.
Konsep: "wangi adalah bahasa yang tidak diucapkan" — editorial magazine ala
Byredo / Le Labo, menghindari tampilan startup AI (gradient, glass, kartu seragam).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produksi → dist/
```

## Struktur
- `src/index.css` — token desain (`@theme`), komponen tombol/eyebrow/reveal, hover.
- `src/components/` — Hero, About, Showcase, Notes, Testimonial, CTA, Footer, Nav, Reveal.
- `src/data.js` — konten (produk, gambar).
- `DESIGN.md` — rekaman keputusan visual.

## Kustomisasi
- Ganti nama/brand: file `Hero.jsx`, `Nav.jsx`, `Footer.jsx` & `data.js`.
- Ganti tagline: blok `<h1>` di `Hero.jsx`.
- Ganti foto: `src/data.js` `IMG` & `PRODUCTS[].img` (foto Unsplash, dicek valid).

Foto masih placeholder Unsplash; ganti dengan foto produk asli untuk produksi
(`src/data.js`).