import { Injectable } from '@angular/core';
import { booking } from './bookings';

@Injectable({
  providedIn: 'root'
})
export class LocalAPIService {

  allBookings: booking[] = []

  constructor() { 
    this.loadData()
  }

  async loadData() {
    let data = fetch("http://localhost:3000/bookings");
    let result = await (await data).json();
    // console.log(result);
    
    this.allBookings = result;
    console.log(this.allBookings);
    
  }
}
