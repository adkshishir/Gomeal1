'use client';
import React, { useEffect, useState } from 'react';
import Gomeal from '../component/Gomeal';
import List from '../component/List';
import icons from '../assets/icons';
import Banner from '../component/Banner';
import Link from 'next/link';
import Btn from '../component/Btn';
const SideMenu = ({ light }) => {
  const [active, setActive] = useState(0);
  // const [dark, seDark] = useState(false);
  function handleClick(index) {
    setActive(index);
  }

  const [hideSideBar, setHideSideBar] = useState(false);
  const items = [
    {
      value: 'Dashboard',
      icons: icons.dashboard,
      href: './dashboard',
    },
    {
      value: 'Food Order',
      icons: icons.foodOrder,
      href: '../orders',
    },
    {
      value: 'favourite',
      icons: icons.favourite,
      href: '../favourites',
    },
    {
      value: 'Order History',
      icons: icons.orderHistory,
      href: '../orders',
    },
    {
      value: 'Bills',
      icons: icons.bills,
      href: '../bills',
    },
    {
      value: 'Setting',
      icons: icons.settings,
      href: 'settings',
    },
  ];

  return (
    <div
      className={`h-fit   ${
        !light && 'invert'
      } sticky top-[-170px] left-0 z-10`}>
      <div
        onClick={() => setHideSideBar(!hideSideBar)}
        className='bold fixed  md:hidden z-20  text-lg bg-white text-black cursor-pointer '>
        {hideSideBar ? 'close' : 'Menu'}
      </div>
      {hideSideBar && (
        <div className='shrink-0 md:hidden px-4  absolute overflow-y-scroll bg-white z-10'>
          <Gomeal />
          <List items={items} onClick={handleClick} active={active} />
          right nav bar
          <Banner />
        </div>
      )}
      {
        <div className='shrink-0 hidden md:grid  bg-white  px-4  '>
          <Gomeal />
          <List items={items} onClick={handleClick} active={active} />

          <Banner />
        </div>
      }
    </div>
  );
};

export default SideMenu;
