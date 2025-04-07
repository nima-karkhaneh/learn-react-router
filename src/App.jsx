import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
    return(
        <div>
            <Navbar />
            <div className="routes">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;

