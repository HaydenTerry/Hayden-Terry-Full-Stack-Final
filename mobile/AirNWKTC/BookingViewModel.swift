import Foundation

class BookingViewModel: ObservableObject {
    @Published var bookings: [Booking] = []
    @Published var isLoading = true
    @Published var errorMessage: String?

    init() {
        fetchBookings()
    }

    func fetchBookings() {
        guard let url = URL(string: "http://localhost:3000/booking") else { return }

        let task = URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                DispatchQueue.main.async {
                    self.isLoading = false
                    self.errorMessage = "Error: \(error.localizedDescription)"
                }
                return
            }

            guard let data = data else {
                DispatchQueue.main.async {
                    self.isLoading = false
                    self.errorMessage = "No data"
                }
                return
            }

            // Print the JSON response
            if let jsonString = String(data: data, encoding: .utf8) {
                print("JSON Response: \(jsonString)")
            }

            do {
                let decodedResponse = try JSONDecoder().decode([Booking].self, from: data)
                DispatchQueue.main.async {
                    self.bookings = decodedResponse
                    self.isLoading = false
                }
            } catch let decodingError {
                DispatchQueue.main.async {
                    self.isLoading = false
                    self.errorMessage = "Error decoding: \(decodingError.localizedDescription)"
                }
            }
        }
        task.resume()
    }
}
