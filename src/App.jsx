import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import ContactLayout from "./layout/ContactLayout.jsx";
import ContactInfo from "./components/ContactInfo.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./components/NotFound.jsx";


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='contact' element={<ContactLayout />}>
                    <Route path="info" element={<ContactInfo />}></Route>
                    <Route path="form" element={<ContactForm />}></Route>
                </Route>
                <Route path='products' element={<Products />}></Route>
                <Route path="*" element={<NotFound />}/>
            </Route>
        )
    )
    return(
     <RouterProvider router={router} />
    )
}

export default App;

