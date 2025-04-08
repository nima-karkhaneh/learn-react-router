import React from 'react'
import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

function RootLayout() {
    return(
        <div>
            <Navbar />
            <div className="routes">
                <Outlet />
            </div>

        </div>
    )
}

export default RootLayout;