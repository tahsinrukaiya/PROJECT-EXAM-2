//import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav_container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./src/assets/logo.jpg" className="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#">Log In</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
