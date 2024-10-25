export default function LogIn() {
    return (
        <>
            <div className="form-container d-flex justify-content-center align-items-center vh-100">
                <div className="col-12 col-md-6 col-lg-4">
                    <h1 className="form-title text-center mb-4">Log In Here</h1>
                    <form className="login-form rounded">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
