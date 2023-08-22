import React from 'react';
import Btn from './Btn';
import icons from '../assets/icons';
const Banner = () => {
  // #F8B602, #F0C868, #F0C86800
  return (
    <div className='w-[252px] h-[202px] shrink-0 bg-[#ffc31e] bg-gradient-to-tl from-[#F0C86800] to-[# #F8B602] relative overflow-hidden p-8 rounded-xl mx-auto mt-10 md:hidden lg:block'>
      <img
        src='/images/maskgroup.jpg'
        className='w-[170px] h-[170px] absolute  rounded-full translate-y-[50%] translate-x-[75%] object-cover opacity-40'
        alt='maskgroup'
      />
      <div className='absolute top-6 left-[85%]'>{icons.banner}</div>
      <div className=' text-[18px] font-[700] leading-normal w-[195px] text-white'>
        {' '}
        Contact us for any queries or for special reservation
      </div>
      <br />
      <Btn
        value={'Contact'}
        className={
          'w-[102px] h-[40px] rounded-lg  gap-2 font-[600] text-[14px] leading-[21px] text-[#2E2E2E] bg-white item-center font-[Poppins]'
        }
      />
    </div>
  );
};

export default Banner;
