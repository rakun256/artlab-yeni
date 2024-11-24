import React from 'react';
import Speaker from './Speaker';
import { bebas } from './font';
import { speakers } from '@/constants/speakers';
export default function Speakers() {
  return (
    <div className='wrapper mb-40 p-10 text-primary-light '>
      <h2
        className={`header-text text-primary-light ${bebas.className} tracking-[0.5rem]`}
      >
        KONUŞMACILARIMIZ
      </h2>
      <div className='grid h-auto grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 '>
        {speakers.map((speaker) => (
          <Speaker
            key={speaker.id}
            Name={speaker.name}
            Title={speaker.time}
            Image={speaker.image}
          />
        ))}
      </div>
    </div>
  );
}
