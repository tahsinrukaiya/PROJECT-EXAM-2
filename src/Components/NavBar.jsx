import { NavLink } from 'react-router-dom';
import Menubar from "../assets/bar.JPG";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from "../assets/logo.JPG";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav_container">
            <div className="container-fluid">
                <a className="navbar-brand mx-4" href="#"><img src={Logo} className="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><img src={Menubar} className="bars" /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-5 mb-2 pb-4 mb-lg-0">
                        <li className="nav-item me-5">
                            <NavLink to="/" className="links">Home</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/about_us" className="links">About Us</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/contact" className="links">Contact</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/login" className="links">Log In</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink to="/logout" className="links">Log Out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
