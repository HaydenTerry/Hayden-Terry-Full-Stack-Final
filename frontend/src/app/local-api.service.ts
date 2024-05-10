import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalAPIService {

  constructor() { 
    this.loadData()
  }

  async loadData() {
    let data = fetch("http://localhost:3000/bookings");
    let result = await (await data).json();
    console.log(result);
    
  }
}
