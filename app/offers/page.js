'use client';
import React, { useEffect, useState } from 'react';
import Offers from '../component/Offers';
import SideMenu from '../dashboard/SideMenu';
import RightMenu from '../dashboard/RightMenu';

const page = () => {
  const [foods, setFoods] = useState([]);
  const [light, setLight] = useState();
  useEffect(() => {
    setLight(JSON.parse(localStorage.getItem('dark')));
    const food = JSON.parse(localStorage.getItem('data'));
    setFoods(food.hints);
    console.log(food);
  }, []);
  return (
    <div
      className={`  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[100vw] `}>
      <SideMenu light={light} />
      <div
        className={` ${
          !light && 'invert'
        } flex flex-wrap gap-3 justify-around bg-[#F5F5F5] text-black mx-auto col-span-2`}>
        {foods &&
          foods.map((food, index) => (
            <Offers
              key={index}
              title={food.food.label}
              image={food.food.image}
              liked={false}
              price={'5.59'}
              offer={'10'}
            />
          ))}
      </div>
      <RightMenu light={light} setLight={setLight} />
    </div>
  );
};

export default page;
