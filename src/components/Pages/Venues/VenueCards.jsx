import PropTypes from "prop-types";
import VenueCard from "../Venues/VenueCard";
import LoadingSpinner from "./LoadingSpinner";

const VenueCards = ({ venues, loading, error, limit = 6 }) => {
    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <>
            <div className="heading-one-cotainer mt-5 text-center">
                <h1 className="heading-one">Discover venues that match your holiday style and needs!</h1>
            </div>
            {error && <div className="error">Error: {error}</div>}
            <div className="container mt-5">
                <div className="row g-3">
                    {venues.slice(0, limit).map((venue) => (
                        <VenueCard key={venue.id} venue={venue} />
                    ))}
                </div>
            </div>
        </>
    );
};

VenueCards.propTypes = {
    venues: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    limit: PropTypes.number,
};
export default VenueCards;
