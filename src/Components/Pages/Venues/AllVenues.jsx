
// src/pages/AllVenuesPage.jsx
import VenueCards from '/src/Components/Pages/Venues/VenueCards';

const AllVenuesPage = () => {
    return (
        <div>
            <VenueCards limit={30} />
        </div>
    );
};

export default AllVenuesPage;
