const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 3000;
//runs the query to add a new table
const query = `
  INSERT INTO \`Bookings\` (\`roomID\`, \`instructor\`, \`eventDetails\`, \`startTime\`, \`endTime\`, \`status\`, \`createdAt\`, \`updatedAt\`) 
  VALUES ('315', 'MR TEST', 'TEST PROJECT', '2024-05-10 10:30:00', '2024-05-10 11:30:00', '1', '2024-05-10 16:02:20.000000', '2024-05-10 16:02:20.000000');
`;

//connects to the database
const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'GoTechMavs!', 
    database: 'AirNWKTC',
    port: 3306           
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//bookings route to show database info
app.get('/bookings', (req, res) => {
    pool.query('SELECT * FROM Bookings', (error, results, fields) => {
        if (error) {
            return res.status(500).send('Database query failed: ' + error.message);
        }
        res.send(results);
    });
});

ConnectionCloseError.query(query, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log('Rows Affected:', results.affectedRows);
});


// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
