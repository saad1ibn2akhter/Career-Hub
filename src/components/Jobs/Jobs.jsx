import React, { useEffect, useState } from 'react';
import Single from './Single';
import '../../../public/font.css'
const Jobs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-data-react-career-hub-1/main/fake-data')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='font'>
            <h1>available jobs in then Market</h1>
            <div className="hero min-h-screen bg-base-200 text-start">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Searching for <span className='text-violet-500'>JOBS</span>?</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 max-w-[1170px] mx-auto'>
                {
                    data.map(single => <Single single={single}></Single>)
                }
            </div>
        </div>
    );
};

export default Jobs;
// grid grid-cols-3 max-w-[1170px] mx-auto