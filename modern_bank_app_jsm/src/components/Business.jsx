import React from 'react';
import { features } from '../constants';
import style from '../style';


const Business = () => {
  return (
    <section className={`flex flex-col md:flex-row ${style.paddingY}
    ${style.marginY}`}>
      {/* Left Column */}
      <div className='flex flex-col mr-4'>
        <div className='max-w-[600px]'>
          <h1 className='flex-1 font-poppins font-medium text-[38px]'>
            You do the business, < br /> we'll handle the money.
          </h1>
        </div>

        <div className='max-w-[520px] mt-8'>
          <p className={`${style.paragraph} text-[15px]`}>
            With the right credit card, you can improve your financial life by building credit,
            earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
        </div>

        <div className='mt-8'>
          <button className='bg-blue-gradient rounded-md px-6 py-3 text-black
          font-poppins text-[13px] font-medium tracking-tight'>
            Get Started
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className={`flex flex-1 flex-col ${style.flexCenter}`}>
        {features.map((feature, index) => (
          <div key={feature.id} className={`flex max-w-[470px] max-h-[115px] py-6 px-4 flex-1
          ${index === 1 && 'my-10'}
          ${index === 1 && 'rounded-[16px] bg-black-gradient-2'}`}>
            <div className={`${style.flexCenter} min-w-[15%] relative flex-1`}>
              <div className='rounded-full bg-black-gradient absolute place-self-center w-[64px]
              h-[64px]'/>
              <img src={feature.icon} alt="rewards" 
              className='z-[1]'/>
            </div>
            <div className='ml-5'>
              <h1 className='font-poppins text-[17px] font-medium'>{feature.title}</h1>
              <p className={`${style.paragraph} text-[15px] leading-[22px]`}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Business