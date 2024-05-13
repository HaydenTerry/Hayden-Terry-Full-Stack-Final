import { Component } from '@angular/core';
import { BookingViewComponent } from '../booking-view/booking-view.component';
import { LocalAPIService } from '../local-api.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [BookingViewComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  constructor(public api:LocalAPIService) {}

  // makeNewTable() {
  //   fetch('http://localhost:3000/api/execute-query', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({})
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log('Success:', data))
  //   .catch(error => console.error('Error:', error));
  // }
}
