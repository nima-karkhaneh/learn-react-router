import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVioH8m7Ig5IwAY5UVpr5Ng8YYR9yi0lYSXQ&s" alt=""/>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/products"><li>Products</li></Link>

            </ul>
            <button>Get started</button>
        </div>
    )
}

export default Navbar;