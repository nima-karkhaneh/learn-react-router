import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='products' element={<Products />}></Route>

            </Route>
        )
    )
    return(
     <RouterProvider router={router} />
    )
}

export default App;

