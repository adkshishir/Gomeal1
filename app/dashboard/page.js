'use client';
import React, { createContext, useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import Main from './Main';
import RightMenu from './RightMenu';
import Link from 'next/link';

const page = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('dark');
    setLight(JSON.parse(mode));
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
