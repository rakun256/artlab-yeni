import React from 'react';

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className='fixed z-10 hidden w-full items-center justify-between border-b-[1px] border-solid border-black bg-primary-dark p-8 text-primary-light md:flex'>
        <p className='w-1/5 whitespace-normal break-words text-left text-lg'>
          Yıldız Teknik Üniversitesi
        </p>
        <a
          href='https://skyl.app/artlab-katilimci-formu'
          className='ease flex flex-shrink-0 justify-center rounded-full border-[1px] border-primary-light px-10 py-2 text-lg transition-all hover:scale-[1.1] hover:bg-primary-light hover:text-primary-dark active:scale-[0.8]'
          target='_blank'
        >
          Kayıt Ol
        </a>
        <a
          href='https://maps.app.goo.gl/rfNDFw7kpkF6syJU8'
          className='ease w-1/5 whitespace-normal break-words text-right text-lg transition-all hover:scale-[1.1] active:scale-[0.8]'
          target='_blank'
        >
          Davutpaşa Kampüsü <br /> Tarihi Hamam
        </a>
      </div>

      {/* Mobile Navbar */}
      <div className='fixed left-0 top-0 z-10 flex w-full items-center justify-center overflow-hidden border-b-[1px] border-solid border-black bg-primary-dark p-4 text-primary-light md:hidden'>
        <a
          href='https://skyl.app/artlab-katilimci-formu'
          className='ease flex flex-shrink-0 justify-center rounded-full border-[1px] border-primary-light px-8 py-2 text-lg transition-all hover:scale-[1.1] hover:bg-primary-light hover:text-primary-dark active:scale-[0.8]'
          target='_blank'
        >
          Kayıt Ol
        </a>
      </div>
    </>
  );
}
