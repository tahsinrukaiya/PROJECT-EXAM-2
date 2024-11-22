import { useState, useEffect } from "react";
import HeroSection from "../../HeroSection";
import VenueCards from "./VenueCards";
import VenueCard from "./VenueCard";
import fetchVenues from "@api/fetchVenues";

const VenuesPage = () => {
    const [venues, setVenues] = useState([]);
    const [filteredVenues, setFilteredVenues] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const loadVenues = async () => {
            try {
                const data = await fetchVenues();
                const sortedVenues = data.sort((a, b) => a.name.localeCompare(b.name));
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
        if (query) {
            const results = venues.filter((venue) =>
                venue.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredVenues(results);
        } else {
            setFilteredVenues(venues);
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
                                    filteredVenues.map((venue) => (
                                        <VenueCard key={venue.id} venue={venue} />
                                    ))
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



















































/*
import { useState, useEffect } from "react";
import HeroSection from "../../HeroSection";
import VenueCards from "./VenueCards";
import { fetchVenues } from "../../../api/fetchVenues";

const VenuesPage = () => {
    const [venues, setVenues] = useState([]);
    const [filteredVenues, setFilteredVenues] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVenues = async () => {
            try {
                const data = await fetchVenues();
                const sortedVenues = data.sort((a, b) => a.name.localeCompare(b.name));
                setVenues(sortedVenues);
                setFilteredVenues(sortedVenues); // Initialize with all venues
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadVenues();
    }, []);

    const handleSearch = (query) => {
        if (query) {
            const results = venues.filter((venue) =>
                venue.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredVenues(results);
        } else {
            setFilteredVenues(venues); // Reset to all venues if search is cleared
        }
    };

    return (
        <div>
            <HeroSection onSearch={handleSearch} />
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
*/