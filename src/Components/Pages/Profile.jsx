import { useEffect, useState } from "react";
import { loadAuthData } from "../../utils/storage";
import { Link } from "react-router-dom";

export default function Profile() {
    const [authData, setAuthData] = useState(null);

    useEffect(() => {
        const data = loadAuthData();
        setAuthData(data);
    }, []);

    if (!authData) {
        return <div>Loading...</div>;
    }

    const userRole = authData.venueManager ? "Venue Manager" : "Customer";

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={authData.banner.url || "banner"}
                                        alt="Avatar" className="img-fluid my-5 mx-2 banner" />
                                    <button className="rounded-pill px-3 pt-1 pb-1 mx-3 edit-banner-btn">
                                        Edit Banner
                                    </button>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h2 className="heading-profile">Information</h2>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="row pt-1">
                                            <div className="col-10 mb-3 col-lg-10">
                                                <h6 className="profile-data">Email</h6>
                                                <p className="text-muted">{authData.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6 className="profile-data">Name</h6>
                                                <p className="text-muted">{authData.name}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6 className="profile-data">Role</h6>
                                                <p className="text-muted">{userRole}</p>
                                            </div>
                                        </div>
                                        {authData.venueManager && <Link to="/lease-venue"><button className="lease-btn rounded-pill mb-4 px-3 pt-1 pb-1">Lease a venue</button></Link>}
                                        <h6 className="profile-data">Your Venues</h6>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="venuelist">
                                            <p>Venue 1</p>
                                            <p>venue 2</p>
                                            <p>venue 3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
