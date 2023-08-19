import React from 'react';
import Btn from '../component/Btn';
import Input from '../component/Input';
import Catergory from '../component/Catergory';
import icons from '../assets/icons';
import H2 from '../component/H2';
import Offers from '../component/Offers';
const Main = () => {
  return (
    <main className='w-full bg-[#F5F5F5] overflow-hidden'>
      <div className='w-[1040px] mx-auto'>
        <section className='w-full flex justify-between items-center'>
          <div className='flex  h-[60px] top[56px] left-[89px] font-[700] text-[40px]  text-[#2E2E2E] leading-normal justify-center mx-auto my-[56px]'>
            Hello, Samantha
          </div>
          <div className='flex bg-white rounded-2xl w-fit text-[18px] mx-auto '>
            <Btn value={'Delivery'} className={` rounded-2xl p-4 pl-5`} />
            <Btn className={`bg-[#F8B602] rounded-2xl p-4 pr-5`} value={'Pickup'} />
          </div>
          <div className='flex bg-white w-[467px] h-[60px] rounded-2xl pt-[2px] pr-[32px] pb-[2px] pl-[24px] items-center '>
            {icons.search}
            <Input
              className={
                '  outline-none placeholder:font-[Poppins] placeholder:text-[18px] placeholder:leading-[27px] pl-2'
              }
              type={'text'}
              placeholder={'what do you want eat today...'}
            />
          </div>
        </section>
        <section className='w-full bg-[#F8B602] text-white relative overflow-hidden h-[240px] rounded-2xl p-8'>
          <div className='rounded-full w-48 h-48 border-[1.8rem]  border-white bg-inherit opacity-25 absolute translate-y-[50%] -left-[3rem] '></div>
          <div className='rounded-full w-48 h-48 border-[1.8rem]  border-white bg-inherit opacity-25 absolute top-[50%] left-[85%]'></div>
          <div className='rounded-full w-48 h-48 border-[1.8rem]  border-white bg-inherit opacity-25 absolute left-[70%] -top-20'></div>
          <h1 className='font-[700] text-[32px] leading-[48px]'>
            Get Discount voucher <br />
            Up to 20%
          </h1>
          <p className='text-[14px] leading-[24px]'>
            Enjoy 20% off on your first order when you sign up <br />
            to our newsletter
          </p>
        </section>
        <section>
          <H2 value={'Category'} />
          <aside className='flex'>
            <Catergory icon={icons.Bakery} title={'Bakery'} />
            <Catergory icon={icons.Burger} title={'Burger'} />
            <Catergory icon={icons.Beverage} title={'Beverage'} />
            <Catergory icon={icons.Chicken} title={'Chicken'} />
            <Catergory icon={icons.Pizza} title={'Pizza'} />
            <Catergory icon={icons.Seafood} title={'Seafood'} />
          </aside>
        </section>
        <section>
          <H2 value={'GoMeal Special'} />
          <aside className='flex w-full '>
            <Offers
              offer={'20'}
              like={true}
              price={'5.59'}
              title={'Cheese Cake'}
            />
            <Offers
              offer={'15'}
              like={false}
              price={'5.59'}
              title={'Black Forest'}
            />
            <Offers
              offer={''}
              like={false}
              price={'5.59'}
              title={'Chocolate Cake'}
            />
          </aside>

          <div className='w-full bg-[#E8E8E8] rounded-full h-[10px] mt-2 mb-3'>
            <div className='w-1/3 h-[10px] bg-[#C4C4C4] rounded-full'></div>
          </div>
        </section>
        <section>
          <H2 value={'Burger'} />
          <aside className='flex w-full '>
            <Offers like={true} price={'5.59'} title={'cheese Burger'} />
            <Offers
              offer={'15'}
              like={true}
              price={'3.59'}
              title={'veg Berger'}
            />
            <Offers
              offer={'10'}
              like={false}
              price={'5.59'}
              title={'chicken Burger'}
            />
          </aside>

          <div className='w-full bg-[#E8E8E8] rounded-full h-[10px] mt-2 mb-3'>
            <div className='w-1/3 h-[10px] bg-[#C4C4C4] rounded-full'></div>
          </div>
        </section>
        <section>
          <H2 value={'Beverage'} />
          <aside className='flex w-full '>
            <Offers like={true} price={'5.59'} title={'cheese Burger'} />
            <Offers
              offer={'15'}
              like={true}
              price={'3.59'}
              title={'veg Berger'}
            />
            <Offers
              offer={'10'}
              like={false}
              price={'5.59'}
              title={'chicken Burger'}
            />
          </aside>

          <div className='w-full bg-[#E8E8E8] rounded-full h-[10px] mt-2 mb-3'>
            <div className='w-1/3 h-[10px] bg-[#C4C4C4] rounded-full'></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
