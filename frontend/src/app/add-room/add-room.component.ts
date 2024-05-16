import { Component, Input } from '@angular/core';
import { AddRoomService } from '../add-room.service';
import { FormsModule } from '@angular/forms';
import { UpdateRoomService } from '../update-room.service';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {
  constructor(private addRoomService: AddRoomService) {}

  @Input() bookingID:String = ""
  @Input() roomID:String = ""
  @Input() instructor:String = ""
  @Input() eventDetails:String = ""
  @Input() startTime:String = ""
  @Input() endTime:String = ""
  @Input() status:String = ""
  @Input() createdAt:String = ""
  @Input() updatedAt:String = ""
  
  addRoom(): void {
    this.addRoomService.addRoom(this.roomID, this.instructor, this.eventDetails, this.startTime, this.endTime, this.status, this.createdAt, this.updatedAt).then(response => {
      console.log('Room addition attempted');
      response.text().then(text => alert(text));
    }).catch(error => {
      console.error('Error adding room', error)
    })
  }
}
