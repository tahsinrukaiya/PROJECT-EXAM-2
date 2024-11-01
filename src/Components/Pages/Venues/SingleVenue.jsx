import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URLS from "../../../config";

export default function SingleVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(null);

  const fetchVenue = async () => {
    try {
      const response = await fetch(`${API_URLS.SINGLE_VENUE}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setVenue(data.data);
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
          <div className="card col-10 col-md-6 col-lg-10 mx-auto">
            <div className="venue-title text-center mt-5">
              <h1>{venue.name}</h1>
            </div>
            <div className="venue-address text-center">
              <h5 className="location">Location : {venue.location.address}</h5>
              <h3 className="venue-detail px-5 mt-5">Maximum guests :
                {venue.maxGuests}
              </h3>
              <h4 className="meta"> Facilities
                {venue.meta.wifi}
                {venue.meta.parking}
                {venue.meta.breakfast}
                {venue.meta.pets}
              </h4>
              <button className="book-btn rounded-pill px-3 pt-2 pb-2 mt-3">
                Book now
              </button>
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
        <p>Loading venue details...</p>
      )}
    </>
  );
}
