import NavBar from './Components/NavBar'
import Home from './Components/Pages/Home'
import AboutUs from './Components/Pages/AboutUs'
import Contact from './Components/Pages/Contact'
import LogIn from './Components/Pages/LogIn'
import Register from './Components/Pages/Register'
import RouteNotFound from './Components/RouteNotFound'
import Footer from './Components/Footer'


import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterType from './Components/Pages/RegisterType'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="register_type" element={<RegisterType />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
