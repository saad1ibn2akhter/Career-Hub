import React, { useEffect, useState } from 'react';
import Category from './Category';
import '../../../public/font.css'

const CategoryList = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/dake-data-2-career-hub/main/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    return (

        <>
            <div className='font'>
                <h1 className='text-3xl font-bold text-center'>Category list : {categories.length} </h1>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, illo fugiat blanditiis totam necessitatibus beatae explicabo cum ipsum nihil ipsam?</p>
            </div>
            <div className='font'>
                <div className='p-4  border'>
                    <input className='border px-5 py-1' type="text" />
                </div>  
                <div className=''>
                    <button className='btn btn-ghost bg-gray-400'>Search</button>
                </div>
                <div className='grid grid-cols-4'>
                {
                    categories.map(category => <Category key={category.id} category={category}> </Category>)
                }
                </div>
            </div>
        </>
    );
};

export default CategoryList;