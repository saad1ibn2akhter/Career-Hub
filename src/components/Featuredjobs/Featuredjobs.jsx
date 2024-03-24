import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
// import './Jobs.json'
import '../../../public/font.css'

const Featuredjobs = () => {
    const [jobs, setJobs] = useState([]);
    const [cardLenght, setCardLength] = useState(3);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-data-react-career-hub-1/main/fake-data')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className='font'>
            <h1 className='text-center text-3xl font-bold'>Featured Jobs : {jobs.length}</h1>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus consectetur id dolor adipisci. Vero quisquam enim sequi culpa reiciendis quis.</p>
            <div className='grid grid-cols-3 gap-[24px]'>
                {
                    jobs.slice(0, cardLenght).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={cardLenght === jobs.length && 'hidden'}>
                <button onClick={() => setCardLength(jobs.length)} className=' btn btn-secondary'>Show All</button>
            </div>
            <div className={cardLenght === 3 && 'hidden'}>
                <button onClick={()=> setCardLength(3)} className='btn btn-secondary'>Show Less</button>
            </div>
        </div>
    );
};

export default Featuredjobs;
