import { Component, Input } from '@angular/core';
import { deleteRoomService } from '../delete-room.service';
import { AddRoomService } from '../add-room.service';

@Component({
  selector: 'app-booking-view',
  standalone: true,
  imports: [],
  templateUrl: './booking-view.component.html',
  styleUrl: './booking-view.component.css',
  template: `<button (click)="deleteRoom('12')">Delete Room</button>`
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

  constructor(private deleteRoomService: deleteRoomService) {}

  deleteRoom(): void {
    this.deleteRoomService.deleteRoom(this.bookingID).then(response => {
      console.log('Room deletion attempted.');
      response.text().then(text => alert(text));
    }).catch(error => {
      console.error('Error deleting room:', error);
    });
  }


}
