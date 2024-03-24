import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import SomethingNew from "./SomethingNew";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../public/font.css'

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [Jobs, setJobs] = useState([]); // Initialize Jobs state as an array

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        let ara = [];
        for (let i = 0; i < storedJobIds.length; i++) {
            let x = parseInt(storedJobIds[i]);
            ara.push(x); // Push the parsed integer value to the array
        }
        console.log('First form the array:', ara);

        // Create an array to hold job objects
        let jobsArray = [];
        for (let n = 0; n < ara.length; n++) {
            const job = jobs.find(job => job.id === ara[n]);
            console.log(job);
            jobsArray.push(job);
        }
        setJobs(jobsArray);
        console.log('its very very very important m,', Jobs);

        console.log('its from the database', storedJobIds);

        const jobsFromLocalStorage = jobs.filter(job => !storedJobIds.includes(job.id));
        setAppliedJobs(jobsFromLocalStorage);
        setDisplayJobs(jobsFromLocalStorage);
    }, [jobs]); // Ensure useEffect runs when jobs data changes

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    const clearStorage =() =>{
        toast.success("Local Storage cleeared sucesfully .");
        window.location.reload();
        localStorage.clear();
       
    }

    return (
        <>
            {/* <div>
                <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
                <ul>
                    {
                        displayJobs.map(j => (
                            <li key={j.id}>
                                <span>{j.job_title} {j.company_name}: {j.remote_or_onsite}</span>
                            </li>
                        ))
                    }
                </ul>

            </div> */}

            <div className="border p-4 font">
                {
                    Jobs.map((job, index) => <SomethingNew key={index} Job={job} />)
                }
            </div>

            <div className="font">
                <button className="btn btn-primary" onClick={clearStorage}>Clean All Datas</button>
                <ToastContainer />
            </div>

        </>
    );
};

export default AppliedJobs;
