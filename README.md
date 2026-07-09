# ANAYA Roblox Portfolio — Vercel Ready

Website portfolio singkat bertema graffiti + techno clean untuk Roblox builder dan scripting.

## Isi Project

- `index.html` — frontend utama
- `assets/css/style.css` — desain graffiti techno responsive
- `assets/js/main.js` — animasi, fetch backend, submit form
- `api/projects.js` — backend endpoint daftar project
- `api/contact.js` — backend endpoint contact/booking validator
- `api/health.js` — backend health check
- `vercel.json` — konfigurasi Vercel
- `package.json` — script dev untuk Vercel CLI

## Project yang Masuk

- Secret Alley
- Swara Rembulan
- After Party
- NH Skatepark City
- Street Children Club

## Cara Deploy ke Vercel via GitHub

1. Extract ZIP ini.
2. Upload semua file ke repository GitHub.
3. Buka Vercel.
4. Add New Project.
5. Import repository.
6. Framework preset: `Other`.
7. Build command: kosongin.
8. Output directory: kosongin.
9. Deploy.

## Test Backend Setelah Deploy

Buka URL berikut:

```txt
https://domain-lu.vercel.app/api/health
https://domain-lu.vercel.app/api/projects
```

Kalau muncul JSON, backend aman.

## Jalankan Lokal

Install Vercel CLI:

```bash
npm install
npm run dev
```

Atau:

```bash
npm i -g vercel
vercel dev
```

## Catatan Backend

Endpoint `/api/contact` saat ini validasi data dan mencetak request ke log Vercel.

Kalau mau form-nya beneran masuk ke:
- email,
- database,
- Discord webhook,
- Telegram bot,

tinggal patch bagian `api/contact.js`.

## Link Utama

- Roblox Profile: https://www.roblox.com/users/8522985325/profile
- ANAYA REALM STUDIOS: https://www.roblox.com/communities/975964654/ANAYA-REALM#!/about
- WhatsApp Topup Robux Group: https://chat.whatsapp.com/FBwIrfOydHcJFPsbkTtzEx?s=cl&p=a&ilr=4&amv=0
