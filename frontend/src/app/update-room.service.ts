import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateRoomService {

  constructor() { }
  updateRoom(oldRoomID: String, newRoomID: String, newInstructor: String, newEventDetails: String, newStartTime: String, newEndTime :String, newStatus: String, newUpdatedAt: String): Promise<Response>{
    const url = `http://localhost:3000/updateRoom/${oldRoomID}/${newRoomID}/${newInstructor}/${newEventDetails}/${newStatus}/${newStartTime}/${newEndTime}/${newUpdatedAt}`
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
