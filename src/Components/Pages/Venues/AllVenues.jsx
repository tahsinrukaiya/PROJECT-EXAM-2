import { useState, useEffect } from "react";
import VenueCards from "/src/Components/Pages/Venues/VenueCards";
import fetchVenues from "../../../api/fetchVenues";

const AllVenuesPage = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVenues = async () => {
      try {
        const data = await fetchVenues();
        setVenues(data);
      } catch (err) {
        setError("Failed to load venues");
      } finally {
        setLoading(false);
      }
    };

    loadVenues();
  }, []);

  return (
    <div>
      <VenueCards
        venues={venues}
        loading={loading}
        error={error}
        limit={100}
      />
    </div>
  );
};

export default AllVenuesPage;
