import React from "react";
import {useNavigate, useRouteError} from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return(
        <div className="no-job-match-err">
            <h3>Error has occurred</h3>
            <p>{error.message}</p>
            <button className="homepage-err-btn" onClick={() => navigate("/")}>Back to home</button>
        </div>
    )
}

export default Error;