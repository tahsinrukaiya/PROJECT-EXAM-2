import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProfileData } from "../../api/fetchProfileData";
import { handleUpdateClick, handleDeleteClick, handleCloseModal } from "./profileHandlers";
import SuccessModalDelete from "./Venues/SuccessModalDelete";
import { API_KEY } from "../../config";
import { fetchVenuesByProfile } from "../../api/fetchVenuesByProfile";
import fetchBookingsByProfile from "../../api/fetchBookingsByProfile"
import { updateAvatar } from "../../api/updateAvatar";
import UpdateProfileForm from "./updateProfileForm";

export default function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [authData, setAuthData] = useState(null);
    const [error, setError] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [venueToDelete, setVenueToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState([]);
    const [venues, setVenues] = useState([]);
    const [avatar, setAvatar] = useState(() => {
        const storedUserData = localStorage.getItem("userData");
        return storedUserData ? JSON.parse(storedUserData).avatar : {};
    });

    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");
    const storedAuthData = JSON.parse(localStorage.getItem("authData"));
    const name = storedAuthData?.name;

    useEffect(() => {
        async function getProfileData() {
            try {
                setIsLoading(true);
                const result = await fetchProfileData(name, token);
                setProfileData(result.data);
                setUserRole(result.data.venueManager ? "Venue Manager" : "Customer");
                setIsLoading(false);

                if (result.data.venueManager) {
                    const venuesData = await fetchVenuesByProfile(name, token);
                    setVenues(venuesData.data);
                } else {
                    const bookingsData = await fetchBookingsByProfile(name, token);
                    setBookings(bookingsData);
                }
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        getProfileData();
    }, [name, token]);

    const handleAvatarChange = async (newAvatarUrl) => {
        try {
            const data = await updateAvatar(name, token, newAvatarUrl);
            setAvatar(data.avatar);
            const updatedUserData = { ...JSON.parse(localStorage.getItem("userData")), avatar: data.avatar };
            localStorage.setItem("userData", JSON.stringify(updatedUserData));
        } catch (error) {
            console.error("Failed to update avatar:", error);
        }
    };

    useEffect(() => {
        if (userRole === "Customer") {
            const fetchUserBookings = async () => {
                try {
                    const fetchedBookings = await fetchBookingsByProfile(name, token);
                    setBookings(fetchedBookings);
                } catch (err) {
                    setError('Failed to load bookings.');
                }
            };

            fetchUserBookings();
        }
    }, [userRole, name, token]);

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
                                    src={profileData?.avatar?.url || "avatar"}
                                    alt="Avatar"
                                    className="img-fluid my-5 mx-2 avatar pt-3 pb-3 px-3 avatar"
                                />
                                <UpdateProfileForm name={name} token={token} onAvatarChange={handleAvatarChange} />
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

                                    {userRole === "Venue Manager" && (
                                        <Link to="/lease-venue">
                                            <button className="lease-btn rounded-pill mb-4 px-3 pt-1 pb-1">
                                                Lease a venue
                                            </button>
                                        </Link>
                                    )}
                                    <h5 className="profile-data">{userRole === "Customer" ? "Your Bookings" : "Your Venues"}</h5>
                                    <hr className="mt-0 mb-4" />
                                    <div className="col-12 col-md-10 col-lg-10">
                                        {userRole === "Customer" ? (
                                            bookings.length > 0 ? (
                                                bookings.map((booking) => (
                                                    <div key={booking.id} className="card mb-3 px-3 booking-card">
                                                        <h3 className="profile-card-title mt-2 mx-2">{booking.venueName}</h3>
                                                        <h6 className="date-from">From: {new Date(booking.dateFrom).toLocaleDateString()}</h6>
                                                        <h6 className="date-to">To: {new Date(booking.dateTo).toLocaleDateString()}</h6>
                                                        <h6 className="number-of-guests">Guests: {booking.guests}</h6>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No bookings available</p>
                                            )
                                        ) : (
                                            venues.length > 0 ? (
                                                venues.map((venue) => (
                                                    <div key={venue.id} className="card mb-3 venue-card">
                                                        <img
                                                            className="card-img-top"
                                                            src={venue.media && venue.media[0]?.url}
                                                            alt={venue.name}
                                                        />
                                                        <h3 className="profile-card-title mt-2 mx-2">{venue.name}</h3>

                                                        {venue.bookings && venue.bookings.length > 0 ? (
                                                            <div className="bookings-container mx-2 px-3">
                                                                <h5>Bookings:</h5>
                                                                {venue.bookings.map((booking, index) => (
                                                                    <div key={booking.id || index} className="booking-item rounded">
                                                                        <div className="booking-info px-3 pt-3 mb-3 pb-2">
                                                                            <h6>Customer:</h6> {booking.customer?.name}
                                                                            <h6>Created:</h6>{new Date(booking.created).toLocaleString()}
                                                                            <h6>Guests:</h6>{booking.guests}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <p className="no-bookings">No bookings available</p>
                                                        )}
                                                        <div className="button-container mx-3 mb-3 mt-3">
                                                            <button
                                                                className="update-venue-btn rounded-pill me-3"
                                                                onClick={() => handleUpdateClick(venue, navigate)}
                                                            >
                                                                <i className="fa-regular fa-pen-to-square"></i>Update
                                                            </button>
                                                            <button
                                                                className="delete-venue-btn rounded-pill"
                                                                onClick={() => {
                                                                    setVenueToDelete(venue);
                                                                    setIsModalOpen(true);
                                                                }}
                                                            >
                                                                <i className="fa-solid fa-trash"></i>Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No venues available</p>
                                            )
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
                onConfirm={() => {
                    console.log("Deleting venue", venueToDelete);
                    if (venueToDelete) {
                        handleDeleteClick(
                            venueToDelete,
                            token,
                            API_KEY,
                            setProfileData,
                            setError,
                            setIsModalOpen
                        );
                    } else {
                        console.log("No venue to delete");
                    }
                }}
                isError={error !== null}
            />


        </div>
    );
}

