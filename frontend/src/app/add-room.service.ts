import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRoomService {

  constructor() { }

  addRoom(roomID: String, instructor: String, eventDetails: String, startTime: String, endTime: String, status: String, createdAt: String, updatedAt: String,): Promise<Response> {
    const url = `http://localhost:3000/addRoom/${roomID}/${instructor}/${eventDetails}/${startTime}/${endTime}/${status}/${createdAt}/${updatedAt}`;
    console.log(url);
    
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
