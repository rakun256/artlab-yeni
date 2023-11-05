import React from 'react';
import Image from 'next/image';
const speakers = [
  {
    id: 1,
    name: 'Speaker Name',
    title: 'Speaker Title',
    image: 'speaker.jpeg',
  },
  {
    id: 2,
    name: 'Speaker Name',
    time: 'Speaker Title',
    image: 'speaker.jpeg',
  },
  {
    id: 3,
    name: 'Speaker Name',
    time: 'Speaker Title',
    image: 'speaker.jpeg',
  },
  {
    id: 4,
    name: 'Speaker Name',
    time: 'Speaker Title',
    image: 'speaker.jpeg',
  },
  {
    id: 5,
    name: 'Speaker Name',
    time: 'Speaker Title',
    image: 'speaker.jpeg',
  },
  {
    id: 6,
    name: 'Speaker Name',
    time: 'Speaker Title',
    image: 'speaker.jpeg',
  },
];
const Speakers = () => {
  return (
    <div className='pb-[100px]'>
      <h2 className='header-text text-primary-light'>KONUŞMACILARIMIZ</h2>

      <div className='wrapper grid grid-cols-1 justify-center md:grid-cols-3'>
        {speakers.map((speaker) => (
          <div className='flex flex-col justify-center pt-10' key={speaker.id}>
            <Image
              src={'/assets/speakers/speaker.jpeg'}
              alt='sisecam'
              width={200}
              height={200}
              className='mx-auto justify-center rounded-full border border-8 border-primary-light'
            />
            <p className='pt-6 text-center text-2xl	font-bold text-primary-light'>
              {speaker.name}
            </p>

            <p className='pt-2 text-center text-lg	 text-primary-light'>
              {speaker.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
