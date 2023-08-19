import React from 'react';
import BlankBox from './BlankBox';

const MenuBox = ({ name, count, price }) => {
  return (
    <div className='font-[600] text-[18px] flex justify-between my-4 items-center text-[#2E2E2E]'>
      <div className='gap-4 flex'>
        <BlankBox size={'medium'} />
        <div className='items-center justify-start grid'>
          <div>{name}</div>
          <div className='text-[#A098AE] font-[400] text-[14]'>x{count} </div>
        </div>
      </div>
      <div className=''>
        +<span className='text-[#f8b602]'>$</span>
        {price}
      </div>
    </div>
  );
};

export default MenuBox;
