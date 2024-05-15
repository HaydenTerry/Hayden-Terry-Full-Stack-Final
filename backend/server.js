const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 3000;
require('dotenv').config()

let connectionData = {
  host:process.env.HOST,
  password:process.env.PASSWORD,
  user:process.env.DBUSER,
  database:process.env.DATABASE
}

var db = mysql.createConnection(connectionData);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/booking', (request, response) => {
   db.connect((error) => {
    if(error) throw error
    let query = "SELECT * FROM Bookings"
    console.log(query);
    db.query(query, (error, data)=>{
      if(error) throw error
      response.send(data)
    })
   })
})

app.get('/deleteRoom/:id', (request, response) => {
   const id = request.params.id;
   db.connect((error) => {
    if (error) {
      response.send(error.message);
      return;
    }

   let deleteQuery = `DELETE FROM Bookings WHERE bookingID='${id}'`;
   db.query(deleteQuery, (error, result) => {
    if (error) {
      response.send("Failed to delete table")
    }
    // response.send(`room ${id} deleted`)
   })
})
})

app.get('/addRoom/:roomID/:instructor/:eventDetails/:startTime/:endTime/:status/:createdAt/:updatedAt', (request, response) => {
   const roomID = request.params.roomID
   const instructor = request.params.instructor
   const eventDetails = request.params.eventDetails
   const status = request.params.status
   const startTime = request.params.startTime
   const endTime = request.params.endTime
   const createdAt = request.params.createdAt
   const updatedAt = request.params.updatedAt
   db.connect((error)=> {
    if (error) {
      response.send(error.message);
      return;
    }
    let addQuery = `INSERT INTO Bookings (bookingID, roomID, instructor, eventDetails, startTime, endTime, status, createdAt, updatedAt) VALUES (NULL, '${roomID}', '${instructor}', '${eventDetails}', '${startTime}', '${endTime}', '${status}', '${createdAt}', '${updatedAt}')`
    console.log(addQuery);
    db.query(addQuery, (error, result)=>{
      if (error) {
        response.send("Failed to add table")
        return
      }
      response.send(`YOUR ROOM WAS ADDED`)
     })
   })
})


// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
