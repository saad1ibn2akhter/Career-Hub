import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Featuredjobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/career-hub/main/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Featured Jobs : {jobs.length}</h1>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus consectetur id dolor adipisci. Vero quisquam enim sequi culpa reiciendis quis.</p>
            <div>
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
        </div>
    );
};

export default Featuredjobs;
