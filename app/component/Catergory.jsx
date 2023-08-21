import React, { useEffect, useState } from 'react';
import icons from '../assets/icons';

const Catergory = ({ icon, title, className }) => {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('dark')));

  return (
    <div
      className={` w-fit p-4 px-6 lg:w-[160px] lg:h-[160px] gap-4 bg-white text-black  text-[18px] font-[400px] ${className} rounded-2xl flex flex-col justify-center items-center mx-3 `}>
      <div className=' w-full justify-center flex '>{icon}</div>
      <div className='text-center'>{title}</div>
    </div>
  );
};

export default Catergory;
