import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Buat koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Tes koneksi
db.connect((err) => {
  if (err) {
    console.error('❌ Gagal Konek Database:', err.message);
    return;
  }
  console.log('✅ Database Railway Terhubung! Port:', process.env.DB_PORT);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend jalan di port ${PORT}`));