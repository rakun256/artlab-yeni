import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-10 py-10'>
      <Image
        src='/assets/skylab-logo.svg'
        width={50}
        height={50}
        alt='skylab logo'
      />
      <Image
        src='/assets/ytu-logo.svg'
        width={100}
        height={50}
        alt='skylab logo'
      />
    </div>
  );
};

export default Footer;
