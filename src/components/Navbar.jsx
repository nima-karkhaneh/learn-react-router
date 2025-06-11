import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return(
        <div className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVioH8m7Ig5IwAY5UVpr5Ng8YYR9yi0lYSXQ&s" alt=""/>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/products"><li>Products</li></NavLink>
                <NavLink to="/jobs"><li>Jobs</li></NavLink>
            </ul>
            <button onClick={() => navigate("/about", {replace:true})}>Get started</button>
        </div>
    )
}

export default Navbar;