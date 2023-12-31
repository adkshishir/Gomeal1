'use client';
import React, { createContext, useEffect, useState } from 'react';
import SideMenu from './dashboard/SideMenu';
import Main from './dashboard/Main';
import RightMenu from './dashboard/RightMenu';
import Link from 'next/link';

const page = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('dark');
    setLight(JSON.parse(mode))
  }, []);
  return (
    <>
      {/* <LightProvider.Provider value={JSON.parse(localStorage.getItem('dark'))}> */}

      <div className={`flex w-[100vw] h-fit`}>
        <SideMenu light={light} />
        <Main light={light} />
        <RightMenu setLight={setLight} light={light} />
      </div>
      {/* </LightProvider.Provider> */}
    </>
  );
};

export default page;
