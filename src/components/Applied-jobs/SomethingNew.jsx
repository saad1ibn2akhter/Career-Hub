import React from 'react';

const SomethingNew = ({Job}) => {
    const {id ,salary , company_name , job_title} = Job;
    console.log(salary);
    return (
        <div>
            <div className='border'>
                <h1>ID :{id}</h1>
                <h1>title:{job_title}</h1>
                <h1>Company : {company_name}</h1>
                <h1>Salary : {salary}</h1>
            </div>
        </div>
    );
};

export default SomethingNew;