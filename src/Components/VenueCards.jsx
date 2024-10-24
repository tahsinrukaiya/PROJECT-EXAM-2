import Venue from "../assets/venue.jpg";

export default function VenueCards() {
    return (
        <>
            <div className="heading2 mt-4 text-center"><h3>Venues</h3></div>
            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Venue} className="card-image-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn">View Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Venue} className="card-image-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn">View Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Venue} className="card-image-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn">View Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Venue} className="card-image-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Hafjell, Lillehamer</h5>
                                <button className="viewBtn">View Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}