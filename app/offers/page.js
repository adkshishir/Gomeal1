'use client';
import React, { useEffect, useState } from 'react';
import Offers from '../component/Offers';
import SideMenu from '../dashboard/SideMenu';
import RightMenu from '../dashboard/RightMenu';

const page = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const food = JSON.parse(localStorage.getItem('data'));
    setFoods(food.hints);
    console.log(food);
    console.log('shishir adhikari');
  }, []);
  return (
    <div className='grid grid-cols-4 w-[100vw] '>
      <SideMenu />
      <div className='flex flex-wrap gap-3 justify-around bg-[#F5F5F5] mx-auto col-span-2'>
        {foods &&
          foods.map((food, index) => (
            <Offers
              key={index}
              title={food.food.label}
              image={food.food.image}
              like={'false'}
              price={'5.59'}
              offer={'10'}
            />
          ))}
      </div>
      <RightMenu />
    </div>
  );
};

export default page;
