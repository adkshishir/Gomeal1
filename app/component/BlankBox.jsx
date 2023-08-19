import React from 'react';

const BlankBox = ({ size }) => {
  return (
    <div
      className={`${
        size == 'small'
          ? 'w-[60px] h-[60px]'
          : size === 'medium'
          ? 'w-[80px] h-[80px]'
          : 'w-[180px] h-[180px]'
      } rounded-2xl bg-[#C4C4C4]`}></div>
  );
};

export default BlankBox;
