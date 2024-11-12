import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { API_URLS } from "../../../config";
import { Link } from "react-router-dom";


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


  // Initialize Flatpickr
  useEffect(() => {
    flatpickr("#datePicker", {
      dateFormat: "Y-m-d",
      enableTime: "false",
    });
  }, []); // Runs once when the component mounts


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
              <h3 className="venue-detail px-5 mt-3 pb-3">Maximum guests :
                {venue.maxGuests}
              </h3>
              <h5 className="venue-detail px-5 pb-3">Price per night :
                {venue.price} NOK
              </h5>
              <div className="meta-data d-flex justify-content-center">
                <div className="me-4 pt-2 pb-1"><i className="fa-solid fa-wifi"></i> {venue.meta.wifi.isAvailable ? (
                  <h6 className="meta-info">Wifi : Available</h6>) : (<h6 className="meta-info">
                    Wifi : Not Available
                  </h6>
                )}</div>
                <div className="me-4 pt-2 pb-1"><i className="fa-solid fa-square-parking"></i>
                  {venue.meta.parking.isAvailable ? (
                    <h6 className="meta-info">Parking : Available</h6>
                  ) : (<h6 className="meta-info">Parking: Not Available</h6>)}</div>
                <div className="me-4 pt-2 pb-1"><i className="fa-solid fa-utensils"></i>
                  {venue.meta.breakfast.isAvailable ? (<h6 className="meta-info">
                    Breakfast : Available
                  </h6>) : (<h6 className="meta-info">Breakfast : Not Available</h6>)}</div>
                <div className="me-4 pt-2 pb-1"><i className="fa-solid fa-shield-dog"></i>
                  {venue.meta.pets.isAvailable ? (<h6 className="meta-info">
                    Pets : Allowed
                  </h6>) : (<h6 className="meta-info">
                    Pets : Not Allowed
                  </h6>)}</div>
              </div>

              {/*--------------------------- BOOKING FORM----------------------------------------------*/}
              <div className="d-flex book-form-container justify-content-center mt-5">
                <form className="d-flex">
                  <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="datePicker"><h6>Select dates</h6></label>
                    <input type="text" className="form-control" id="datePicker" placeholder="Select a date" />

                  </div>
                  <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="formGroupExampleInput"><h6>Number of guests</h6></label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="number of guests" />
                  </div>
                  <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="formGroupExampleInput2"><h6>Price per night</h6></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="price" />
                  </div>

                </form>
              </div>
              <Link to="/login"><button className="book-btn rounded-pill px-3 pt-2 pb-2 mt-3">
                Book now
              </button></Link>
























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
