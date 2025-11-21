import React from "react"
import Nav from "./components/navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/homepage"
import Login from "./pages/loginpage"
import Register from "./pages/registration"
import CartPage from "./pages/cartpage"
import AdminDashboard from "./pages/admin/AdminDashboard"
function App() {

  return (
    <>
      <Nav />
        <Routes>
           <Route path="/" element={ <Home /> } />
           <Route path="/login" element={ <Login /> } />
           <Route path="/register" element={ <Register/> } />
           <Route path="/cart" element={<CartPage />} />
           <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
     </>
  )
}

export default App
