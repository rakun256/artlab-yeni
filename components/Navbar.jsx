import React from 'react';

const Navbar = () => {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-10 py-10'>
      <p className='hidden text-lg text-primary-light md:block'>
        Yıldız Teknik Üniversitesi, 13 Kasım
      </p>
      <button className='border-sold rounded-full border px-20 py-2 text-lg text-primary-light transition hover:bg-primary-light hover:text-primary-dark'>
        Kayıt Ol
      </button>
      <p className='hidden text-lg text-primary-light md:block'>
        Davutpaşa Kampüsü, Tarihi Hamam
      </p>
    </div>
  );
};

export default Navbar;
