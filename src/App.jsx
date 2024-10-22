import NavBar from './Components/NavBar'
import Home from './Components/Pages/Home'
import AboutUs from './Components/Pages/AboutUs'
import Contact from './Components/Pages/Contact'
import LogIn from './Components/Pages/LogIn'
import Register from './Components/Pages/Register'
import LogOut from './Components/Pages/LogOut'
import RouteNotFound from './Components/RouteNotFound'


import { BrowserRouter, Routes, Route } from "react-router-dom"

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
          <Route path="logout" element={<LogOut />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
