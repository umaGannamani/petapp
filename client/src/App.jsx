import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import DoctorsAppointment from "./pages/DoctorsAppointment";
import LoginRegister from "./pages/LoginRegister";

function Layout({ isLoggedIn, onLogin, onLogout }) {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<DoctorsAppointment />} />
        <Route path="/login" element={<LoginRegister onLogin={onLogin} />} />
      </Routes>
      {pathname !== "/login" && <Footer />}
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("petapp_logged_in") === "true");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("petapp_logged_in");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </BrowserRouter>
  );
}
