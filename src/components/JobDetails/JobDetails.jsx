

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedJobApplication } from '../utility/localStorage';


const JobDetails = () => {
    const [job, setJob] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-data-react-career-hub-1/main/fake-data')
            .then(response => response.json())
            .then(data => {
                
                const selectedJob = data.find(job => job.id === parseInt(id));
                setJob(selectedJob);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);


    if (!job) {
        return <span className="loading loading-bars loading-xs"></span>;
    }
    const notify = () =>{
        toast.success("Application Submitted Succesfully!!");
        savedJobApplication(id,salary);
        console.log( 'iam for jobdetails',id ,salary);
        
    }
    const {salary} = job;
    return (
        <div>
            <h1>{salary}</h1>
            <button onClick={notify} className='btn '>Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
