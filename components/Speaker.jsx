import React from 'react';

export default function Speaker({ Name, Title, Image }) {
  return (
    <div className='mb-10 flex flex-col  items-center justify-between'>
      <div className=' flex h-[200px] w-[200px] items-center justify-center rounded-full border-8 border-primary-light lg:h-[250px] lg:w-[250px]'>
        <img src={Image} alt={Name} className='overflow-hidden object-cover h-full w-full rounded-full' />
      </div>
      <h2 className='mb-2 mt-6  text-2xl	font-bold text-primary-light'>
        {Name}
      </h2>
      <h4 className='text-lg	 text-primary-ligh text-center'>{Title}</h4>
    </div>
  );
}
