import React, { useEffect, useState } from 'react';
import BlankBox from './BlankBox';
import icons from '../assets/icons';
import Price from './Price';

const Offers = ({ offer, price, title, image, liked }) => {
  const [like, setLike] = useState(liked);
  const [dark, setDark] = useState(false);
  const LikeItems = () => {
    const currentLikeFood = {
      offer: offer || 2.39,
      price: price,
      title: title,
      image: image,
      like: true,
    };
    setLike(!like);
    // if not like add to the like and If already exist in like then remove it from the like
    const likes = JSON.parse(localStorage.getItem('like'));

    if (!likes || likes.length === 0) {
      localStorage.setItem('like', JSON.stringify([currentLikeFood]));
    } else {
      const likeItemExists = likes.find(
        (likeItem) => likeItem.title === currentLikeFood.title
      );
      if (likeItemExists) {
        likes.splice(likes.indexOf(likeItemExists), 1);
        localStorage.setItem('like', JSON.stringify(likes));
      } else {
        likes.push(currentLikeFood);
        localStorage.setItem('like', JSON.stringify(likes));
      }
    }
    console.log(likes);
  };
  // const [foods, setFoods] = useState([]);
  useEffect(() => {
    // const food = localStorage.getItem('data');
    setDark(JSON.parse(localStorage.getItem('dark')));
    // food && setFoods(JSON.parse(food));
  }, []);

  return (
    <div
      className={` w-[336px] h-[295px] bg-white text-black rounded-2xl p-6 relative grid m-2`}>
      {offer && (
        <div className='w-[96px] h-[32px] rounded-r-lg bg-[#EB5757] text-white text-[18px] font-normal leading-[27px] items-center justify-center flex absolute  top-6'>
          {offer}% off
        </div>
      )}

      <div className={` absolute right-6 top-6`} onClick={LikeItems}>
        {like ? icons.like : icons.notLike}
      </div>
      <div className={`${!dark && 'invert'} mx-auto mb-2 `}>
        <BlankBox image={image} />
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
