import React from 'react';
import '../../../public/font.css'
const Category = ({category}) => {
    const {logo ,category_name , id, availability} = category;
    return (
        <div className='shadow-xl p-3 rounded-md font'>
           
            <img src={logo} alt="" />
            <h1 className='font-bold text-[18px] '>{category_name}</h1>
            <h1>{availability}</h1>
            <button className='btn btn-success text-white text-[20px] font-medium'>Show Details</button>
            {/* <p>id:{id}</p> */}
        </div>
    );
};

export default Category;