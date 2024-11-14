import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProfileData } from '../../api/fetchProfileData';
import { handleUpdateClick, handleDeleteClick, handleCloseModal } from './profileHandlers';
import SuccessModalDelete from "./Venues/SuccessModalDelete";
import { API_KEY } from '../../config';
import fetchBookings from '../../api/fetchBooking';

export default function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [authData, setAuthData] = useState(null);
    const [error, setError] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [venueToDelete, setVenueToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');
    const storedAuthData = JSON.parse(localStorage.getItem('authData'));
    const name = storedAuthData?.name;

    useEffect(() => {
        async function getProfileData() {
            try {
                setIsLoading(true);
                const result = await fetchProfileData(name, token);
                setProfileData(result.data);
                setUserRole(result.data.venueManager ? 'Venue Manager' : 'Customer');
                setIsLoading(false);

                if (result.data.venueManager) {
                } else {
                    const bookingsData = await fetchBookings(name, token);
                    setBookings(bookingsData);
                }
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        getProfileData();
    }, [name, token]);

    useEffect(() => {
        if (profileData && !profileData.venues && !isLoading) {
            const venuesFromStorage = JSON.parse(localStorage.getItem('venues')) || [];
            if (venuesFromStorage.length > 0) {
                setProfileData(prevState => ({
                    ...prevState,
                    venues: venuesFromStorage
                }));
            }
        }
    }, [profileData, isLoading]);

    if (error) {
        return <div className="alert alert-danger">Error: {error}</div>;
    }

    if (isLoading) {
        return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;
    }

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-8 mb-4 mb-lg-0">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={profileData?.banner?.url || "banner"}
                                    alt="Banner"
                                    className="img-fluid my-5 mx-2 banner"
                                />

                                <input type="file" className="custom-file-input mx-3" id="inputGroupFile01" />

                                <button className="rounded-pill px-3 pt-1 pb-1 mx-3 edit-banner-btn">
                                    Edit Banner
                                </button>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h2 className="heading-profile">Information</h2>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-10 mb-3 col-lg-10">
                                            <h6 className="profile-data">Email</h6>
                                            <p className="text-muted">{profileData?.email}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6 className="profile-data">Name</h6>
                                            <p className="text-muted">{profileData?.name}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6 className="profile-data">Role</h6>
                                            <p className="text-muted">{userRole}</p>
                                        </div>
                                    </div>

                                    {/* Conditional rendering based on userRole */}
                                    {userRole === 'Venue Manager' && profileData?.venueManager && (
                                        <Link to="/lease-venue">
                                            <button className="lease-btn rounded-pill mb-4 px-3 pt-1 pb-1">
                                                Lease a venue
                                            </button>
                                        </Link>
                                    )}

                                    {/* Conditional rendering for Bookings or Venues */}
                                    <h5 className="profile-data">{userRole === 'Customer' ? 'Your Bookings' : 'Your Venues'}</h5>
                                    <hr className="mt-0 mb-4" />
                                    <div className="col-12 col-md-10 col-lg-10">
                                        {userRole === 'Customer' && bookings.length > 0 ? (
                                            bookings.map((booking, index) => (
                                                <div key={booking.id || `booking-${index}`} className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="profile-card-title mt-2 mx-2 mb-2"><h6 className="book-id">Booking ID: {booking.id}</h6></div>

                                                        <p className="text-muted">From: {booking.dateFrom}</p>
                                                        <p className="text-muted">To: {booking.dateTo}</p>
                                                        <p className="text-muted">Guests: {booking.guests}</p>
                                                        <button className="rounded-pill me-2 update-booking"><i className="fa-regular fa-pen-to-square"></i>Update</button>
                                                        <button className="rounded-pill delete-booking"><i className="fa-solid fa-trash"></i>Delete</button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No bookings available</p>
                                        )}

                                        {userRole === 'Venue Manager' && profileData?.venues?.length > 0 ? (
                                            profileData.venues.map((venue, index) => (
                                                <div key={venue.id || `venue-${index}`} className="card mb-3">
                                                    <img
                                                        className="card-img-top"
                                                        src={venue.media && venue.media[0]?.url}
                                                        alt={venue.name} />
                                                    <h6 className="profile-card-title mt-2 mx-2">{venue.name}</h6>
                                                    <div className="button-container mx-3 mb-3">
                                                        <button
                                                            className="update-venue rounded-pill me-3"
                                                            onClick={() => handleUpdateClick(venue, navigate)}
                                                        >
                                                            <i className="fa-regular fa-pen-to-square"></i>Update
                                                        </button>
                                                        <button
                                                            className="delete-venue rounded-pill"
                                                            onClick={() => handleDeleteClick(venue, setProfileData, setVenueToDelete, setError, setIsModalOpen)}
                                                        >
                                                            <i className="fa-solid fa-trash"></i>Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No venues available</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SuccessModalDelete
                isOpen={isModalOpen}
                onClose={() => handleCloseModal(setIsModalOpen, setVenueToDelete)}
                onConfirm={() => handleDeleteClick(venueToDelete, token, API_KEY, setProfileData, setVenueToDelete, setError, setIsModalOpen)}
                isError={error !== null}
            />
        </div>
    );
}
