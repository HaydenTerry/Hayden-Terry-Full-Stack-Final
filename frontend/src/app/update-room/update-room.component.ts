import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdateRoomService } from '../update-room.service';

@Component({
  selector: 'app-update-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-room.component.html',
  styleUrl: './update-room.component.css'
})
export class UpdateRoomComponent {

constructor(private updateRoomService: UpdateRoomService) { }

  @Input() newRoomID:String = ""
  @Input() oldRoomID:String = ""
  @Input() newInstructor:String = ""
  @Input() newEventDetails:String = ""
  @Input() newStartTime:String = ""
  @Input() newEndTime:String = ""
  @Input() newStatus:String = ""
  @Input() newUpdatedAt:String = ""


  updateRoom(): void {
    this.updateRoomService.updateRoom(this.oldRoomID, this.newRoomID, this.newInstructor, this.newEventDetails, this.newStartTime, this.newEndTime, this.newStatus, this.newUpdatedAt).then(response => {
      console.log('Room update attempted');
      response.text().then(text => alert(text))
      
    })
    .catch(error => {
      console.error('Error updating room', error)
    })
  }
}
