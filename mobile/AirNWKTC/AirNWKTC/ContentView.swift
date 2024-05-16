import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = BookingViewModel()

    var body: some View {
        NavigationView {
            if viewModel.isLoading {
                ProgressView("Loading...")
            } else if let errorMessage = viewModel.errorMessage {
                Text("Error: \(errorMessage)")
            } else {
                List(viewModel.bookings) { booking in
                    BookingRowView(booking: booking)
                }
                .navigationTitle("Bookings")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
