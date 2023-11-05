import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className=''>
      <div className='hidden flex-row justify-center pt-[100px] md:flex'>
        <div className='flex h-[375px]  w-[375px] flex-col items-center justify-center rounded-full bg-primary-light'>
          <h1 className='text-9xl	font-bold tracking-wider	text-primary-light	mix-blend-exclusion'>
            ARTLAB
          </h1>
          <p className='text-6xl font-bold text-[#B74B4B]'>‘23</p>
          <p className='text-primary-dark'>Yapay Zeka Zirvesi</p>
        </div>
      </div>
      {/* Mobile Devices */}
      <div className='flex flex-row justify-center pt-[100px] md:hidden'>
        <div className='flex h-[250px]  w-[250px] flex-col items-center justify-center rounded-full bg-primary-light'>
          <h1 className='text-8xl	font-bold tracking-wider	text-primary-light	mix-blend-exclusion'>
            ARTLAB
          </h1>
          <p className='text-4xl font-semibold text-[#B74B4B]'>‘23</p>
        </div>
      </div>
      <p className='py-10 text-center font-semibold text-primary-light'>
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
  );
};

export default Header;
