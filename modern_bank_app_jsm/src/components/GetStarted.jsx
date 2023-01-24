import React from 'react'
import style from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${style.flexCenter} w-[140px] h-[140px]
    rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-110 transition ease-in-out duration-[600ms]`}>
      <div className={`${style.flexCenter} flex-col bg-primary
      w-[100%] h-[100%] rounded-full`}>
        <div className={`${style.flexStart}`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt="arrowup"
            className='w-[23px] h-[23px] object-contain' />
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>

      </div>
    </div>
  )
}

export default GetStarted