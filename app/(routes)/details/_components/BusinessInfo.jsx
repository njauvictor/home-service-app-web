import { Button } from '@/components/ui/button';
import { Clock, Globe, Mail, MapPin, Share, User, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import useWindowSize from '@/hooks/useWindowSize';

function BusinessInfo({ business }) {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return business?.name && (
    <div className='container mx-auto py-2 md:py-4 px-4 md:px-0'>
      <div className='md:flex gap-8 items-start'>
        <div className='flex-shrink-0 md:w-3/5 w-full'>
          {isMobile ? (
            <div className="grid grid-cols-1 gap-4">
              {business.images.slice(0, 2).map((image, index) => (
                <div key={index} className="w-full h-auto">
                  <Image
                    src={image.url}
                    alt={business.name}
                    width={450}
                    height={300}
                    className='rounded-lg object-cover w-full'
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-auto">
              <Image
                src={business?.images[0]?.url}
                alt={business.name}
                width={650}
                height={500}
                className='rounded-lg object-cover w-full'
              />
            </div>
          )}
        </div>

        <div className='md:w-2/5 w-full flex flex-col mt-4 md:mt-0 ml-0 md:ml-4'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h2 className='text-primary p-1 px-3 text-sm md:text-lg bg-purple-100 rounded-full'>{business?.category?.name}</h2>
            <h2 className='text-2xl md:text-4xl font-bold text-primary'>{business.name}</h2>
            <p className='text-sm md:text-lg text-gray-600 w-full mb-3'>{business.smallDescription}</p>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-2'>
              <div className='flex gap-2 items-center'><MapPin /><span className='text-sm-semi-bold md:text-sm-semi-bold text-gray-500'>{business.address}</span></div>
              <div className='flex gap-2 items-center'><Mail /><span className='text-sm-semi-bold md:text-sm-semi-bold text-gray-500'>{business?.email}</span></div>
              <div className='flex gap-2 items-center mb-2'><Globe /><span className='text-sm-semi-bold md:text-sm-semi-bold text-gray-500'>{business.website}</span></div>
            </div>
            <div className='flex gap-4 mt-3 md:mt-0'>
              <a href={business.faceBook}>
                <img src="/facebook.svg" alt="Facebook" className='w-6 h-6 md:w-7 md:h-7'/>
              </a>
              <a href={business.instagram}>
                <img src="/instagram.svg" alt="Instagram" className='w-6 h-6 md:w-7 md:h-7'/>
              </a>
              <a href={business.whatsApp}>
                <img src="/whatsapp.svg" alt="WhatsApp" className='w-6 h-6 md:w-7 md:h-7'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
