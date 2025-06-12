import React from "react";
import {useLoaderData, useParams} from "react-router-dom";

const JobDetails = () => {
    const jobDetails = useLoaderData()
    console.log(jobDetails)
    const { id } = useParams()
    return(
        <div className="job-details">
            <p>Job title: {jobDetails.title}</p>
            <br/>
            <p>Job salary: {jobDetails.salary}</p>
            <br/>
            <p>Job location: {jobDetails.location}</p>
        </div>
    )
}

export const jobDetailsLoader = async ({ params }) => {
        const { id } = params;
        const res = await fetch (`http://localhost:5000/jobs/${id}`);
        return res.json();
}

export default JobDetails;