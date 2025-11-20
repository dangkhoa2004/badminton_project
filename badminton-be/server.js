const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Cho phép Frontend gọi API (CORS)
app.use(cors());
app.use(express.json());

// Kết nối Database XAMPP
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Mặc định XAMPP là root
    password: '',      // Mặc định XAMPP không có pass
    database: 'badminton-shop'
});

db.connect(err => {
    if (err) {
        console.error('Lỗi kết nối CSDL:', err);
        return;
    }
    console.log('Đã kết nối MySQL thành công!');
});

// API lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Backend đang chạy tại http://localhost:${port}`);
});