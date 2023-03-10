import React from 'react'
import style from '../style';
import { bill, google, apple } from '../assets';


const billing = () => {
  return (
    <section className={`flex flex-col-reverse md:flex-row
    ${style.marginY}`}>

      {/* Left Column */}
      <div className={`max-w-[60%] flex flex-[1] mr-8 ${style.flexCenter} place-self-center`}>
        <img src={bill} alt="billing" />
      </div>

      {/* Right Column */}
      <div className={`flex flex-col mb-[3rem] md:mb-0 w-[full] md:w-[45%] ${style.flexCenter} md:items-start place-self-center`}>
        <div className='max-w-[600px] place-self-start sm:place-self-center md:place-self-start'>
          <h1 className='flex-1 font-poppins font-medium text-[38px]'>
            Easily control your <br /> billing & invoicing.
          </h1>
        </div>

        <div className='max-w-[520px] my-8'>
          <p className={`${style.paragraph} text-[14px] leading-[170%] lg:text-[15px]`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
            Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
        </div>

        <div className={`flex flex-row ${style.flexCenter}`}>
          <img  className='md:mr-8 mr-4' src={apple} alt="app store" />
          <img src={google} alt="google play" />
        </div>
      </div>
    </section>
  )
}

export default billing