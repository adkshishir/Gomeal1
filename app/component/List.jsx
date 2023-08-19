import React from 'react';
import NavItems from './NavItems';

const List = ({ items }) => {
  return (
    <ul className='w-[252px] h-[504px] top-[178px] left-[46px] gap-[16px] grid mx-auto '>
      {items &&
        items.map((item, index) => (
          <NavItems
            key={index}
            value={item.value}
            icons={item.icons}
            active={index === 0 && true}
          />
        ))}
    </ul>
  );
};

export default List;
