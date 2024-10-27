export default function RegisterType() {
    return (
        <>
            <div className="">
                <h1 className="reg-type-title mt-5 ">Choose Register type</h1>
                <div className="d-flex flex-row bd-highlight mb-3 mt-5">

                    <div>
                        <button className="reg-type rounded-pill px-3">Register as a Customer</button>
                        <button className="reg-type rounded-pill px-3">Register as a Venue Manager</button>
                    </div>
                </div>
            </div>
        </>

    )
}