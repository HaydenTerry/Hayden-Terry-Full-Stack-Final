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
}
