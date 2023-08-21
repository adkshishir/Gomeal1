import React, { useEffect, useState } from 'react';
import NavItems from './NavItems';

const List = ({ items }) => {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <ul className='lg:w-[252px]  h-[504px] top-[178px] left-[46px] gap-[16px] grid mx-auto '>
      {items &&
        items.map((item, index) => (
          <NavItems
            key={index}
            index={index}
            value={item.value}
            icons={item.icons}
            href={item.href}
            handleClick={handleClick}
            active={active === index ? true : false}
          />
        ))}
    </ul>
  );
};

export default List;
