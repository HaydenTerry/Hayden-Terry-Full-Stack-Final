import SwiftUI

struct BookingRowView: View {
    let booking: Booking

    var body: some View {
        VStack(alignment: .leading) {
            Text("Booking ID: \(booking.bookingID)")
            Text("Room ID: \(booking.roomID)")
            Text("Instructor: \(booking.instructor)")
            Text("Details: \(booking.eventDetails)")
            Text("Start Time: \(booking.startTime)")
            Text("End Time: \(booking.endTime)")
            Text("Status: \(booking.status)")
            Text("Created At: \(booking.createdAt)")
            Text("Updated At: \(booking.updatedAt)")
        }
        .padding()
    }
}

struct BookingRowView_Previews: PreviewProvider {
    static var previews: some View {
        BookingRowView(booking: Booking(
            bookingID: 1,
            roomID: "101",
            instructor: "John Doe",
            eventDetails: "Math Class",
            startTime: "2023-05-01 09:00:00",
            endTime: "2023-05-01 10:00:00",
            status: "Confirmed",
            createdAt: "2023-04-01 08:00:00",
            updatedAt: "2023-04-15 08:00:00"
        ))
    }
}
