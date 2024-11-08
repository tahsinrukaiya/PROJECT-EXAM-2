import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from "../../config";
import { API_KEY } from "../../config";


export default function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [authData, setAuthData] = useState(null);
    const [error, setError] = useState(null);
    const [userRole, setUserRole] = useState(null);


    const token = localStorage.getItem('accessToken');
    console.log(token);
    const apiKey = API_KEY;
    const storedAuthData = JSON.parse(localStorage.getItem('authData'));
    const name = storedAuthData?.name;

    useEffect(() => {
        if (storedAuthData) {
            setAuthData(storedAuthData);
        } else {
            setError('No user data found');
        }
    }, []);

    useEffect(() => {
        async function fetchProfileData() {
            if (!name || !token) {
                setError('Missing name or token');
                return;
            }

            try {
                const encodedName = encodeURIComponent(name);
                const url = `${API_URLS.PROFILE}/${encodedName}`;
                console.log(url);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        "X-Noroff-API-Key": apiKey
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }

                const result = await response.json();
                setProfileData(result.data);
                const venue = JSON.parse(localStorage.getItem('newVenue'));
                if (venue) {
                    setProfileData(prevData => ({
                        ...prevData,
                        venues: [...(prevData.venues || []), venue.data] // Add new venue to the list of venues
                    }));
                }
                setUserRole(result.data.venueManager ? 'Venue Manager' : 'Customer');
            } catch (err) {
                setError(err.message);
            }
        }

        fetchProfileData();
    }, [name, token]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!authData || !profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={profileData.banner?.url || "banner"}
                                    alt="Banner"
                                    className="img-fluid my-5 mx-2 banner"
                                />
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
                                            <p className="text-muted">{profileData.email}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6 className="profile-data">Name</h6>
                                            <p className="text-muted">{profileData.name}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6 className="profile-data">Role</h6>
                                            <p className="text-muted">{userRole}</p>
                                        </div>
                                    </div>
                                    {profileData.venueManager && (
                                        <Link to="/lease-venue">
                                            <button className="lease-btn rounded-pill mb-4 px-3 pt-1 pb-1">
                                                Lease a venue
                                            </button>
                                        </Link>
                                    )}
                                    <h6 className="profile-data">Your Venues</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="venuelist col-12 col-md-10 col-lg-10">
                                        {profileData.venues && profileData.venues.length > 0 ? (
                                            profileData.venues.map((venue) => (
                                                <div key={venue.id} className="card">
                                                    <img
                                                        className="card-img-top"
                                                        src={venue.media[0]?.url}
                                                        alt={venue.name} />
                                                    <h6 className="profile-card-title mt-2 mx-2">{venue.name}</h6>
                                                    <div className="d-flex gap-5 button-container mb-3 px-4">

                                                        <button className="update-venue rounded-pill"><i className="fa-regular fa-pen-to-square"></i>Update</button>
                                                        <button className="delete-venue rounded-pill "><i className="fa-solid fa-trash"></i>Delete</button>

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
        </div >
    );
}
