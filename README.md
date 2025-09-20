# Portofolio :3

ini porto di buat nya karena gabut ygy, kalo ada yang mau make ini buat template bisa aja si nanti ada di bawah cara pake nya > = <

## ini yang di pake

jadi ini apa aja yang di pake buat porto nya

- **Next.js**: Kerangka kerja React untuk aplikasi web yang dirender di sisi server.
- **React**: Pustaka JavaScript untuk membangun antarmuka pengguna.
- **TypeScript**: Superset JavaScript yang menambahkan pengetikan statis.
- **Tailwind CSS**: Kerangka kerja CSS yang mengutamakan utilitas untuk desain yang cepat.
- **Elysia**: Kerangka kerja backend untuk membuat API.
- **Turso**: Database yang kompatibel dengan libSQL untuk menyimpan data buku tamu.
- **Resend**: Layanan untuk mengirim email.

## Cara Menggunakan

1.  **Kloning Repositori**

    ```bash
    git clone https://github.com/fadd00/porto-dika-fix.git
    cd porto-dika-fix
    ```

2.  **Instal Dependensi**

    Pastikan Anda telah menginstal [Bun](https://bun.sh/).

    ```bash
    bun install
    ```

3.  **Konfigurasi Variabel Lingkungan**

    Buat file `.env.local` di direktori root dan tambahkan variabel lingkungan berikut:

    ```
    TURSO_DATABASE_URL="YOUR_TURSO_DATABASE_URL"
    TURSO_AUTH_TOKEN="YOUR_TURSO_AUTH_TOKEN"
    RESEND_API_KEY="YOUR_RESEND_API_KEY"
    ```

    -   **Turso**:
        1.  Buat akun di [Turso](https://turso.tech/).
        2.  Instal Turso CLI. Di macOS, Anda bisa menggunakan Homebrew: `brew install tursodatabase/homebrew-tap/turso`. Untuk sistem operasi lain, ikuti petunjuk di situs mereka.
        3.  Login ke akun Turso Anda: `turso auth login`
        4.  Buat database baru: `turso db create nama-database-anda`
        5.  Dapatkan URL database: `turso db show nama-database-anda --url`
        6.  Buat token autentikasi: `turso db tokens create nama-database-anda`

    -   **Resend**:
        1.  Buat akun di [Resend](https://resend.com/).
        2.  Buat API Key baru dari dasbor Resend Anda.

4.  **Jalankan Server Pengembangan**

    ```bash
    bun run dev
    ```

    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Kegunaan

Aplikasi ini berfungsi sebagai portofolio online untuk menampilkan karya dan keahlian pengembang. Pengunjung dapat mempelajari lebih lanjut tentang pengembang, melihat proyek-proyek sebelumnya, dan meninggalkan pesan di buku tamu.

---

## Struktur Direktori

Berikut adalah penjelasan tentang struktur direktori proyek:

-   **`public/`**: Berisi file statis seperti gambar, font, dan file lain yang dapat diakses secara publik.
-   **`src/`**: Direktori utama untuk kode sumber aplikasi.
    -   **`app/`**: Inti dari aplikasi Next.js dengan App Router.
        -   **`api/`**: Berisi rute API yang dibuat dengan Elysia.
        -   **`sitemap.xml/`**: Rute untuk menghasilkan sitemap.
        -   **`globals.css`**: File CSS global.
        -   **`layout.tsx`**: Tata letak utama aplikasi.
        -   **`page.tsx`**: Halaman utama aplikasi.
    -   **`backend/`**: Kode sisi server, termasuk koneksi database dan logika API.
    -   **`components/`**: Komponen React yang dapat digunakan kembali yang digunakan di seluruh aplikasi.
    -   **`images/`**: Gambar yang digunakan dalam komponen aplikasi.
-   **`bun.lock`**: File kunci dependensi Bun.
-   **`eslint.config.mjs`**: File konfigurasi ESLint.
-   **`next-env.d.ts`**: File deklarasi tipe untuk Next.js.
-   **`next-sitemap.config.js`**: Konfigurasi untuk menghasilkan sitemap.
-   **`next.config.ts`**: File konfigurasi Next.js.
-   **`package.json`**: Berisi metadata proyek dan daftar dependensi.
-   **`postcss.config.mjs`**: File konfigurasi PostCSS.
-   **`README.md`**: File ini.
-   **`tsconfig.json`**: File konfigurasi TypeScript.

---
## Kegunaan Komponen

Berikut adalah penjelasan singkat tentang setiap komponen React yang digunakan dalam aplikasi ini:

-   **`About.tsx`**: Menampilkan bagian "Tentang Saya", memberikan ringkasan singkat tentang latar belakang dan minat.
-   **`Contact.tsx`**: Menyediakan formulir kontak bagi pengunjung untuk mengirim pesan, serta menampilkan informasi kontak lainnya.
-   **`Experience.tsx`**: Menampilkan riwayat pekerjaan dan pengalaman profesional.
-   **`Footer.tsx`**: Bagian footer situs web, biasanya berisi tautan hak cipta dan media sosial.
-   **`Guestbook.tsx`**: Memungkinkan pengunjung untuk meninggalkan pesan atau komentar, yang kemudian ditampilkan secara publik.
-   **`Header.tsx`**: Bilah navigasi atas, berisi tautan ke berbagai bagian situs.
-   **`Hero.tsx`**: Bagian pengantar utama di bagian atas halaman, biasanya dengan judul besar dan ajakan untuk bertindak.
-   **`MusicPlayer.tsx`**: Komponen untuk memutar musik, menampilkan lagu yang sedang diputar.
-   **`Projects.tsx`**: Menampilkan proyek-proyek yang telah dikerjakan.
-   **`VisitorCounter.tsx`**: Menampilkan jumlah total pengunjung situs web.

