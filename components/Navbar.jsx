import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-10 py-10'>
      <p className='hidden text-lg text-primary-light md:block'>
        Yıldız Teknik Üniversitesi, 13 Kasım
      </p>
      <Link
        href='https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbiW71iuprpdGm4fb9lyf0dFUNFVYSzJLR09NNjI5U1I5RExRMjBTRk5DSS4u'
        className='border-sold rounded-full border px-20 py-2 text-lg text-primary-light transition hover:bg-primary-light hover:text-primary-dark'
        target='_blank'
      >
        Kayıt Ol
      </Link>
      <p className='hidden text-lg text-primary-light md:block'>
        Davutpaşa Kampüsü, Tarihi Hamam
      </p>
    </div>
  );
};

export default Navbar;
