const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { randomUUID } = require('crypto');
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const app = express();
app.use(express.json());
app.use(cors())

const dotenv = require("dotenv")

dotenv.config()


const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl:true
});

app.post('/createShop', async (req, res) => {
  const { name, employees } = req.body;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const shopQuery = 'INSERT INTO shops(id, name) VALUES($1, $2) RETURNING id';
    const shopResult = await client.query(shopQuery, [randomUUID(), name]);

    const shopId = shopResult.rows[0].id;
    const employeeQuery = 'INSERT INTO employees(name, role, startdate, shop_id) VALUES($1, $2, $3, $4)';
    for(let employee of employees) {
      const date = new Date(employee.startDate)
      await client.query(employeeQuery, [employee.name, employee.role, date, shopId]);
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
    `SELECT s.name AS name, e.name AS employee_name, e.role, e.startdate 
    FROM shops s 
    JOIN employees e 
    ON s.id = e.shop_id`
  );



  const data = result.rows.reduce((acc, row) => {
    if (!acc[row.name]) {
      acc[row.name] = [];
    }

    acc[row.name].push({
      name: row.employee_name,
      role: row.role,
      startDate: row.startdate,
    });

    return acc;

  }, {});
  console.log(data)
  res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
