import { useNavigate } from 'react-router-dom';
import { deleteVenue } from '../../Api/deleteVenue';
import SuccessModalDelete from './Venues/SuccessModalDelete';


export const handleUpdateClick = (venue, navigate) => {
    localStorage.setItem('selectedVenue', JSON.stringify(venue));
    navigate('/update-venue');
};

export const handleDeleteClick = async (venue, setProfileData, setVenueToDelete, setError, setIsModalOpen) => {
    setVenueToDelete(venue);

    try {
        await deleteVenue(venue, () => {
            setProfileData(prevData => {
                const updatedVenues = prevData.venues.filter(v => v.id !== venue.id);
                localStorage.setItem('venues', JSON.stringify(updatedVenues));

                return {
                    ...prevData,
                    venues: updatedVenues,
                };
            });
            setIsModalOpen(true);
        });

    } catch (error) {
        console.error('Failed to delete venue:', error);
        setError('Failed to delete venue');
    }
};

export const handleCloseModal = (setIsModalOpen, setVenueToDelete) => {
    setIsModalOpen(false);
    setVenueToDelete(null);
};
