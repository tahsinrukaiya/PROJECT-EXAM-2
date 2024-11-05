import VenueCards from "/src/Components/Pages/Venues/VenueCards";

const AllVenuesPage = () => {
  return (
    <div>
      <VenueCards limit={50} />
    </div>
  );
};

export default AllVenuesPage;
