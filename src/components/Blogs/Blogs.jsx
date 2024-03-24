import React from 'react';
import '../../../public/font.css'
const Blogs = () => {
    return (
        <div className='font'>
            <h1>Blogs Comming Soon</h1>
            <div className="flex gap-5 justify-center">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 51 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Blogs;