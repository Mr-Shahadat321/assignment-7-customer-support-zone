import React from 'react';
//  import leftImg from '../assets/vector1.png'
 

const ProgressCard = () => {
    return (
        <div>
             <div className='max-w-[1280px] mx-auto my-12 flex flex-col justify-center items-center   md:flex-row md:justify-between gap-4'>
                       <div className="rounded-lg bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] h-[200px] w-[48%] flex items-center flex-col justify-center ">
                        <h2 className='text-4xl text-white font-semibold'>Resolved</h2>
                        <p className='text-3xl text-white font-semibold'>0</p>
                       </div>
                       <div className='rounded-lg bg-gradient-to-r from-[#54CF68] to-[#00827A] h-[200px] w-[48%] flex items-center flex-col justify-center'>
                        <h2 className='text-4xl text-white font-semibold'>Resolved</h2>
                        <p className='text-3xl text-white font-semibold'>0</p>
                       </div>
             </div>
        </div>
    );
};

export default ProgressCard;