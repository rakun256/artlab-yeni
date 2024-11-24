import React from 'react';
import Image from 'next/image';
import { bebas } from './font';
const Sponsors = () => {
  return (
    <div className=' mt-[100px]  bg-primary-light py-10'>
      <div className='z-50 mx-auto -mt-[180px] h-[300px] w-[300px] rounded-full bg-primary-light'>
        <h2
          className={`header-text !pt-28 text-primary-dark ${bebas.className} tracking-[0.5rem]`}
        >
          Sponsorlarimiz
        </h2>
      </div>

      <div className='flex items-center gap-5 pt-20 md:gap-10'>
        <div className='h-[2px] w-full bg-primary-dark'></div>
        <div className='whitespace-nowrap text-center text-3xl font-bold text-primary-dark'>
          Bronz Sponsorlarımız
        </div>
        <div className='h-[2px] w-full bg-primary-dark'></div>
      </div>
      
      <div className='wrapper grid grid-cols-1 justify-center pt-10 md:grid-cols-3'>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/akbank_logo.png'}
            alt='akbank'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/bizigo_logo.png'}
            alt='bizigo'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/kocfinans_logo.png'}
            alt='kocfinans'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/softtech_logo.png'}
            alt='softtech'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/denizbank_logo.png'}
            alt='denizbank'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/aselsan_logo.png'}
            alt='aselsan'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/bronz/garanti_logo.png'}
            alt='garanti'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
      </div>

      <div className='flex items-center gap-5 pt-20 md:gap-10'>
        <div className='h-[2px] w-full bg-primary-dark'></div>
        <div className='whitespace-nowrap text-center text-3xl font-bold text-primary-dark'>
          Oturum Sponsorlarımız
        </div>
        <div className='h-[2px] w-full bg-primary-dark'></div>
      </div>
      <div className='wrapper grid grid-cols-1 justify-center pt-10 md:grid-cols-3'>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/oturum/beko_logo.png'}
            alt='beko'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/oturum/turkish_technology_logo.png'}
            alt='turkish'
            width={200}
            height={200}
            className='justify-center'
          />
        </div>
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
            src={'/assets/sponsors/urun_fuaye/cayeks_logo.png'}
            alt='cayeks'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/eker_logo.png'}
            alt='eker'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/nuhun_ankara_logo.png'}
            alt='nuhun_ankara'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/miuul_logo.png'}
            alt='miuul'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/webtures_logo.png'}
            alt='webtures'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/vitago_logo.png'}
            alt='vitago'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/durukan_logo.png'}
            alt='durukan'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/mahmood_logo.png'}
            alt='mahmood'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/elvan_logo.png'}
            alt='elvan'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/taskesti_su_logo.png'}
            alt='taskesti'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/smartpro_logo.png'}
            alt='smartpro'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <Image
            src={'/assets/sponsors/urun_fuaye/unilab_vision_logo.png'}
            alt='unilab'
            width={200}
            height={200}
            className='justify-center object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
