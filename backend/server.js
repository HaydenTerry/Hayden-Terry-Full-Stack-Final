const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 3000;

// Database connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
    host: 'localhost',   // Host where the MySQL server is running
    user: 'root',        // MySQL user
    password: 'GoTechMavs!',        // MySQL password
    database: 'AirNWKTC',// Database name
    port: 3306           // Port number if not default (3306 is the default)
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Bookings endpoint to fetch all bookings
app.get('/bookings', (req, res) => {
    pool.query('SELECT * FROM Bookings', (error, results, fields) => {
        if (error) {
            return res.status(500).send('Database query failed: ' + error.message);
        }
        res.send(results);
    });
});

// Graceful shutdown: close database pool
process.on('SIGINT', () => {
    pool.end(err => {
        if (err) {
            console.error('Error closing the database pool:', err.message);
        } else {
            console.log('Database pool closed.');
        }
        process.exit();
    });
});

// Server listening on specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
