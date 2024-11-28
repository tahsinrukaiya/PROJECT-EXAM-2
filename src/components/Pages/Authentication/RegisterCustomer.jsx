import { useState } from "react";
import { useAuth } from "../Authentication/AuthContext";
import { Link } from "react-router-dom";
import SuccessModalReg from "../Authentication/SuccessModalReg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerCustomerSchema } from "../../../validation/registerForm";

export default function RegisterVenueManager() {
  const { handleRegister } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerCustomerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      venueManager: false,
    },
  });

  const onSubmit = async (formData) => {
    try {
      await handleRegister(formData);
      setSuccessMessage("Your registration was successful!");
      setShowModal(true);
      reset();
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
      <div className="col-10 col-md-6 col-lg-6">
        <h1 className="form-title text-center mb-4">
          Register yourself as a customer on Holidayz.com
        </h1>
        <div className="form-text mb-3">
          Already a user?
          <Link to="/login">
            <span className="login-link mx-2">Log in here!</span>
          </Link>
        </div>
        <form className="login-form rounded" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              {...register("name")}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              {...register("email")}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              {...register("password")}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <button type="submit" className="btn w-50 rounded-pill submit-btn">
            Submit
          </button>
        </form>
      </div>
      {showModal && (
        <SuccessModalReg
          show={showModal}
          onClose={() => setShowModal(false)}
          message={successMessage}
        />
      )}
    </div>
  );
}






































