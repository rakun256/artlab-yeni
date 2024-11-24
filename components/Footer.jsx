import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className='flex w-full items-center justify-center gap-10 py-10'>
      <Image
        src='/assets/skylab-logo.svg'
        width={50}
        height={50}
        alt='Skylab logo'
      />

      <Image
        src='/assets/ytu-logo.svg'
        width={100}
        height={50}
        alt='Skylab logo'
      />

      <Image
        src='/assets/artlab_logo.svg'
        width={80}
        height={50}
        alt='artlab_logo'
      />
    </div>
  );
}
