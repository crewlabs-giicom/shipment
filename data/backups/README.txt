Folder ini berisi backup otomatis harian.

Server akan membuat backup setiap hari (sekali per hari, saat aplikasi dijalankan):
- shipments_YYYY-MM-DD.json  (data shipment)
- config_YYYY-MM-DD.json     (master data + integrasi)
- users_YYYY-MM-DD.json       (akun)
- comments_YYYY-MM-DD.json    (komentar)

Untuk memulihkan data: copy file backup yang diinginkan ke folder data/
(hapus tanggal dari nama file, mis. shipments_2026-06-18.json -> shipments.json),
lalu restart aplikasi.

Backup lama bisa dihapus manual jika folder sudah terlalu besar.
