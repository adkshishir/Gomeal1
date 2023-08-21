'use client';
import React, { createContext, useEffect, useState } from 'react';
import SideMenu from './dashboard/SideMenu';
import Main from './dashboard/Main';
import RightMenu from './dashboard/RightMenu';
import Link from 'next/link';

const page = () => {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem('dark')));
  const LightProvider = createContext();
  useEffect(async () => {
    setLight(JSON.parse(localStorage.getItem('dark')));
    console.log(JSON.parse(localStorage.getItem('dark')));
  }, [JSON.parse(localStorage.getItem('dark'))]);
  return (
    <>
      {/* <LightProvider.Provider value={JSON.parse(localStorage.getItem('dark'))}> */}

      <div className={`flex w-[100vw] h-fit`}>
        <SideMenu />
        <Main />
        <RightMenu />
      </div>
      {/* </LightProvider.Provider> */}
    </>
  );
};

export default page;
