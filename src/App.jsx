import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import AllVenues from "./Components/Pages/Venues/AllVenues";
import SingleVenue from "./Components/Pages/Venues/SingleVenue";
import AboutUs from "./Components/Pages/AboutUs";
import Contact from "./Components/Pages/Contact";
import LoginForm from './Components/Pages/Authentication/LoginForm';
import LoginCustomer from './Components/Pages/Authentication/LoginCustomer';
import LoginVenueManager from './Components/Pages/Authentication/LoginVenueManager';
import RegisterType from "./Components/Pages/Authentication/RegisterType";
import RegisterCustomer from "./Components/Pages/Authentication/RegisterCustomer";
import RegisterVenueManager from "./Components/Pages/Authentication/RegisterVenueManger";
import { AuthProvider } from "./Components/Pages/Authentication/AuthContext";
import RouteNotFound from "./Components/RouteNotFound";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="venue_list" element={<AllVenues />} />
          <Route path="/single_venue/:id" element={<SingleVenue />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<AuthProvider><LoginForm /></AuthProvider>} />
          <Route path="/" element={<AuthProvider><LoginCustomer /></AuthProvider>} />
          <Route path="/" element={<AuthProvider><LoginVenueManager /></AuthProvider>} />
          <Route path="register_customer" element={<AuthProvider><RegisterCustomer /></AuthProvider>} />
          <Route
            path="register_venue_manager"
            element={<AuthProvider><RegisterVenueManager /></AuthProvider>}
          />
          <Route path="register_type" element={<RegisterType />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
