'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { bebas } from './font';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const FAQ = () => {
  const questions = [
    {
      id: 1,
      title: 'Artlab Nedir?',
      description:
        'SKY LAB tarafından bu sene beşincisi düzenlenen bir yapay zeka zirvesidir.',
    },
    {
      id: 2,
      title: 'Ne zaman ve nerede gerçekleşecek?',
      description:
        "Etkinliğimiz 13 Kasım'da Yıldız Teknik Üniversitesi Davutpaşa Kampüsü Tarihi Hamam'da gerçekleşecektir.",
    },
    {
      id: 3,
      title: "ARTLAB'e kimler katılabilir?",
      description:
        'Yapay zekaya ilgisi olan, bu alanda yeni bilgiler öğrenmek isteyen herkes katılabilir.',
      defaultOpen: true,
    },
    {
      id: 4,
      title: "ARTLAB'e neden katılmalıyım?",
      description:
        'Sizleri yapay zeka alanındaki öncü isimler ile bir araya getirerek sektör hakkındaki yeni trendlerle ve yeni teknolojilerle tanışmanızı, aynı zamanda bu alanda network kurabileceğiniz bir ortam sağlamayı amaçlıyoruz. Bundan dolayı katılmanızı mutlaka öneriyoruz :)',
    },
    {
      id: 5,
      title: 'Katılım ücretsiz mi?',
      description: 'Etkinliğimiz tamamen ücretsizdir.',
    },
    {
      id: 6,
      title: 'Katılım sonunda sertifika verilecek mi?',
      description:
        'Evet, etkinlik sonunda online olarak sertifika verilecektir.',
    },
    {
      id: 7,
      title: "Tarihi Hamam'a nasıl ulaşım sağlayabiliriz?",
      description:
        "M1-A metrosunu kullanarak Davutpaşa-YTÜ metro durağında indikten sonra ringler aracılığıyla Tarihi Hamam'a ulaşabilirsiniz. 41AT'yi kullanarak Tarihi Hamam'a ulaşabilirsiniz.",
    },
    {
      id: 8,
      title: 'Etkinliğe nerden başvurabilirim?',
      description: 'Buraya tıklayarak başvuru formuna ulaşabilirsiniz.',
    },
  ];
  return (
    <div className='py-[25px]'>
      <h2
        className={`header-text text-primary-light ${bebas.className} tracking-[0.5rem]`}
      >
        SIK SORULAN SORULAR
      </h2>

      <div className='wrapper'>
        <div className=''>
          {questions.map((question) => (
            <div key={question.id}>
              {/* Behaivour on Small Screen */}
              <Disclosure
                defaultOpen={question.defaultOpen}
                as='div'
                className='pt-6 md:hidden'
              >
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button className='flex w-full items-start justify-start text-left text-gray-400'>
                        <span className='mr-1 flex h-7 items-center'>
                          <ChevronRightIcon
                            className={classNames(
                              open ? 'rotate-90' : 'rotate-0',
                              'h-6 w-6 transform [&>path]:stroke-[2]'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                        <span className='break-words text-lg font-semibold text-primary-light'>
                          {question.title}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='ml-6 mt-2'>
                      <span className=' text-lg text-white opacity-60'>
                        {question.description}
                      </span>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* Behaivour on Big Screen */}
              <div className='hidden pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8'>
                <dt className='flex flex-row text-base font-medium text-gray-900 md:col-span-5'>
                  <svg
                    className='h-8 w-8'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M10 7L15 12L10 17'
                        stroke='#F8FCCD'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </g>
                  </svg>
                  <p className='break-words text-lg font-semibold text-primary-light'>
                    {question.title}
                  </p>
                </dt>
                <dd className='mt-2 md:col-span-7 md:mt-0'>
                  <p className='text-lg text-white opacity-70'>
                    {question.description}
                  </p>
                </dd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
