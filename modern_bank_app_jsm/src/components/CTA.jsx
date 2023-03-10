import React from 'react';
import style from '../style';

const CTA = () => {
  return (
    <section className={`${style.paddingY} ${style.marginY}`}>
      <div className={`${style.flexCenter} flex-col sm:flex-row justify-between items-center px-10 py-6 sm:px-12 sm:py-8 md:px-16 md:py-12 
      lg:px-24 lg:py-20 bg-black-gradient rounded-[20px]`}>
        {/* Content */}
        <div className={`${style.flexCenter} flex-col sm:items-start`}>
          <h1 className='flex-1 font-poppins font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[46px] text-center sm:text-left'>
            Let’s try our service now!
          </h1>
          <p className={`${style.paragraph} sm:max-w-[350px] md:max-w-[445px] text-[12px] sm:text-[14px] lg:text-[18px] mt-4 leading-[22px] text-center sm:text-left`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>

        {/* Button */}
        <div className='mt-6 sm:mt-0'>
          <button className='bg-blue-gradient rounded-lg px-4 py-2 md:px-8 md:py-6 lg:px-12 lg:py-6 text-black
          font-poppins sm:text-[14px] md:text-[16px] lg:text-[20px] font-medium tracking-tight'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA