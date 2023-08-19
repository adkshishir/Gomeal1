import React from 'react';
import Gomeal from '../component/Gomeal';
import List from '../component/List';
import icons from '../assets/icons';
import Banner from '../component/Banner';
const SideMenu = () => {
  const items = [
    {
      value: 'Dashboard',
      icons: icons.dashboard,
    },
    {
      value: 'Food Order',
      icons: icons.foodOrder,
    },
    {
      value: 'favourite',
      icons: icons.favourite,
    },
    {
      value: 'Order History',
      icons: icons.orderHistory,
    },
    {
      value: 'Bills',
      icons: icons.bills,
    },
    {
      value: 'Setting',
      icons: icons.settings,
    },
  ];
  return (
    <div className='w-[345px]  shrink-0  h-[full]'>
      <Gomeal />
      <List items={items} />
      <Banner />
    </div>
  );
};

export default SideMenu;
