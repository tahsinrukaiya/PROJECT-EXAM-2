
import Venue from "/src/assets/venue.jpg";

export default function VenueList() {
    return (
        <>
            <div className="heading2 mt-4 text-center"><h3>Have a look at our venues</h3></div>
            <div className="container mt-5">
                <div className="row g-3">
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card text-white">
                            <img src={Venue} className="card-img" alt=""></img>
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn rounded-pill pt-2 px-3"><h6 className="btn-text">View Now</h6></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card text-white">
                            <img src={Venue} className="card-img" alt=""></img>
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn rounded-pill pt-2 px-3"><h6 className="btn-text">View Now</h6></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card text-white">
                            <img src={Venue} className="card-img" alt=""></img>
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn rounded-pill pt-2 px-3"><h6 className="btn-text">View Now</h6></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card text-white">
                            <img src={Venue} className="card-img" alt=""></img>
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn rounded-pill pt-2 px-3"><h6 className="btn-text">View Now</h6></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card text-white">
                            <img src={Venue} className="card-img" alt=""></img>
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn rounded-pill pt-2 px-3"><h6 className="btn-text">View Now</h6></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}