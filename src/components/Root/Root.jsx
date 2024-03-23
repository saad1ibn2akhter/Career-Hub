import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
Footer
const Root = () => {
    return (
        <>
            <div className='max-w-6xl text-center mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;