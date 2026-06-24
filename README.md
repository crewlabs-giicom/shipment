# 🚢 Shipment Monitor

Aplikasi monitoring shipment impor China → Indonesia, berbasis Node.js 22 + Express.

## Cara Install & Jalankan

### 1. Pastikan Node.js 22 sudah terinstall
```bash
node --version   # harus v22.x.x
```
Kalau belum, download di: https://nodejs.org

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan aplikasi
```bash
# Mode normal
npm start

# Mode development (auto-restart saat file berubah)
npm run dev
```

### 4. Buka di browser
```
http://localhost:3000
```

---

## Struktur Folder

```
shipment-monitor/
├── server.js              ← Server Express.js
├── package.json           ← Konfigurasi project
├── data/
│   └── shipments.json     ← Data tersimpan di sini (otomatis dibuat)
└── public/
    └── index.html         ← UI aplikasi
```

## API Endpoints

| Method | URL | Keterangan |
|--------|-----|-----------|
| GET | `/api/shipments` | Ambil semua data |
| POST | `/api/shipments` | Simpan semua data (replace) |
| PUT | `/api/shipments/:id` | Update satu shipment |
| DELETE | `/api/shipments/:id` | Hapus satu shipment |
| DELETE | `/api/shipments` | Hapus semua data |

## Ganti Port (opsional)

```bash
PORT=8080 npm start
```
