import React from 'react'
import Contact from "../pages/Contact.jsx";
import {Outlet} from "react-router-dom"

function ContactLayout() {
    return(
        <div>
            <Contact />
            <Outlet />
        </div>
    )
}

export default ContactLayout