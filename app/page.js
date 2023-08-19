import React from 'react';
// import { Poppins } from '@next/font/google';
import SideMenu from './dashboard/SideMenu';
import Main from './dashboard/Main';
import RightMenu from './dashboard/RightMenu';

const page = () => {
  return (
    <div className={'flex w-[1920px] h-[1626px] '}>
      <SideMenu />
      <Main />
      <RightMenu />
    </div>
  );
};

export default page;
