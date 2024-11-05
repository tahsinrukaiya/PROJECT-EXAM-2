import { NavLink, Link } from "react-router-dom";
import Menubar from "../assets/bar.JPG";
import { useAuth } from "../Components/Pages/Authentication/AuthContext"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../assets/logo.JPG";

export default function NavBar() {

  const { authData, handleLogout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav_container">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <img src={Menubar} className="bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-5 mb-2 pb-4 mb-lg-0">
            <li className="nav-item me-5">
              <NavLink to="/" className="links">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink to="/about_us" className="links">
                About Us
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink to="/contact" className="links">
                Contact
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink to="/register_type" className="links">
                Register
              </NavLink>
            </li>
            {authData ? (
              <>
                <li className="nav-item me-5">
                  <NavLink to="/profile"> <i className="fa-solid fa-user user-icon"></i></NavLink>
                </li>
                <li className="nav-item me-5">
                  <i
                    className="fas fa-sign-out-alt logout-icon"
                    onClick={handleLogout}
                    style={{ cursor: 'pointer', fontSize: '1.2rem' }}
                    title="Logout"
                  ></i>
                </li>
              </>
            ) : (
              <li className="nav-item me-5">
                <NavLink to="/login" className="links">
                  Login
                </NavLink>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
