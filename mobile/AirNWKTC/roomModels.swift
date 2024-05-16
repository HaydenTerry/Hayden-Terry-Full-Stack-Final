import Foundation

struct Booking: Codable, Identifiable {
    let bookingID: Int
    let roomID: Int
    let instructor: String
    let eventDetails: String
    let startTime: String
    let endTime: String
    let status: Int
    let createdAt: String
    let updatedAt: String

    var id: Int { bookingID }

    enum CodingKeys: String, CodingKey {
        case bookingID
        case roomID
        case instructor
        case eventDetails
        case startTime
        case endTime
        case status
        case createdAt
        case updatedAt
    }
}
