import { useState } from "react";
import { useAuth } from "../Authentication/AuthContext";
import { Link } from "react-router-dom";
import SuccessModal from "../Authentication/SuccessModal"

export default function RegisterVenueManager() {
  const { handleRegister } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleRegister(formData);
      setSuccessMessage("Your registration was successful!");
      setShowModal(true);
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
      <div className="col-10 col-md-6 col-lg-6">
        <h1 className="form-title text-center mb-4">
          Register yourself as a venue manager on Holidayz.com
        </h1>
        <div className="form-text mb-3">
          Already a user?
          <Link to="/login_venue_manager">
            <span className="login-link mx-2">Log in here!</span>
          </Link>
        </div>
        <form className="login-form rounded" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn w-50 rounded-pill submit-btn">
            Submit
          </button>
        </form>
      </div>
      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={successMessage}
      />
    </div>
  );
}
