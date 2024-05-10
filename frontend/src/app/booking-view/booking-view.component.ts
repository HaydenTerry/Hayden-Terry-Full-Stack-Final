import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-view',
  standalone: true,
  imports: [],
  templateUrl: './booking-view.component.html',
  styleUrl: './booking-view.component.css'
})
export class BookingViewComponent {
  @Input() bookingID:String = ""
  @Input() roomID:String = ""
  @Input() instructor:String = ""
  @Input() eventDetails:String = ""
  @Input() startTime:String = ""
  @Input() endTime:String = ""
  @Input() status:String = ""
  @Input() createdAt:String = ""
  @Input() updatedAt:String = ""
}
