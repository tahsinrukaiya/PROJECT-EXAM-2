import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import VenueCard from "../Venues/VenueCard";
import { fetchVenues } from "../../../api/fetchVenues";

const VenueCards = ({ limit = 6 }) => {
    const [venues, setVenues] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVenues = async () => {
            try {
                const data = await fetchVenues();
                const sortedVenues = data.sort((a, b) => a.name.localeCompare(b.name));
                setVenues(sortedVenues);
                console.log(`Fetched ${data.length} venues`);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadVenues();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="heading2 mt-5 text-center">
                <h1 className="heading-one">Venues</h1>
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
    limit: PropTypes.number,
};

export default VenueCards;
