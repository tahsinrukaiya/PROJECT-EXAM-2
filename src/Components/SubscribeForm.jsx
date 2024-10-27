export default function SubscribeForm() {
    return (
        <>
            <div className="sub-form-container mt-5 mx-5">
                <div className="col-lg-6 sub-form">
                    <h3 className="sub-form-title text-center mb-3">Subscribe to our newsletter</h3>
                    <div>
                        <form className="d-flex flex-row mb-2 p-1 input-group">
                            <input type="email" className="form-control rounded border-2 mx-3" placeholder="Your Email" />
                            <button className="btn flex-shrink-0 sub-btn rounded-pill" type="submit">Subscribe</button></form>
                        <p className="under-text text-center">I agree to receive Absolution newsletters</p>
                    </div>
                </div>
            </div>
        </>
    )
}