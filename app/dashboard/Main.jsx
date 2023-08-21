'use client';
import React, { useEffect, useState } from 'react';
import Btn from '../component/Btn';
import Input from '../component/Input';
import Catergory from '../component/Catergory';
import icons from '../assets/icons';
import H2 from '../component/H2';
import Offers from '../component/Offers';
import Link from 'next/link';
const Main = () => {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem('dark')));
  const [foods, setFoods] = useState([]);
  const url =
    'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ed8dccabd4msh15ac6884dbaf0c6p1dc074jsn7ba4b2efe61c',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
    },
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      localStorage.setItem('data', JSON.stringify(data));
    } catch (error) {
      // console.error(error);
    }
  };
  useEffect(() => {
    let raw = JSON.parse(localStorage.getItem('data'));

    !raw && fetchData();
    const likeItems = JSON.parse(localStorage.getItem('like'));
    !likeItems && localStorage.setItem('like', JSON.stringify([]));
    raw = JSON.parse(localStorage.getItem('data'));
    setFoods(raw.hints);
  }, []);
  return (
    <main
      className={`w-fit ${
        !light && ' invert '
      } overflow-hidden px-4 bg-[#F5F5F5]`}>
      <div className=' w-fit lg:w-full mx-auto -z-10'>
        <section className='mx-auto lg:w-full lg:flex justify-between items-center'>
          <div
            className={`flex  h-[60px] top[56px] left-[89px] font-[700] text-[40px]  leading-normal justify-center mx-auto my-[56px]`}>
            Hello, Samantha
          </div>

          <div
            className={`flex rounded-2xl bg-white text-black w-fit text-[18px] mx-auto m-2 `}>
            <Btn value={'Delivery'} className={` rounded-2xl p-4 pl-5`} />
            <Btn
              className={`bg-[#F8B602] text-white rounded-2xl m-2 p-4 pr-5`}
              value={'Pickup'}
            />
          </div>
          <div
            className={`flex   w-[360px] h-[60px] mx-auto  rounded-2xl bg-white pt-[2px] pr-[32px] pb-[2px] pl-[24px] items-center `}>
            {icons.search}
            <Input
              className={` outline-none ${
                !light && 'placeholder:bg-white'
              } placeholder:font-[Poppins] placeholder:text-[18px] placeholder:leading-[27px] pl-2`}
              type={'text'}
              placeholder={'what do you want eat today...'}
            />
          </div>
        </section>
        <section className='w-fit mx-auto lg:w-full bg-[#F8B602] text-white relative overflow-hidden h-[240px] rounded-2xl p-8'>
          <div className='rounded-full lg:w-48 lg:h-48 border-[1.8rem]  border-white bg-inherit opacity-25 absolute translate-y-[50%] -left-[3rem] '></div>
          <div className='rounded-full lg:w-48 lg:h-48 border-[1.8rem]  border-white bg-inherit opacity-25 absolute top-[50%] left-[85%]'></div>
          <div className='rounded-full lg:w-48 lg:h-48 border-[1.8rem]  border-white bg-inherit opacity-25 absolute left-[70%] -top-20'></div>
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
          <aside className=' inline-flex w-[98vw] lg:w-full overflow-x-scroll '>
            <Catergory icon={icons.Bakery} title={'Bakery'} />
            <Catergory icon={icons.Burger} title={'Burger'} />
            <Catergory icon={icons.Beverage} title={'Beverage'} />
            <Catergory icon={icons.Chicken} title={'Chicken'} />
            <Catergory icon={icons.Pizza} title={'Pizza'} />
            <Catergory icon={icons.Seafood} title={'Seafood'} />
          </aside>
        </section>
        {/* <section>
          <div>
            <H2 value={'Offers'} />
            <Link href={'/offers'}>see all {'>'}</Link>
          </div>
          <aside className='lg:flex w-full'>
            {console.log(foods)}
            {foods !== undefined &&
              foods.map((item, index) =>
                index < 3 && index % 2 == 0 ? (
                  <Offers
                    key={index}
                    price={5.9}
                    title={item.food.label}
                    image={item.food.image}
                  />
                ) : (
                  index < 3 && (
                    <Offers
                      key={index}
                      price={5.9}
                      title={item.food.label}
                      image={item.food.image}
                    />
                  )
                )
              )}
          </aside>
        </section>
        <section>
          <div>
            <H2 value={'Go meal Special'} />
            <Link href={'/offers'}>see all {'>'}</Link>
          </div>
          <aside className='lg:flex w-full '>
            {console.log(foods)}
            {foods !== undefined &&
              foods.map((item, index) =>
                index < 3 && index % 2 == 0 ? (
                  <Offers
                    key={index}
                    price={5.9}
                    title={item.food.label}
                    image={item.food.image}
                  />
                ) : (
                  index < 3 && (
                    <Offers
                      key={index}
                      price={5.9}
                      title={item.food.label}
                      image={item.food.image}
                    />
                  )
                )
              )}
          </aside>
        </section>
        <section>
          <div>
            <H2 value={'Burgers'} />
            <Link href={'/offers'}>see all {'>'}</Link>
          </div>
          <aside className='lg:flex w-full'>
            {console.log(foods)}
            {foods !== undefined &&
              foods.map((item, index) =>
                index < 3 && index % 2 == 0 ? (
                  <Offers
                    key={index}
                    price={5.9}
                    title={item.food.label}
                    image={item.food.image}
                  />
                ) : (
                  index < 3 && (
                    <Offers
                      key={index}
                      price={5.9}
                      title={item.food.label}
                      image={item.food.image}
                    />
                  )
                )
              )}
          </aside>
        </section> */}
        <section>
          <H2 value={'GoMeal Special'} />

          <aside className='grid mx-auto justify-center lg:flex w-full '>
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
          <aside className='grid mx-auto justify-center lg:flex w-full '>
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
          <aside className='grid mx-auto justify-center lg:flex w-full '>
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
