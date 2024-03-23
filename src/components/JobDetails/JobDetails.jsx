
// import { useLoaderData, useParams } from 'react-router-dom';


// const JobDetails = () => {
//     const jobs = useLoaderData();

//     const { id } = useParams();
//     const intId = parseInt(id);
//     let job;
//     let f;
//     for (let i = 0; i < jobs.length; i++) {
//         f = parseInt(jobs[i].id);
//         console.log('ID of current job:', jobs[i].id);
//         console.log('Parsed ID:', f);
//         if (f === intId) {
//             job = jobs[i];
//             break;
//         }
//     }
    


//     return (
//         <>
//             <div>


//             </div>
//         </>
//     );
// };

// export default JobDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedJobApplication } from '../utility/localStorage';

const JobDetails = () => {
    const [job, setJob] = useState(null);
    const { id } = useParams();

    const notify = () =>{
        toast.success("Application Submitted Succesfully!!");
        savedJobApplication(id);
    }

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
    const {salary} = job;
    return (
        <div>
            <h1>{salary}</h1>
            <button onClick={notify} className='btn '>Apply Now</button>
            <ToastContainer />
            {/* <h2>{job.job_title}</h2>
            <p>Company: {job.company_name}</p>
            <p>Location: {job.location}</p> */}
            {/* Add more job details as needed */}
        </div>
    );
};

export default JobDetails;
