import React from 'react';

const BlankBox = ({ size,image }) => {
  return (
    <img
    src={image}
      className={`${
        size == 'small'
          ? 'w-[50px] h-[50px]'
          : size === 'medium'
          ? 'w-[60px] h-[60px]'
          : 'w-[160px] h-[160px]'
      } rounded-2xl bg-[#C4C4C4] object-cover `}/>
  );
};

export default BlankBox;
