import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/font.css'

const SomethingNew = ({ Job }) => {
    const { id, salary, company_name, job_title, job_type, logo, remote_or_onsite, location } = Job;
    console.log(salary);
    return (
        <div className='border font'>
            <div className='flex space-x-5'>
                <div className='w-[250px] h-[200px]'>
                    <img className='w-full h-full' src={logo} alt="" />
                </div>
                <div>
                    <h1>ID :{id}</h1>
                    <h1>title:{job_title}</h1>
                    <h1>Company : {company_name}</h1>
                    <div className='flex space-x-3'>
                        <button className='btn'>{job_type}</button>
                        <button className='btn'>{remote_or_onsite}</button>
                    </div>
                    <div>
                        <div>
                            <h1>{location}</h1>
                        </div>
                        <div>
                            <h1>Salary :{salary}</h1>
                        </div>
                    </div>
                    <div>
                        <Link to={`/Job/${id}`}>
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SomethingNew;