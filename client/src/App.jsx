import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import DoctorsAppointment from "./pages/DoctorsAppointment";
import LoginRegister from "./pages/LoginRegister";

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<DoctorsAppointment />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
      {pathname !== "/login" && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
