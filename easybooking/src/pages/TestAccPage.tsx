
export const TestAccPage = () => {

    return (
        <>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
        </>
    )
}

// String name;
//     String description;
//     String address;

//     String unitNumber; // optional
//     String city;
//     String country;
//     String location;
//     Double pricePerNight;
//     Integer totalRooms;
//     Integer availableRooms; //number of rooms (of this type)
//     Integer numberOfRooms;
//     Integer maxNumOfGuests;

//     // max 5
//     Integer stars;

//     String coverImageURL;

//     Integer floorNumber;
//     String language;
//     String checkInStartTime;

//     String checkInEndTime;
//     String checkOutStartTime;

//     String checkOutEndTime;
//     String createdAt;
//     String updatedAt;

//     // RELS
    
//     // bi- one to one
//     String ratingId;

//     // many to many
//     List<String> amenities;
    
//     // bi- one to one
//     String propertyParkingId;

//     // bi- one to many
//     List<String> propertyTypes;

//     // bi- one to many
//     List<String> accommodationBookings;

//     // bi- one to many
//     List<String> accommodationImages;

//     // bi- one to many 
//     List<String> accommodationReviews;