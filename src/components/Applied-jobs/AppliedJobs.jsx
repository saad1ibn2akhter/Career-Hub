import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import { getStoredJobApplication, savedJobApplication } from '../utility/localStorage';

const AppliedJobs = () => {
    const [js ,setJobs] = useState([]);
    const j = useLoaderData();
    // console.log(typeof jobs)
    useEffect(()=>{
        // const jobs = j.json() ;
        fetch(j)
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    const {id} = useParams();
    Object.keys(js).map(key => js[key]);
    console.log(typeof jobs);
   useEffect(()=>{
    const storedJobIds = getStoredJobApplication();
    if(jobs.length > 0){
        const jobsApplied = [];
        for(const id of storedJobIds){
            const job = jobs.find(job => job.id === id);
            if(job){
                jobsApplied.push(job);
            }
        }
        console.log(jobs , storedJobIds ,jobsApplied);
    }
    
   },[])
    return (
        <div>
            <h1>Applied jobs :</h1>
            
            <h1>Jobs applicable at max : </h1>
        </div>
    );
};

export default AppliedJobs;