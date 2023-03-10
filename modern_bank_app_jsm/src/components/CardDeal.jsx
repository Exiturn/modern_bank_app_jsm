import React from 'react'
import style from '../style';
import { card } from '../assets';


const CardDeal = () => {
  return (
    <section className={`flex flex-col md:flex-row ${style.paddingY}
    ${style.marginY}`}>

      {/* Left Column */}
      <div className={`flex flex-col mb-[3rem] md:mb-0 w-[full] md:w-[55%] ${style.flexCenter} md:items-start`}>
        <div className='max-w-[450px] md:max-w-[500px] place-self-start sm:place-self-center lg:place-self-start'>
          <h1 className='flex-1 font-poppins font-medium text-[38px]'>
            Find a better card deal in a few easy steps.
          </h1>
        </div>

        <div className='max-w-[520px] my-8'>
          <p className={`${style.paragraph} text-[14px] leading-[170%] lg:text-[15px]`}>
            Arcu tortor, purus in mattis at sed integer faucibus.
            Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </div>

        <div>
          <button className='bg-blue-gradient rounded-md px-6 py-3 text-black
          font-poppins text-[13px] font-medium tracking-tight'>
            Get Started
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className={`max-w-[60%] flex flex-[1] mr-8 ${style.flexCenter} place-self-center`}>
        <img src={card} alt="card deal" />
      </div>
    </section>
  )
}

export default CardDeal