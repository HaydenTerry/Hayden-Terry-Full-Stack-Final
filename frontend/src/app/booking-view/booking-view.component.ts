import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-view',
  standalone: true,
  imports: [],
  templateUrl: './booking-view.component.html',
  styleUrl: './booking-view.component.css'
})
export class BookingViewComponent {
  @Input() bookingID:Number = 0
  @Input() roomID:Number = 0
  @Input() instructor:String = ""
  @Input() eventDetails:String = ""
  @Input() startTime:Date = new Date()
  @Input() endTime:Date = new Date()
  @Input() status:boolean = false
  @Input() createdAt:Date = new Date()
  @Input() updatedAt:Date = new Date()
}
