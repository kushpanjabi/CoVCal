require('dotenv').config();
const express = require('express');
const db = require('./db')
const morgan = require('morgan');
const app = express();

app.use(express.json());

// Get all Testing Sites

app.get('/sites', async (req, res) => {
    try {
        const results = await db.query("SELECT * from sites");
        console.log(results.rows);
        res.json({
            status: "Success",
            results: results.rows.length,
            data: {
                site: results.rows
            }
        });
    } catch (err) {
        console.log(err);
    }
});

// Get an individual Testing Site

app.get('/sites/:id', async (req, res) => {
    console.log(req.params);
    try {
        const results = await db.query(`SELECT * from sites WHERE id=$1`, [req.params.id]);
        res.status(200).json({
            status: "Success",
            data: {
                site: results.rows[0],
            }
        })
        console.log(results.rows);
    } catch (err) {
        console.log(err)
    }
});

// Create a Testing Site

app.post('/sites', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query('INSERT INTO sites (name, location, price_range) values ($1, $2, $3) returning *', [req.body.name, req.body.location, req.body.price_range]);
        console.log(results);
        res.status(201).json({
            status: "Success",
            data: {
                site: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Update Testing Site

app.put('/sites/:id', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query('UPDATE sites SET name = $1, location = $2, price_range = $3 where id = $4 returning *', [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        console.log(results.rows);
        res.status(200).json({
            status: "Success",
            data: {
                site: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Delete a Testing Site

app.delete('/sites/:id', async (req, res) => {
    try {
        const results = await db.query('DELETE FROM sites WHERE id = $1', [req.params.id]);
        console.log(results.rows);
        res.status(204).json({
            status: "Success",
            data: {
                site: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});