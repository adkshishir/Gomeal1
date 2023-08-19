import React from 'react';
import BlankBox from './BlankBox';
import icons from '../assets/icons';
import Price from './Price';

const Offers = ({ offer, like, price, title }) => {
  return (
    <div className='bg-white w-[336px] h-[295px] rounded-2xl p-6 relative grid mx-auto'>
      {offer && (
        <div className='w-[96px] h-[32px] rounded-r-lg bg-[#EB5757] text-white text-[18px] font-normal leading-[27px] items-center justify-center flex absolute  top-6'>
          {offer}% off
        </div>
      )}

      <div className={` absolute right-6 top-6`}>
        {like ? icons.like : icons.notLike}
      </div>
      <div className='mx-auto mb-2'>
        <BlankBox />
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='text-[#2E2E2E] text-[18px] font-medium leading-[27px] '>
            {title}
          </div>
          <Price price={price} />
        </div>
        <div className=' bg-[#F8B602] rounded-lg flex w-[48px] h-[48px] items-center justify-center gap-[10px] p-[24px] shrink-0 text-white'></div>
      </div>
    </div>
  );
};

export default Offers;
