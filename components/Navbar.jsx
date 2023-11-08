import React from 'react';

export default function Navbar() {
  return (
    <div className='fixed z-10 flex w-full flex-row items-center justify-center border-b-[1px] border-solid border-black bg-primary-dark py-8 text-primary-light'>
      <p className='hidden pl-5 text-lg md:block'>
        Yıldız Teknik Üniversitesi, 13 Kasım
      </p>
      <a
        href='https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbiW71iuprpdGm4fb9lyf0dFUNFVYSzJLR09NNjI5U1I5RExRMjBTRk5DSS4u'
        className=' min-[768px]:px-auto ease mx-20 flex justify-center rounded-full border-[1px] border-primary-light px-10 py-2 text-lg transition-all hover:scale-[1.1] hover:bg-primary-light hover:text-primary-dark active:scale-[0.8] md:px-8 min-[768px]:w-[150px] lg:w-auto lg:px-20'
        target='_blank'
      >
        Kayıt Ol
      </a>
      <a
        href='https://maps.app.goo.gl/rfNDFw7kpkF6syJU8'
        className='ease hidden text-lg transition-all hover:scale-[1.1] active:scale-[0.8] md:block'
        target='_blank'
      >
        Davutpaşa Kampüsü, Tarihi Hamam
      </a>
    </div>
  );
}
