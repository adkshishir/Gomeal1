import Link from 'next/link';
import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
});
const NavItems = ({ value, icons, active }) => {
  return (
    <li
      className={` ${
        active ? 'bg-[#f8b602] text-white' : ' text-[#A098AE]'
      } flex w-[252px] h-[64px] py-[16px] px-[24px] rounded-[16px] items-center gap-[24px] shadow-[0px 20px 50px 0px rgba(46,46,46,0.05)]`}>
      <div className='w-[40px] h-[40px] shrink-0'>{icons}</div>{' '}
      <Link
        className={`text-[18px] font-[500] ${poppins.className} `}
        href='/dashboard'>
        {value}
      </Link>
    </li>
  );
};

export default NavItems;
