import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URLS } from "../../../config";
import BookingForm from "./BookingForm";
import LoadingSpinner from "./LoadingSpinner";

export default function SingleVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const fetchVenue = async () => {
    try {
      const response = await fetch(`${API_URLS.SINGLE_VENUE}/${id}?_owner=true&_bookings=true`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setVenue(data.data);
      setBookings(data.data.bookings);
    } catch (error) {
      console.error("Error fetching venue:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchVenue();
  }, [id]);

  return (
    <>
      {error && <div className="error">Error: {error}</div>}
      {venue ? (
        <div className="card_container d-flex flex-column bd-highlight mb-3 mt-5">
          <div className="card col-10 col-md-10 col-lg-10 mx-auto">
            <div className="venue-title text-center mt-5">
              <h1 className="venue-title">{venue.name}</h1>
            </div>
            <div className="venue-address text-center">
              <h5 className="venue-location">Location: {venue.location.address}</h5>
              <h5 className="venue-detail px-5 mt-3 pb-0">Maximum guests: {venue.maxGuests}</h5>
              <h5 className="venue-detail px-5 pb-3">Price per night: {venue.price} NOK</h5>
              <h5 className="px-5 pb-3 venue-id">Venue ID: {venue.id}</h5>
              <h5 className="venue-detail mb-3">Hosted by :{venue.owner.name} </h5>
              <div className="meta-data d-flex justify-content-center">
                {venue.meta.wifi && (
                  <div className="me-4 pt-2 pb-1">
                    <i className="fa-solid fa-wifi"></i>
                    <h6 className="meta-info">Wifi: Available</h6>
                  </div>
                )}
                {venue.meta.parking && (
                  <div className="me-4 pt-2 pb-1">
                    <i className="fa-solid fa-square-parking"></i>
                    <h6 className="meta-info">Parking: Available</h6>
                  </div>
                )}
                {venue.meta.breakfast && (
                  <div className="me-4 pt-2 pb-1">
                    <i className="fa-solid fa-utensils"></i>
                    <h6 className="meta-info">Breakfast: Available</h6>
                  </div>
                )}
                {venue.meta.pets && (
                  <div className="me-4 pt-2 pb-1">
                    <i className="fa-solid fa-shield-dog"></i>
                    <h6 className="meta-info">Pets: Allowed</h6>
                  </div>
                )}
              </div>
              <BookingForm venueId={venue.id} bookings={bookings} maxGuests={venue.maxGuests} />
            </div>
            <img
              src={venue.media && venue.media.length > 0 ? venue.media[0].url : 'fallback-image-url.jpg'}
              className="card-img-top px-5 pb-4 pt-5"
              alt={venue.media[0]?.alt || "Fallback description"}
            />
            <div className="card-body">
              <h5 className="card-info">More Information</h5>
              <p className="venue-description">{venue.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}







