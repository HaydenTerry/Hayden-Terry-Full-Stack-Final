import { Component } from '@angular/core';
import { BookingViewComponent } from '../booking-view/booking-view.component';
import { LocalAPIService } from '../local-api.service';
import { AddRoomComponent } from '../add-room/add-room.component';


@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [BookingViewComponent,AddRoomComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {
  constructor(public api:LocalAPIService, ) {}
}
