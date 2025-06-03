import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./Pages/About";



const App = () => {
    return (
        <div>
            <Navbar />,
            <Hero/>,
            <Product/>
            <Testimonials/>
            <Contact/>
            <Footer/>
           
        </div>

        
    )

}
export default App;