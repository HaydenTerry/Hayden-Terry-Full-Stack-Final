import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class deleteRoomService {

  constructor() { }

  deleteRoom(bookingID: String): Promise<Response> {
    const url = `http://localhost:3000/deleteRoom/${bookingID}`; // Adjust the port and path if needed
    return fetch(url, {
      method: 'GET', // Since your Express route uses GET, though DELETE is more appropriate for deletions
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
