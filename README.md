# Gwen Portfolio — Pejuangdeadline.it

### Liquid-Core Edition (2026)

Sebuah karya portfolio minimalist dengan estetika **Premium Glassmorphism** dan pengalaman interaktif yang fluid.

---

## ✨ Features

- **Split-Panel Architecture**: Desain dual-panel yang seimbang antara konten visual dan informasi teks.
- **Dynamic Dark/Light Mode**: Perpindahan tema super halus dengan persistensi pilihan via `localStorage`.
- **The "Visionaries" Trust Stamp**: Elemen tipografi melingkar yang menempel secara fluid pada headline utama, memberikan identitas visual yang kuat.
- **Interactive Cursor Orb**: Lampu ambient yang mengikuti kursor dengan pergerakan _lagging_ (lerp) yang organik.
- **Glassmorphism UI**: Menggunakan teknik _backdrop-filter_ berlapis untuk menciptakan efek kaca cair yang mewah.
- **Micro-interactions**: Klik ripple effect, scroll progress bar, dan hover state yang responsif.
- **Fully Responsive**: Layout yang dioptimalkan untuk berbagai ukuran layar, dari desktop hingga perangkat mobile paling kecil.

---

## 🚀 Quick Start

**Cara termudah untuk mencoba:**
Cukup buka `index.html` langsung di browser pilihanmu (klik kanan → Open with Chrome/Safari/Edge).

**Untuk Pengembangan (Recommended):**

1. Gunakan ekstensi **Live Server** di VS Code.
2. Klik kanan `index.html` → **Open with Live Server**.
3. Browser akan otomatis memuat ulang (_hot-reload_) setiap kali kamu menyimpan perubahan kode.

---

## 📂 Project Structure

Proyek ini dibangun dengan pendekatan _zero-dependency_ (Vanilla JS, CSS, HTML) untuk performa maksimal.

```
pejuangdeadlineit/
├── index.html       # Struktur utama & konten High-Performance Architecture
├── style.css        # Core design system (Glass tokens, Themes, Responsiveness)
├── script.js        # Logic engine (CursorOrb, WorkArchive, ThemeToggle)
└── public/
    └── assets/      # Media assets (Video background, Icons, Mockups)
```

---

## 🛠️ Main Components (Class-based JS)

| Module        | Purpose                                                                       |
| ------------- | ----------------------------------------------------------------------------- |
| `CursorOrb`   | Mengatur pergerakan cahaya ambient yang mengikuti kursor dengan fungsi lerp.  |
| `WorkArchive` | Mengelola interaksi focus/blur pada daftar proyek di samping kanan.           |
| `ThemeToggle` | Menangani perpindahan tema Dark/Light serta sinkronisasi ikon matahari/bulan. |
| `CTARipple`   | Memberikan efek riak air (ripple) pada tombol Call to Action.                 |

Setiap modul diinisialisasi secara bersih melalui fungsi `bootstrap()` tanpa mencemari global namespace.

---

## 🎨 Design Tokens

Website ini menggunakan sistem token warna berbasis opacity di `style.css`:

- **Dark Mode (Default)**: Menggunakan variabel `--w100` hingga `--w02` berbasis putih dengan berbagai transparansi di atas background hitam.
- **Light Mode**: Variabel yang sama secara otomatis di-_flip_ menjadi berbasis hitam di atas background putih/silver saat mode terang aktif.

---

## 🌐 Deployment

Portfolio ini siap di-deploy ke platform statis seperti:

1. **GitHub Pages**: Gratis dan mudah.
2. **Vercel / Netlify**: Sangat cepat dengan build otomatis.
3. **Custom Domain**: Direkomendasikan menghubungkan domain `pejuangdeadline.it` untuk branding profesional.

---

**©2026 Pejuangdeadline.it**
Made with ☕ and minimalist soul.
