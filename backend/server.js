const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 3000;
require('dotenv').config()

let connectionData = {
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.DBUSER,
  database: process.env.DATABASE
}

var db = mysql.createConnection(connectionData);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/booking', (req, res) => {
  db.connect((error) => {
    if (error) {
      res.status(500).send({ error: error.message });
      return;
    }
    let query = "SELECT * FROM Bookings";
    db.query(query, (error, data) => {
      if (error) {
        res.status(500).send({ error: error.message });
        return;
      }
      res.json(data);
    });
  });
});

app.get('/deleteRoom/:id', (req, res) => {
  const id = req.params.id;
  db.connect((error) => {
    if (error) {
      res.status(500).send({ error: error.message });
      return;
    }

    let deleteQuery = `DELETE FROM Bookings WHERE bookingID='${id}'`;
    db.query(deleteQuery, (error, result) => {
      if (error) {
        res.status(500).send({ error: error.message });
        return;
      }
      res.send({ message: `Room ${id} deleted` });
    });
  });
});

app.get('/addRoom/:roomID/:instructor/:eventDetails/:startTime/:endTime/:status/:createdAt/:updatedAt', (req, res) => {
  const { roomID, instructor, eventDetails, startTime, endTime, status, createdAt, updatedAt } = req.params;
  db.connect((error) => {
    if (error) {
      res.status(500).send({ error: error.message });
      return;
    }

    let addQuery = `INSERT INTO Bookings (bookingID, roomID, instructor, eventDetails, startTime, endTime, status, createdAt, updatedAt) VALUES (NULL, '${roomID}', '${instructor}', '${eventDetails}', '${startTime}', '${endTime}', '${status}', '${createdAt}', '${updatedAt}')`;
    db.query(addQuery, (error, result) => {
      if (error) {
        res.status(500).send({ error: error.message });
        return;
      }
      res.send({ message: 'Your room was added' });
    });
  });
});

app.get('/updateRoom/:oldRoomID/:newRoomID/:newInstructor/:newEventDetails/:newStatus/:newStartTime/:newEndTime/:newUpdatedAt', (request, response) => {
  const { oldRoomID, newRoomID, newInstructor, newEventDetails, newStatus, newStartTime, newEndTime, newUpdatedAt} = request.params
  db.connect((error)=>{
    if (error) throw error
    let query = `UPDATE Bookings SET roomID='${newRoomID}',instructor='${newInstructor}',eventDetails='${newEventDetails}',startTime='${newStartTime}',endTime='${newEndTime}',status='${newStatus}', updatedAt='{${newUpdatedAt}}' WHERE roomID = '${oldRoomID}'`
    let values = [newRoomID, newInstructor, newEventDetails, newStartTime, newEndTime, newStatus, newUpdatedAt, oldRoomID]
    console.log(query);
    db.query(query, values, (error, result)=>{
      if (error) throw error
      response.send(result)
    })
  })
   
})

// Listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
