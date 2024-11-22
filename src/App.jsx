import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
import AllVenues from "./components/Pages/Venues/AllVenues";
import SingleVenue from "./components/Pages/Venues/SingleVenue";
import AboutUs from "./components/Pages/AboutUs";
import Contact from "./components/Pages/Contact";
import Profile from './components/Pages/Profile';
import CreateVenueForm from './components/Pages/Venues/CreateVenueForm';
import UpdateVenueForm from './components/Pages/Venues/UpdateVenueForm';
import LoginForm from './components/Pages/Authentication/LoginForm';
import LoginCustomer from './components/Pages/Authentication/LoginCustomer';
import LoginVenueManager from './components/Pages/Authentication/LoginVenueManager';
import RegisterType from "./components/Pages/Authentication/RegisterType";
import RegisterCustomer from "./components/Pages/Authentication/RegisterCustomer";
import RegisterVenueManager from "./components/Pages/Authentication/RegisterVenueManger";
import { AuthProvider } from "./components/Pages/Authentication/AuthContext";
import RouteNotFound from "./components/RouteNotFound";
import Footer from "./components/Footer";


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
            <Route path="/update-venue" element={<UpdateVenueForm />} />
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
