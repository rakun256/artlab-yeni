import React from 'react';

export default function Navbar() {
  return (
    <div className='fixed z-10 flex w-full items-center justify-between border-b-[1px] border-solid border-black bg-primary-dark p-8 text-primary-light'>
      <p className='hidden w-1/5 text-left text-lg md:block whitespace-normal break-words'>
        Yıldız Teknik Üniversitesi
      </p>
      <a
        href='https://skyl.app/artlab-katilimci-formu'
        className='ease flex-shrink-0 flex justify-center rounded-full border-[1px] border-primary-light px-10 py-2 text-lg transition-all hover:scale-[1.1] hover:bg-primary-light hover:text-primary-dark active:scale-[0.8]'
        target='_blank'
      >
        Kayıt Ol
      </a>
      <a
        href='https://maps.app.goo.gl/rfNDFw7kpkF6syJU8'
        className='ease hidden w-1/5 text-right text-lg transition-all hover:scale-[1.1] active:scale-[0.8] md:block whitespace-normal break-words'
        target='_blank'
      >
        Davutpaşa Kampüsü <br/> Tarihi Hamam
      </a>
    </div>
  );
}
