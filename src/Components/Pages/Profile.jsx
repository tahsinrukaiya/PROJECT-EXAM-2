import { useEffect, useState } from "react"
import { loadUserData } from "../../utils/storage"

export default function Profile() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const data = loadUserData();
        setUserData(data);

    }, []);

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={userData?.banner.url || "banner"}
                                        alt="Avatar" className="img-fluid my-5 mx-2" />
                                    <button type="button" className="btn text-body rounded-pill px-4 mx-3 edit-banner-btn">
                                        Edit Banner
                                    </button>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h2>Information</h2>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="row pt-1">
                                            <div className="col-10 mb-3 col-lg-10">
                                                <h6>Email</h6>
                                                <p className="text-muted">{userData?.email || 'User Name'}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Name</h6>
                                                <p className="text-muted">{userData?.name || 'User Name'}</p>
                                            </div>
                                        </div>
                                        <h6>Your Venues</h6>
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
    )
}