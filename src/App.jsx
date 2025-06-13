import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import AuthProvider from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import OilCategory from "./Pages/OilCategory";
import CoconutSnacks from "./Pages/CoconutSnacks";
import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";
import BeautyProducts from "./Pages/BeautyProducts";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import CookiePolicy from "./Pages/CookiePolicy";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <ToastProvider>
                    <Router>
                        <div>
                            <Navbar />                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/oil" element={<OilCategory />} />
                                <Route path="/oil/:id" element={<ProductDetail />} />
                                <Route path="/snacks" element={<CoconutSnacks />} />
                                <Route path="/product/:id" element={<ProductDetail />} />
                                <Route path="/beauty" element={<BeautyProducts />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                <Route path="/terms-of-service" element={<TermsOfService />} />
                                <Route path="/cookie-policy" element={<CookiePolicy />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/profile" element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                } />
                            </Routes>
                            <ToastContainer />
                        </div>
                    </Router>
                </ToastProvider>
            </CartProvider>
        </AuthProvider>
    )
}

export default App;