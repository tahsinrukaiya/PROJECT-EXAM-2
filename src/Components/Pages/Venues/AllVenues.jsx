
// src/pages/AllVenuesPage.jsx
import VenueCards from '/src/components/Pages/Venues/VenueCards'; // This is correct

const AllVenuesPage = () => {
    return (
        <div>
            <VenueCards limit={100} /> {/* Pass a high number to display all venues */}
        </div>
    );
};

export default AllVenuesPage;
