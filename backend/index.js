const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection config
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',  
  user: process.env.DB_USER || 'hengly',
  password: process.env.DB_PASSWORD || 'hengly168',
  database: process.env.DB_NAME || 'storedb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Get all products
app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get one product by ID
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Create new product
app.post('/products', async (req, res) => {
  const { name, price, quantity, stock, picture } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO products (name, price, quantity, stock, picture) VALUES (?, ?, ?, ?, ?)',
      [name, price, quantity, stock, picture]
    );
    res.json({ id: result.insertId, name, price, quantity, stock, picture });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update product
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity, stock, picture } = req.body;
  try {
    await pool.query(
      'UPDATE products SET name=?, price=?, quantity=?, stock=?, picture=? WHERE id=?',
      [name, price, quantity, stock, picture, id]
    );
    res.json({ id, name, price, quantity, stock, picture });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete product
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id=?', [id]);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
