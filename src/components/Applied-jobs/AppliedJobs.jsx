import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utility/localStorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    // const [appliedJobs ,setAppliedJobs] = useState([]);
    useEffect(()=>{
       const storedJobsIds = getStoredJobApplication();
       if(jobs.length > 0){
        const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))
        console.log(jobsApplied);
       }
    },[])
    return (
        <div>
            <h1>Applied jobs : </h1>
            {/* <h1>Applied jobs : {jobsApplied.length}</h1> */}
        </div>
    );
};

export default AppliedJobs;