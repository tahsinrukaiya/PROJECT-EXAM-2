import { deleteVenue } from '@api/deleteVenue';

export const handleUpdateClick = (venue, navigate) => {
    if (!venue || !navigate) {
        console.error('Invalid venue or navigate function.');
        return;
    }

    localStorage.setItem('selectedVenue', JSON.stringify(venue));
    navigate('/update-venue');
};

export const handleDeleteClick = (venueData, token, apiKey, setProfileData, setError, setIsModalOpen) => {
    try {
        deleteVenue(venueData, () => {
            setProfileData(prevData => {
                const updatedVenues = (prevData.venues || []).filter(venue => venue.id !== venueData.id); // Ensure venues is an array
                return { ...prevData, venues: updatedVenues };
            });
            setIsModalOpen(false);
            window.location.reload();
        });
    } catch (error) {
        setError(error.message);
        console.error("Error during venue deletion:", error);
    }
};

export const handleCloseModal = (setIsModalOpen, setVenueToDelete) => {
    if (!setIsModalOpen || !setVenueToDelete) {
        console.error('Invalid setters for closing modal.');
        return;
    }

    setIsModalOpen(false);
    setVenueToDelete(null);
};