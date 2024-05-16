import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class deleteRoomService {

  constructor() { }

  deleteRoom(bookingID: String): Promise<Response> {
    const url = `http://localhost:3000/deleteRoom/${bookingID}`; //the route to delete rooms
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
