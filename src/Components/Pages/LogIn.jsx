import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <>
            <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
                <div className="col-10 col-md-6 col-lg-6">
                    <h1 className="form-title text-center mb-4">Log in as a user to your Holidayz account here</h1>
                    <div className="form-text mb-3">Not registered before?<Link to="/register"><span className="register-link mx-2">Register here!</span></Link></div>
                    <form className="login-form rounded">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn w-50 rounded-pill submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
