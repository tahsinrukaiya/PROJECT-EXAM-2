import NavBar from './Components/NavBar'
import Home from './Components/Pages/Home'
import VenueList from "./Components/Pages/VenueList"
import AboutUs from './Components/Pages/AboutUs'
import Contact from './Components/Pages/Contact'
import LogIn from './Components/Pages/Authentication/LogIn'
import RegisterType from './Components/Pages/Authentication/RegisterType'
import RegisterCustomer from './Components/Pages/Authentication/RegisterCustomer'
import RegisterVenueManager from './Components/Pages/Authentication/RegisterVenueManger'
import RouteNotFound from './Components/RouteNotFound'
import Footer from './Components/Footer'


import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="venue_list" element={<VenueList />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register_customer" element={<RegisterCustomer />} />
          <Route path="register_venue_manager" element={<RegisterVenueManager />} />
          <Route path="register_type" element={<RegisterType />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
