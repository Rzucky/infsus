const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432
});

app.post('/createShop', async (req, res) => {
  const { name, employees } = req.body;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const shopQuery = 'INSERT INTO shops(name) VALUES($1) RETURNING id';
    const shopResult = await client.query(shopQuery, [name]);

    const shopId = shopResult.rows[0].id;

    const employeeQuery = 'INSERT INTO employees(name, role, start_date, shop_id) VALUES($1, $2, $3, $4)';
    for(let employee of employees) {
      await client.query(employeeQuery, [employee.name, employee.role, employee.startDate, shopId]);
    }

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }

  res.status(201).json({ message: 'Shop created successfully.' });
});

app.post('/editShop', async (req, res) => {
  const { name, employees } = req.body;

  // Begin transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const shopResult = await client.query('SELECT FROM shops WHERE name = $1', [name]);

    const shopId = shopResult.rows[0].id;

    // there are simpler ways with update but this also works for this example
    await client.query('DELETE FROM employees WHERE shop_id = $1', [shopId]);

    const employeeQuery = 'INSERT INTO employees(name, role, start_date, shop_id) VALUES($1, $2, $3, $4)';
    for(let employee of employees) {
      await client.query(employeeQuery, [employee.name, employee.role, employee.startDate, shopId]);
    }

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }

  res.status(201).json({ message: 'Shop created successfully.' });
});

app.get('/employees', async (req, res) => {
  const result = await pool.query(
    `SELECT s.name AS shop_name, e.name AS employee_name, e.role, e.start_date 
    FROM shops s 
    JOIN employees e 
    ON s.id = e.shop_id`
  );

  const data = result.rows.reduce((acc, row) => {
    if (!acc[row.shop_name]) {
      acc[row.shop_name] = [];
    }

    acc[row.shop_name].push({
      name: row.employee_name,
      role: row.role,
      startDate: row.start_date,
    });

    return acc;
  }, {});

  res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
