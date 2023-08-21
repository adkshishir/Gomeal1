import React from 'react';
import Btn from './Btn';
const Banner = () => {
  // #F8B602, #F0C868, #F0C86800
  return (
    <div className='w-[252px] h-[202px] shrink-0 bg-[#ffc31e] bg-gradient-to-tl from-[#F0C86800] to-[# #F8B602] relative overflow-hidden p-8 rounded-xl mx-auto mt-10 md:hidden lg:block'>
      <img
        src='/images/maskgroup.jpg'
        className='w-[170px] h-[170px] absolute  rounded-full translate-y-[50%] translate-x-[75%] object-cover opacity-40'
        alt='maskgroup'
      />
      <div className='absolute top-6 left-[85%]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='29'
          viewBox='0 0 22 29'
          fill='none'>
          <path
            d='M2.75 1.40323C2.75 2.17821 2.13439 2.80645 1.375 2.80645C0.615608 2.80645 0 2.17821 0 1.40323C0 0.628246 0.615608 0 1.375 0C2.13439 0 2.75 0.628246 2.75 1.40323Z'
            fill='white'
          />
          <path
            d='M9.16667 1.40323C9.16667 2.17821 8.55106 2.80645 7.79167 2.80645C7.03228 2.80645 6.41667 2.17821 6.41667 1.40323C6.41667 0.628246 7.03228 0 7.79167 0C8.55106 0 9.16667 0.628246 9.16667 1.40323Z'
            fill='white'
          />
          <path
            d='M15.5833 1.40323C15.5833 2.17821 14.9677 2.80645 14.2083 2.80645C13.4489 2.80645 12.8333 2.17821 12.8333 1.40323C12.8333 0.628246 13.4489 0 14.2083 0C14.9677 0 15.5833 0.628246 15.5833 1.40323Z'
            fill='white'
          />
          <path
            d='M22 1.40323C22 2.17821 21.3844 2.80645 20.625 2.80645C19.8656 2.80645 19.25 2.17821 19.25 1.40323C19.25 0.628246 19.8656 0 20.625 0C21.3844 0 22 0.628246 22 1.40323Z'
            fill='white'
          />
          <path
            d='M2.75 7.95161C2.75 8.72659 2.13439 9.35484 1.375 9.35484C0.615608 9.35484 0 8.72659 0 7.95161C0 7.17663 0.615608 6.54839 1.375 6.54839C2.13439 6.54839 2.75 7.17663 2.75 7.95161Z'
            fill='white'
          />
          <path
            d='M9.16667 7.95161C9.16667 8.72659 8.55106 9.35484 7.79167 9.35484C7.03228 9.35484 6.41667 8.72659 6.41667 7.95161C6.41667 7.17663 7.03228 6.54839 7.79167 6.54839C8.55106 6.54839 9.16667 7.17663 9.16667 7.95161Z'
            fill='white'
          />
          <path
            d='M15.5833 7.95161C15.5833 8.72659 14.9677 9.35484 14.2083 9.35484C13.4489 9.35484 12.8333 8.72659 12.8333 7.95161C12.8333 7.17663 13.4489 6.54839 14.2083 6.54839C14.9677 6.54839 15.5833 7.17663 15.5833 7.95161Z'
            fill='white'
          />
          <path
            d='M22 7.95161C22 8.72659 21.3844 9.35484 20.625 9.35484C19.8656 9.35484 19.25 8.72659 19.25 7.95161C19.25 7.17663 19.8656 6.54839 20.625 6.54839C21.3844 6.54839 22 7.17663 22 7.95161Z'
            fill='white'
          />
          <path
            d='M2.75 14.5C2.75 15.275 2.13439 15.9032 1.375 15.9032C0.615608 15.9032 0 15.275 0 14.5C0 13.725 0.615608 13.0968 1.375 13.0968C2.13439 13.0968 2.75 13.725 2.75 14.5Z'
            fill='white'
          />
          <path
            d='M9.16667 14.5C9.16667 15.275 8.55106 15.9032 7.79167 15.9032C7.03228 15.9032 6.41667 15.275 6.41667 14.5C6.41667 13.725 7.03228 13.0968 7.79167 13.0968C8.55106 13.0968 9.16667 13.725 9.16667 14.5Z'
            fill='white'
          />
          <path
            d='M15.5833 14.5C15.5833 15.275 14.9677 15.9032 14.2083 15.9032C13.4489 15.9032 12.8333 15.275 12.8333 14.5C12.8333 13.725 13.4489 13.0968 14.2083 13.0968C14.9677 13.0968 15.5833 13.725 15.5833 14.5Z'
            fill='white'
          />
          <path
            d='M22 14.5C22 15.275 21.3844 15.9032 20.625 15.9032C19.8656 15.9032 19.25 15.275 19.25 14.5C19.25 13.725 19.8656 13.0968 20.625 13.0968C21.3844 13.0968 22 13.725 22 14.5Z'
            fill='white'
          />
          <path
            d='M2.75 21.0484C2.75 21.8234 2.13439 22.4516 1.375 22.4516C0.615608 22.4516 0 21.8234 0 21.0484C0 20.2734 0.615608 19.6452 1.375 19.6452C2.13439 19.6452 2.75 20.2734 2.75 21.0484Z'
            fill='white'
          />
          <path
            d='M9.16667 21.0484C9.16667 21.8234 8.55106 22.4516 7.79167 22.4516C7.03228 22.4516 6.41667 21.8234 6.41667 21.0484C6.41667 20.2734 7.03228 19.6452 7.79167 19.6452C8.55106 19.6452 9.16667 20.2734 9.16667 21.0484Z'
            fill='white'
          />
          <path
            d='M15.5833 21.0484C15.5833 21.8234 14.9677 22.4516 14.2083 22.4516C13.4489 22.4516 12.8333 21.8234 12.8333 21.0484C12.8333 20.2734 13.4489 19.6452 14.2083 19.6452C14.9677 19.6452 15.5833 20.2734 15.5833 21.0484Z'
            fill='white'
          />
          <path
            d='M22 21.0484C22 21.8234 21.3844 22.4516 20.625 22.4516C19.8656 22.4516 19.25 21.8234 19.25 21.0484C19.25 20.2734 19.8656 19.6452 20.625 19.6452C21.3844 19.6452 22 20.2734 22 21.0484Z'
            fill='white'
          />
          <path
            d='M2.75 27.5968C2.75 28.3718 2.13439 29 1.375 29C0.615608 29 0 28.3718 0 27.5968C0 26.8218 0.615608 26.1935 1.375 26.1935C2.13439 26.1935 2.75 26.8218 2.75 27.5968Z'
            fill='white'
          />
          <path
            d='M9.16667 27.5968C9.16667 28.3718 8.55106 29 7.79167 29C7.03228 29 6.41667 28.3718 6.41667 27.5968C6.41667 26.8218 7.03228 26.1935 7.79167 26.1935C8.55106 26.1935 9.16667 26.8218 9.16667 27.5968Z'
            fill='white'
          />
          <path
            d='M15.5833 27.5968C15.5833 28.3718 14.9677 29 14.2083 29C13.4489 29 12.8333 28.3718 12.8333 27.5968C12.8333 26.8218 13.4489 26.1935 14.2083 26.1935C14.9677 26.1935 15.5833 26.8218 15.5833 27.5968Z'
            fill='white'
          />
          <path
            d='M22 27.5968C22 28.3718 21.3844 29 20.625 29C19.8656 29 19.25 28.3718 19.25 27.5968C19.25 26.8218 19.8656 26.1935 20.625 26.1935C21.3844 26.1935 22 26.8218 22 27.5968Z'
            fill='white'
          />
        </svg>
      </div>
      <div className=' text-[18px] font-[700] leading-normal w-[195px] text-white'>
        {' '}
        Contact us for any queries or for special reservation
      </div>
      <br />
      <Btn
        value={'Contact'}
        className={
          'w-[102px] h-[40px] rounded-lg  gap-2 font-[600] text-[14px] leading-[21px] text-[#2E2E2E] bg-white item-center font-[Poppins]'
        }
      />
    </div>
  );
};

export default Banner;
