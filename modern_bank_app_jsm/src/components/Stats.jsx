import React from 'react'
import { stats } from '../constants';
import style from '../style';

const Stats = () => {
  return (
    <div className={`flex flex-1 flex-col sm:flex-row
    ${style.flexCenter}`}>
      {stats.map((stat, index) => (
        <div 
        key={stat.id}
        className={`font-poppins text-white font-semibold md:text-[25px] lg:text-[30px]
        flex-col md:flex-row ${style.flexCenter} md:w-[33%] w-[50%] uppercase md:my-[0] mt-[1.5rem] ss:place-self-center
        ${index === 1 | 2 && 'mt-0'} ${index === 0 && 'mb-[1.5rem] xs:mb-0'}
        ${index === 0 && 'place-self-start'}
        ${index === stats.length - 1 && 'place-self-end'}
        `}>
          <span
           className={`md:mr-[10%] ss:place-self-center ${index === 0 && 'xs:place-self-start'}
           ${index === stats.length - 1 && 'place-self-end'}`}>
            {stat.value}
          </span>
          <span
          className={`text-gradient xs:text-[13px] md:text-[15px] lg:text-[20px]
          md:mr-[8%] lg:mr-[12%] xs:text-center ss:place-self-center
          ${index === 0 && 'place-self-start'}
          ${index === stats.length - 1 && 'place-self-end'}`}>
            {stat.title}
          </span>
          <div className={`
          ${index === stats.length - 1 ? 'hidden' : 'md:border-r'}
          ${index === stats.length - 1 ? 'hidden' : 'border-b', 'md:border-b-0'}
          border-white
           sm:w-[100px]
           sm:mt-[1rem]
           md:h-[20px]
           md:w-0
           md:mt-0
          `}/>
        </div>
      ))}
    </div>
  )
}

export default Stats