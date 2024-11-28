import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import SuccessModalLog from "./SuccessModalLog";

export default function LogInCustomer() {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVenueManager, setIsVenueManager] = useState(false);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ email, password, venueManager: isVenueManager });
      setSuccessMessage("Login successful!");
      setShowModal(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Log in failed", error);
      if (error.response && error.response.status === 401) {
        setError("Wrong username or password");
      } else {
        setError("Wrong username or password. Please try again.");
      }
    }
  };

  return (
    <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
      <div className="col-10 col-md-6 col-lg-6">
        <div className="form-text mb-3">
          Not registered before?
          <Link to="/register_type">
            <span className="register-link mx-2">Register here!</span>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="login-form rounded">
          <h1 className="text-center form-title mb-4">
            Login {isVenueManager ? "as Venue Manager" : "as Customer"}
          </h1>

          <div className="mb-3">
            <label className="form-label">Login as:</label>
            <div>
              <input
                type="radio"
                id="customer"
                name="role"
                value="customer"
                checked={!isVenueManager}
                onChange={() => setIsVenueManager(false)}
              />
              <label htmlFor="customer" className="ms-2">Customer</label>
            </div>
            <div>
              <input
                type="radio"
                id="venueManager"
                name="role"
                value="venueManager"
                checked={isVenueManager}
                onChange={() => setIsVenueManager(true)}
              />
              <label htmlFor="venueManager" className="ms-2">Venue Manager</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <h6 className="login-error mb-3">{error}</h6>}
          <button type="submit" className="btn w-50 rounded-pill submit-btn">
            Submit
          </button>
        </form>
      </div>
      <SuccessModalLog
        show={showModal}
        onClose={() => setShowModal(false)}
        message={successMessage}
      />
    </div>
  );
}
