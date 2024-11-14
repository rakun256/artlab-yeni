import React from 'react';
import Image from 'next/image';
import { bebas } from './font';
const Sponsors = () => {
  return (
    <div className=' mt-[100px]  bg-primary-light py-10'>
      <div className='z-50 mx-auto -mt-[150px] h-[300px] w-[300px] rounded-full bg-primary-light'>
        <h2
          className={`header-text !pt-28 text-primary-dark ${bebas.className} tracking-[0.5rem]`}
        >
          Sponsorlarimiz
        </h2>
      </div>

      <div className='-mt-[100px] flex items-center gap-5 md:gap-10'>
        <div className='h-[2px] w-full bg-primary-dark'></div>
        <div className='whitespace-nowrap text-center text-3xl font-bold text-primary-dark'>
          Altın Sponsorlarımız
        </div>
        <div className='h-[2px] w-full bg-primary-dark'></div>
      </div>
      <div className='wrapper flex flex-row justify-center '>
        <div className='item-center mx-auto pt-10'>
          {/*<Image
            src={'/assets/sponsors/altin/sisecam.png'}
            alt='sisecam'
            width={200}
            height={200}
          />*/}
        </div>
      </div>

      <div className='flex items-center gap-5 pt-20 md:gap-10'>
        <div className='h-[2px] w-full bg-primary-dark'></div>
        <div className='whitespace-nowrap text-center text-3xl font-bold text-primary-dark'>
          Bronz Sponsorlarımız
        </div>
        <div className='h-[2px] w-full bg-primary-dark'></div>
      </div>
      <div className='wrapper grid grid-cols-1 justify-center pt-10 md:grid-cols-3'>
        {/* <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun/haribo.png'}
            alt='sisecam'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun/kelloggs.png'}
            alt='sisecam'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun/nescafe.png'}
            alt='sisecam'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>*/}
      </div>

      <div className='flex items-center gap-5 pt-20 md:gap-10'>
        <div className='h-[2px] w-full bg-primary-dark'></div>
        <div className='whitespace-nowrap text-center text-3xl font-bold text-primary-dark'>
          Ürün ve Fuaye Sponsorlarımız
        </div>
        <div className='h-[2px] w-full bg-primary-dark'></div>
      </div>
      <div className='wrapper grid grid-cols-1 justify-center pt-10 md:grid-cols-3'>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/durukan_logo.png'}
            alt='durukan'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/eker_logo.png'}
            alt='eker'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/mahmood_logo.png'}
            alt='mahmood'
            width={200}
            height={50}
            className='justify-center'
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
