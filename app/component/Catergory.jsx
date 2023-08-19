import React from 'react';
import icons from '../assets/icons';

const Catergory = ({ icon, title, className }) => {
  return (
    <div
      className={`bg-white w-[160px] h-[160px] gap-4 text-[#A098AE] text-[18px] font-[400px] ${className} rounded-2xl flex flex-col justify-center items-center mx-auto `}>
      <div className=' w-full justify-center flex'>{icon}</div>
      <div className='text-center'>{title}</div>
    </div>
  );
};

export default Catergory;
