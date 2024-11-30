import { useState, useEffect } from "react";
import HeroSection from "../../HeroSection";
import VenueCards from "./VenueCards";
import VenueCard from "./VenueCard";
import fetchVenues from "@api/fetchVenues";
import { Link } from "react-router-dom";

const VenuesPage = () => {
    const [venues, setVenues] = useState([]);
    const [filteredVenues, setFilteredVenues] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const loadVenues = async () => {
            try {
                const sortedVenues = await fetchVenues("created", "desc");
                setVenues(sortedVenues);
                setFilteredVenues(sortedVenues);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadVenues();
    }, []);

    const handleSearch = (query) => {
        if (!query.trim()) {
            setFilteredVenues([]);
            setShowModal(false);
            return;
        }

        if (query.length === 1) {
            const results = venues.filter((venue) =>
                venue.name.toLowerCase().startsWith(query.toLowerCase())
            );
            setFilteredVenues(results);
        } else {
            const results = venues.filter((venue) =>
                venue.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredVenues(results);
        }
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <HeroSection onSearch={handleSearch} />
            {showModal && (
                <div className="modal show d-block search-modal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Search Results</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {filteredVenues.length > 0 ? (
                                    <ul className="search-venue-list">
                                        {filteredVenues.map((venue) => (
                                            <li key={venue.id}>
                                                <Link to={`/single_venue/${venue.id}`} className="venue-link">
                                                    {venue.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No results found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <VenueCards
                venues={filteredVenues}
                loading={loading}
                error={error}
                limit={6}
            />
        </div>
    );
};

export default VenuesPage;
