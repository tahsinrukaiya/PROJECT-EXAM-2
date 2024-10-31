import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const VenueCard = ({ venue }) => {
    return (
        <div className="col-6 col-md-6 col-lg-4">
            <div className="card text-white">
                <img
                    src={venue.media && venue.media.length > 0 ? venue.media[0].url : 'fallback-image-url.jpg'}
                    className="card-img"
                    alt={venue.media[0]?.alt || 'Fallback description'}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{venue.name}</h5>
                    <Link to={`/single_venue/${venue.id}`}>
                        <button className="viewBtn rounded-pill pt-2 px-3">
                            <h6 className="btn-text">View Now</h6>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Prop validation
VenueCard.propTypes = {
    venue: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        media: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string.isRequired,
                alt: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
};

export default VenueCard;
