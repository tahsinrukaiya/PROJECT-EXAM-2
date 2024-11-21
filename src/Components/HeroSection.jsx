import PropTypes from "prop-types";
import BGimage from "../assets/hero-image.jpg";
import SearchForm from "./SearchForm";

export default function HeroSection({ onSearch }) {
  return (
    <div className="hero-image">
      <img src={BGimage} alt="Hero" className="img-fluid" />
      <div className="hero-text text-center position-absolute top-50 start-50 translate-middle">
        <div className="overlay">
          <h1 className="display-4 text-white slogan">
            Easy Booking, Memorable Stays
          </h1>
          <p className="lead text-white">Raising comfort to the highest level</p>
          <h3 className="lead-2 text-white">
            Find a venue that is perfect for your event and activities
          </h3>
          <SearchForm onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
