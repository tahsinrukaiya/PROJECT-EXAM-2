import Logo from "../assets/logo.JPG"

export default function Footer() {
    return (
        <>
            <footer className="bg-body-tertiary text-center mt-5">
                <div className="footer-container">
                    <div className="container pt-4">
                        <h5 className="footer-text">This website was created by Rukaiya Tahsin as part of her studies at Noroff School.
                        </h5>
                    </div>
                    <div className="container p-2">
                        <img src={Logo} className="footer-logo"></img>
                    </div>
                    <div className="container p-4 pb-0">
                    </div>
                    <div className="text-center p-2">
                        <h6 className="copyright">© 2024 Copyright : Holidayz.com</h6>
                    </div>
                </div>

            </footer>
        </>
    )
}