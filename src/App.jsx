import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar";
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
        <CartProvider>
            <ToastProvider>
                <Router>
                    <div>
                        <Navbar />                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/oil" element={<OilCategory />} />
                            <Route path="/oil/:id" element={<ProductDetail />} />
                            <Route path="/snacks" element={<CoconutSnacks />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/beauty" element={<BeautyProducts />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </div>
                </Router>
            </ToastProvider>
        </CartProvider>
    )
}

export default App;