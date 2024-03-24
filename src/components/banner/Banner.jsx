import React from 'react';
import '../../../public/font.css'
const Banner = () => {
    const takeDown = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    }
    
    return (
        <div className='relative max-w-[1170px] mx-auto font'>
            <img className='w-full' src="https://img.freepik.com/free-photo/hiring-career-employment-human-resources-concept_53876-121273.jpg?t=st=1711273745~exp=1711277345~hmac=6d89c6e01ab8029d893191da0ce8ea68d89c612839e2c43b8e70ee58543291db&w=826" alt="" />
            <div className='absolute inset-0 bg-gray-700 opacity-50'></div> {/* Overlay for gray effect */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                <h1 className='text-[56px] font-bold'>Welcome to <span className='bg-gray-600'>Career Hub</span></h1>
                <p className='text-lg text-over '>Discover and seize exciting new career paths, embrace growth, and explore endless job opportunities today!</p>
                <div>
                    <button className='btn btn-secondary' onClick={takeDown}>Explore More</button>
                    <button className='btn bg-transparent border-white'> Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
