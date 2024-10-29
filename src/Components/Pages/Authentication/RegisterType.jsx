import { Link } from "react-router-dom"

export default function RegisterType() {
    return (
        <>
            <div className="main_container d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-6 col-lg-6 pb-3 reg-type-container rounded">
                    <div className="text-center"><h1 className="reg-type-title mt-5 ">Choose Register type</h1></div>
                    <div className="d-flex flex-row bd-highlight mb-3 mt-5">
                        <div className="button-container mx-auto">
                            <Link to="/register_customer"><button className="reg-type-btn rounded-pill px-4 pt-2 pb-2 me-2">Register as a Customer</button> </Link>
                            <Link to="/register_venue_manager"> <button className="reg-type-btn rounded-pill px-4 pt-2 pb-2">Register as a Venue Manager</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}