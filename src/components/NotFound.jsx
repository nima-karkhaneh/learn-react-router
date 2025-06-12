import React from "react";
import {useNavigate} from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate()
    return(
        <div className="not-found-err">
            <h1>404 | Page not found</h1>
            <button className="home-redirect-btn" onClick={() => navigate("/")}>Go to the home page</button>
        </div>
    )
}

export default NotFound