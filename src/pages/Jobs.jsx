import React from "react";
import {Link, useLoaderData} from "react-router-dom";

const Jobs = () => {

    const jobData = useLoaderData();
    return(
        <div>
            <ul className="jobs">
                {jobData.map((job) => {
                    return <Link to={job.id.toString()} key={job.id}>
                        <h4>{job.title}</h4>
                        <p>{job.location}</p>
                    </Link>
                })}
            </ul>
        </div>
    )
}
export default Jobs

export const JobLoader = async () => {
    const res = await fetch("http://localhost:5000/jobs")
    return res.json()
}