import BGimage from "../assets/hero-image.jpg";

export default function HeroSection() {
    return (
        <div className="hero-image">
            <img src={BGimage} alt="Hero" className="img-fluid" />
            <div className="hero-text text-center position-absolute top-50 start-50 translate-middle">
                <div className="overlay">
                    <h1 className="display-4 text-white slogan">Easy Booking, Memorable Stays</h1>
                    <p className="lead text-white">Raising comfort to the highest level</p>
                    <h3 className="lead-2 text-white">Find a venue that is perfect for your event and activities</h3>
                    <div className="col-10 col-md-6 col-lg-6">
                        <div className="input-group search-form mt-3 mb-3">
                            <input type="search" className="form-control rounded" placeholder="search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="search-btn  rounded-pill mx-2 px-3" data-mdb-ripple-init>Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


//    <a href="#" className="btn btn-primary btn-lg px-4 rounded-pill button-banner">Book venue here</a>