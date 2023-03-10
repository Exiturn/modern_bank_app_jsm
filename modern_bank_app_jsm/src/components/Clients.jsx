import React from 'react';
import style from '../style';
import { clients } from '../constants';



const Clients = () => {
  return (
    <section className={`flex flex-col mb-16 sm:mt-[-3rem]`}>
      <div className={`flex flex-col sm:flex-row ${style.flexBetween}`}>
        {clients.map((client, index) => (
          <div key={client.id} className={`flex flex-1 max-w-[165px] max-h-[45px] justify-center items-center
            ${index === 1 && 'sm:mx-6 lg:mx-0 my-5' || index === 2 && 'sm:mr-6'}
            ${index === 2 && 'mb-6 sm:mb-2'}`}>
            <img  src={client.logo} alt={client.id} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients