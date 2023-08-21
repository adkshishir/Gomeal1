'use client';
import React, { useEffect, useState } from 'react';
import SideMenu from '../dashboard/SideMenu';
import RightMenu from '../dashboard/RightMenu';
import Offers from '../component/Offers';

const page = () => {
  const [likeData, setLikeData] = useState([]);
  const dark = JSON.parse(localStorage.getItem('dark'));
  useEffect(() => {
    const like = JSON.parse(localStorage.getItem('like'));
    setLikeData(like);
  }, []);
  return (
    <div className={`  w-[100vw]  h-fit flex  bg-[#F5F5F5]`}>
      <SideMenu />
      <aside
        className={`flex ${
          !dark && 'invert bg-[#F5F5F5]'
        } flex-wrap justify-around w-full col-span-2`}>
        {likeData &&
          likeData.map((item, index) => (
            <Offers
              key={index}
              price={5.9}
              title={item.title}
              image={item.image}
              like={item.like}
            />
          ))}
      </aside>
      <RightMenu />
    </div>
  );
};

export default page;
