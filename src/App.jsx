import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import AllVenues from "./Components/Pages/Venues/AllVenues";
import SingleVenue from "./Components/Pages/Venues/SingleVenue";
import AboutUs from "./Components/Pages/AboutUs";
import Contact from "./Components/Pages/Contact";
import Profile from './Components/Pages/Profile';
import CreateVenueForm from './Components/Pages/Venues/CreateVenueForm';
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
      <AuthProvider>
        <div>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="venue_list" element={<AllVenues />} />
            <Route path="/single_venue/:id" element={<SingleVenue />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="/" element={<LoginCustomer />} />
            <Route path="/" element={<LoginVenueManager />} />
            <Route path="register_customer" element={<RegisterCustomer />} />
            <Route
              path="register_venue_manager"
              element={<RegisterVenueManager />}
            />
            <Route path="/lease-venue" element={<CreateVenueForm />} />
            <Route path="register_type" element={<RegisterType />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
