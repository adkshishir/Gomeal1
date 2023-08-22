'use client';
import React, { useEffect, useState } from 'react';
import SideMenu from '../dashboard/SideMenu';
import RightMenu from '../dashboard/RightMenu';

const page = () => {
  const [light, setLight] = useState();
  useEffect(() => {
    const lights = localStorage.getItem('dark');
    setLight(JSON.parse(lights));
  }, []);
  return (
    <div>
      <SideMenu light={light} />
      <RightMenu light={light} setLight={setLight} />
    </div>
  );
};

export default page;
