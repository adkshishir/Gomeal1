import React from 'react';

const Price = ({ price, className }) => {
  return (
    <div
      className={`${!className && 'text-[24px] font-[700] leading-[36px]'} `}>
      <span className={`text-[#f8b602]   `}>$</span>
      {price}
    </div>
  );
};

export default Price;
