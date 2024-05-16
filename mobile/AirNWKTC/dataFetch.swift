import Foundation

class DataFetch {
    func fetchBookings(completion: @escaping (Result<[Booking], Error>) -> Void) {
        guard let url = URL(string: "http://localhost:3000/booking") else { return }

        let task = URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                completion(.failure(error))
                return
            }

            guard let data = data else {
                let error = NSError(domain: "", code: 0, userInfo: [NSLocalizedDescriptionKey: "No data"])
                completion(.failure(error))
                return
            }

            do {
                let decodedResponse = try JSONDecoder().decode([Booking].self, from: data)
                completion(.success(decodedResponse))
            } catch let decodingError {
                completion(.failure(decodingError))
            }
        }
        task.resume()
    }
}
