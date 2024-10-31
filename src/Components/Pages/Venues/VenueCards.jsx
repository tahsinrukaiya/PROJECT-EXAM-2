// src/components/VenueCards.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VenueCard from '/src/components/Pages/Venues/VenueCard';
import API_URLS from '/src/config.js';

const VenueCards = ({ limit = 6 }) => {
    const [venues, setVenues] = useState([]);
    const [error, setError] = useState(null);

    const fetchVenues = async () => {
        try {
            // Wait for 1 second before fetching (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await fetch(API_URLS.ALL_VENUES);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data); // Log the entire response
            console.log(`Fetched ${data.data.length} venues`); // Log the count of venues
            setVenues(data.data);
        } catch (error) {
            console.error('Error fetching venues:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    return (
        <>
            <div className="heading2 mt-5 text-center"><h3>Venues</h3></div>
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

// Define PropTypes for VenueCards
VenueCards.propTypes = {
    limit: PropTypes.number,
};

export default VenueCards;
