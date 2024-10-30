import { Link } from "react-router-dom";
import Venue from "/src/assets/venue.jpg";

export default function VenueCards() {
    return (
        <>
            <div className="heading2 mt-5 text-center"><h3>Venues</h3></div>
            <div className="container mt-5">
                <div className="row g-3">
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card text-white">
                            <img src={Venue} className="card-img" alt=""></img>
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <Link to="single_venue"><button className="viewBtn rounded-pill pt-2 px-3"><h6 className="btn-text">View Now</h6></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/venue_list"><div className="see-all-link text-center mt-4"><h6 className="see-all-link">See All</h6></div></Link>
        </>
    )
}