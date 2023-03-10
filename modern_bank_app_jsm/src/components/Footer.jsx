import React from 'react';
import style from '../style';
import { useEffect } from 'react';
import { logo, } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {

  useEffect(() => {
    console.log(footerLinks[1].title);
  }, []);

  return (
    <section className={`${style.flexCenter} flex-col ${style.paddingFooter}`}>
      {/* Logo & Links Row */}
      <div className={`${style.flexCenter} flex-row flex-1 w-full border-b border-gray-600 pb-8 flex-wrap`}>
        <div className='w-full flex flex-col md:flex-row flex-wrap'>
          {/* Logo */}
          <div className={`w-full md:w-[30%] p-4 flex flex-col sm:flex-row md:flex-col`}>
            <img className='flex flex-1 max-w-[226px] max-h-[72px] mb-6' src={logo} alt="logo" />
            <p className={`${style.paragraph} text-[15px] md:text-[18px] ml-8`}>
              A new way to make the payments <br /> easy, reliable and secure.
            </p>
          </div>

          {/* Links */}
          <div className={`flex justify-start items-center flex-row flex-wrap w-full md:w-[70%] gap-x-[9rem]`}>
            {footerLinks.map((link, index) => (
              <div key={link.title} className={`place-self-start p-4`}>
                <h1 className={`${style.paragraphWhite} mb-6`}>
                  {link.title}
                </h1>
                <ul>
                  {link.links.map((data, index) => (
                    <li className={`${style.paragraph} text-[16px] leading-[40px] cursor-pointer`} key={index}>{data.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>



      </div>

      {/* Copyright & Socials Row*/}
      <div className={`${style.flexBetween} flex-col sm:flex-row w-full py-6 px-4`}>
        <p className={`${style.paragraph} text-[12px] leading-[23px]`}>
          2021 HooBank. All Rights Reserved.
        </p>
        <div className={`${style.flexBetween}flex-row min-w-[200px] mt-6 sm:mt-0`}>
          {socialMedia.map((app, index) => (
            <img className='cursor-pointer' key={app.id} src={app.icon} alt={app.id} link={app.link} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer