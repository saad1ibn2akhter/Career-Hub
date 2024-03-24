import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/font.css'

const Single = ({ single }) => {
    const { id, company_name, logo, job_title, location, remote_or_onsite, job_type, salary, job_description, job_responsibility, educational_requirements, experiences } = single;
    return (
        <div className='font'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <div className='text-start flex-1'>
                        <p>{company_name}</p>
                        <p>{location}</p>
                        <p>{salary}</p>
                        <div className='space-x-3'>
                            <button className='btn'>{remote_or_onsite}</button>
                            <button className='btn'>{job_type}</button>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/Job/${id}`}>
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;