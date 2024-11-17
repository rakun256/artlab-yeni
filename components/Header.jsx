import React from 'react';
import Image from 'next/image';
import { bebas, koulen } from './font';

const Header = () => {
  return (
    <div className=''>
      <div className='hidden flex-row justify-center pt-[150px] md:flex'>
        <div className='flex h-[375px]  w-[375px] flex-col items-center justify-center rounded-full bg-primary-light'>
          <h1
            className={`bebas	text-9xl font-black	tracking-[40px]	text-primary-light mix-blend-exclusion ${bebas.className}`}
          >
            ARTLAB
          </h1>
          <p
            className={`text-6xl font-bold text-[#B74B4B] ${koulen.className}`}
          >
            ‘24
          </p>
          <p className='text-primary-dark'>Yapay Zeka Zirvesi</p>
        </div>
      </div>
      {/* Mobile Devices */}
      <div className='flex flex-col items-center pt-[150px] md:hidden'>
        <div className='flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full bg-primary-light'>
          <h1
            className={"text-8xl	font-bold tracking-[20px]	text-primary-light	mix-blend-exclusion ${bebas.className}"}
          >
            ARTLAB
          </h1>
          <p
            className={`text-3xl font-bold text-[#B74B4B] ${koulen.className}`}
          >
            ‘24
          </p>
        </div>
        <p className='py-6 text-center text-lg font-semibold text-primary-light'>
          Yapay Zeka Zirvesi
        </p>
        <Image
          src='/assets/header-dots.svg'
          alt='header-dots'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Header;
