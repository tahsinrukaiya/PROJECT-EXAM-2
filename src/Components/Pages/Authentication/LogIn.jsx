import { Link } from "react-router-dom";

/*import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(email, password);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
*/

export default function LogInCustomer() {
  return (
    <>
      <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
        <div className="col-10 col-md-6 col-lg-6">
          <h1 className="form-title text-center mb-4">Log in here</h1>
          <div className="form-text mb-3">
            Not registered before?
            <Link to="/register_type">
              <span className="register-link mx-2">Register here!</span>
            </Link>
          </div>
          <form className="login-form rounded">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              ></input>
            </div>
            <button type="submit" className="btn w-50 rounded-pill submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
