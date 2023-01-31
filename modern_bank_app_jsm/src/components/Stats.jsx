import React from 'react'
import { stats } from '../constants';
import style from '../style';

const Stats = () => {
  return (
    <div className={`flex flex-1 flex-col md:flex-row
    ${style.flexCenter}`}>
      {stats.map((stat, index) => (
        <div 
        key={stat.id}
        className={`font-poppins text-white font-semibold md:text-[25px] lg:text-[30px]
        flex-1 ${style.flexCenter} w-[33%] uppercase
        `}>
          <span className='mr-[10%]'>{stat.value}</span>
          <span
          className={`text-gradient md:text-[15px] lg:text-[20px]
          mr-[8%]`}>
            {stat.title}
          </span>
          <div className={`
          ${index === stats.length - 1 ? 'hidden' : 'border-r'}
          border-white
           h-[20px]
          `}/>
        </div>
      ))}
      {/* <div className=''>1</div>
      <div className=''>2</div>
      <div className=''>3</div> */}
    </div>
  )
}

export default Stats