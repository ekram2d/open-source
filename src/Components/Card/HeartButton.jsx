import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const HeartButton = () => {
  return (
    <div
      className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      '
    >
      <AiOutlineHeart
        size={28}
        className='
        fill-rose-500  // Change fill color to red
          absolute
          -top-[2px]
          -right-[2px]
        '
      />
      <AiFillHeart
        size={24}
        className='fill-rose-500 hover:fill-rose-500 '
      />
    </div>
  )
}

export default HeartButton;
