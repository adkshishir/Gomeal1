'use client';
import React, { useEffect, useState } from 'react';
import SideMenu from '../dashboard/SideMenu';
import RightMenu from '../dashboard/RightMenu';
import Offers from '../component/Offers';

const page = () => {
  const [likeData, setLikeData] = useState([]);
  // const dark = JSON.parse(localStorage.getItem('dark'));
  const [dark, setDark] = useState();
  useEffect(() => {
    const darktemp = localStorage.getItem('dark');
    darktemp && setDark(JSON.parse(darktemp));
    const like = localStorage.getItem('like');
    like && setLikeData(JSON.parse(like));
  }, []);
  return (
    <div className={` w-[100vw] flex bg-[#F5F5F5]`}>
      <SideMenu light={dark} />
      <aside
        className={`flex ${
          !dark && 'invert bg-[#F5F5F5]'
        } flex-wrap justify-around w-full h-fit  `}>
        {likeData &&
          likeData.map((item, index) => (
            <Offers
              key={index}
              price={5.9}
              title={item.title}
              image={item.image}
              liked={item.like}
            />
          ))}
      </aside>
      <RightMenu light={dark} setLight={setDark} />
    </div>
  );
};

export default page;
