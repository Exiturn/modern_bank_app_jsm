import React from 'react'
import style from '../style';
import { feedbacks } from '../constants';
import { quotes } from '../assets';

const Testimonials = () => {
  return (
    <section className={`flex flex-col ${style.paddingY}
    ${style.marginY}`}>
      {/* Top Row */}
      <div className={`flex-col md:flex-row ${style.flexCenter} justify-between`}>
        <div className='flex-1 font-poppins font-medium text-[38px] max-w-[70%] lg:max-w-[40%] place-self-start sm:place-self-center'>
          <h1>
            What people are 
            <br className='hidden md:flex'/> saying about us
          </h1>
        </div>

        <div className='max-w-[450px] mt-8 md:my-0'>
          <p className={`${style.paragraph} text-[14px] leading-[170%] lg:text-[15px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className={`flex flex-1 flex-col md:flex-row justify-between items-center mt-[6rem] gap-x-6 `}>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className={`flex flex-col flex-1 justify-between items-start md:max-w-[370px] md:h-[390px] 
          xs:w-full rounded-lg py-16 px-10 my-4 bg-black-gradient-2`}>
            <img className='flex-1 max-w-[46px] max-h-[23px]' src={quotes} alt="quotations" />
            <p className={`${style.paragraphWhite} text-[14px] leading-[170%] lg:text-[15px] my-12`}>
              {feedback.content}
            </p>
            <div className={`flex flex-row justify-center items-start gap-4`}>
              <img className='max-w-[48px] max-h-[48px]' src={feedback.img} alt="feedback image" />
              <div className={`flex flex-col`}>
                <h1 className='font-poppins text-[15px]'>
                  {feedback.name}
                </h1>
                <p className={`${style.paragraph} text-[13px]`}>
                  {feedback.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials