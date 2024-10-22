import BGimage from "../assets/hero-image.jpg";

export default function HeroSection() {
    return (
        <div className="hero-image">
            <img src={BGimage} alt="Hero" className="img-fluid" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="hero-text text-center position-absolute top-50 start-50 translate-middle">
                <div className="overlay">
                    <h1 className="display-4 text-white slogan">Easy Booking, Memorable Stays</h1>
                    <p className="lead text-white">Raising comfort to the highest level</p>
                    <a href="#" className="btn btn-primary btn-lg px-4 rounded-pill button-banner">Book Venue Here</a>
                </div>
            </div>

        </div>
    );
}
