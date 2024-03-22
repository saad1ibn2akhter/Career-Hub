import React from 'react';
import Banner from '../banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import Featuredjobs from '../Featuredjobs/Featuredjobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='capitalize'>this is home</h2>
            <CategoryList></CategoryList>
            <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Home;