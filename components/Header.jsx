"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { bebas, koulen } from './font';

const Header = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;

      // Scale hesaplama: ekran genişliğine göre ölçek ayarı
      if (screenWidth < 400) {
        setScale(0.7); // Küçük telefonlar
      } else if (screenWidth >= 400 && screenWidth < 768) {
        setScale(0.81); // Orta boy telefonlar
      } else {
        setScale(1); // Tablet ve üzeri
      }
    };

    // İlk çalıştırma ve resize olayını dinleme
    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return (
    <div>
      {/* Desktop Devices */}
      <div className='hidden flex-row justify-center pt-[150px] md:flex'>
        <div className='flex h-[375px] w-[375px] flex-col items-center justify-center rounded-full bg-primary-light'>
          <h1
            className={`bebas	text-9xl font-black tracking-[40px] text-primary-light mix-blend-exclusion ${bebas.className}`}
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
        {/* Dinamik Scale */}
        <div
          className='flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full bg-primary-light'
          style={{ transform: `scale(${scale})` }}
        >
          <h1
            className={`text-8xl font-bold tracking-[20px] text-primary-light mix-blend-exclusion ${bebas.className}`}
          >
            ARTLAB
          </h1>
          <p
            className={`text-3xl font-bold text-[#B74B4B] ${koulen.className}`}
          >
            ‘24
          </p>
        </div>
        <p className='py-14 text-center text-lg font-semibold text-primary-light'>
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
