'use client';

import Link from 'next/link';
import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
});
const NavItems = ({ value, icons, href, handleClick, index, active }) => {
  const onClick = () => {
    handleClick(index);
  };
  return (
    <li
      // onClick={onClick}
      className={` ${
        active ? 'bg-[#f8b602] text-white' : ' text-[#A098AE]'
      } w-[160px]  md:w-[64px] active:bg-[#f8b602] lg:w-[200px]  h-[64px] py-[16px] mx-auto rounded-[16px] items-center gap-[24px] shadow-[0px 20px 50px 0px rgba(46,46,46,0.05)]`}>
      <a
        href={href}
        className={`text-[18px]  font-[500] ${poppins.className} mx-auto flex items-center  `}>
        <div className='w-fit shrink-0'>{icons}</div>
        <span className='flex md:hidden lg:flex text-start'>{value}</span>
      </a>
    </li>
  );
};

export default NavItems;
