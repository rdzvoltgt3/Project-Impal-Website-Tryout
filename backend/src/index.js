import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Cek koneksi pool (opsional)
db.getConnection((err, connection) => {
  if (err) {
    console.error('Koneksi database gagal:', err.code);
  } else {
    console.log('Terhubung ke database MySQL (Pool)');
    connection.release(); // Kembalikan koneksi ke pool
  }
});

app.listen(3001, () => {
  console.log('Server berjalan di port 3001');
});

// Endpoint untuk registrasi
app.post('/user/register', (req, res) => {
  const { nama, email, password, alamat, nomor_telepon } = req.body;

  const checkLastIdQuery = "SELECT id_user FROM user ORDER BY id_user DESC LIMIT 1";

  db.query(checkLastIdQuery, (err, results) => {
    if (err) {
      console.error("Gagal mengambil ID terakhir:", err);
      return res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }

    let newId = "USR-001";

    if (results.length > 0) {
      const lastId = results[0].id_user;
      const lastNumber = parseInt(lastId.split('-')[1]);
      const nextNumber = lastNumber + 1;

      newId = `USR-${nextNumber.toString().padStart(3, '0')}`;
    }

    const sqlInsert = "INSERT INTO user (id_user, nama, email, password, alamat, nomor_telepon) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sqlInsert, [newId, nama, email, password, alamat, nomor_telepon], (insertErr, result) => {
      if (insertErr) {
        console.error("Gagal insert data:", insertErr);
        return res.status(500).json({ error: "Gagal simpan data" });
      }

      res.json({ message: "Data berhasil disimpan!", id: newId });
    });
  });
});

// Endpoint untuk login
app.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  const sqlSelect = "SELECT * FROM user WHERE email = ? AND password = ?";

  db.query(sqlSelect, [email, password], (err, results) => {
    if (err) {
      console.error("Gagal mengambil data:", err);
      return res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }

    if (results.length > 0) {
      const userData = results[0];
      res.json({ message: "Login berhasil!", data: userData });
    } else if (results.length === 0) {
      res.status(401).json({ error: "Email atau password salah" });
    }
  });
});
