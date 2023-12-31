import React, { useState } from 'react';

const H2 = ({ value }) => {
  return (
    <h2 className={` text-black font-[700] text-[24px] leading-36px my-6`}>
      {value}
    </h2>
  );
};

export default H2;
