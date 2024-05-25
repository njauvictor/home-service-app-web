import { Button } from '@/components/ui/button';
import { Clock, Globe, Mail, MapPin, Share, User, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import useWindowSize from '@/hooks/useWindowSize';

function BusinessInfo({ business }) {
  const { width } = useWindowSize();

  const isMobile = width <= 768;

  return business?.name && (
    <div className='container mx-auto px-4 py-8'>
      <div className='md:flex gap-8 items-start'>
        <div className='flex-shrink-0 md:w-3/5 w-full'>
          {isMobile ? (
            <div className="grid grid-cols-1 gap-4">
              {business.images.slice(0, 2).map((image, index) => (
                <div key={index} className="w-full h-auto">
                  <Image
                    src={image.url}
                    alt={business.name}
                    width={300}
                    height={200}
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
                width={600}
                height={400}
                className='rounded-lg object-cover w-full'
              />
            </div>
          )}

           </div>
        
        <div className='md:w-2/5 w-full flex flex-col ml-4'>
          <div className='flex flex-col mt-2 md:mt-0 gap-4'>
            <h2 className='text-primary p-1 px-3 text-lg bg-purple-100 rounded-full'>{business?.category?.name}</h2>
            <h2 className='text-4xl font-bold'>{business.name}</h2>
            <p className='text-lg text-gray-600 w2/3'>{business.smallDescription}</p>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-2'>
              <div className='flex gap-2 items-center'><MapPin /><span className='text-sm-semi-bold text-gray-500'>{business.address}</span></div>
              <div className='flex gap-2 items-center'><Mail /><span className='text-sm-semi-bold text-gray-500'>{business?.email}</span></div>
              <div className='flex gap-2 items-center'><Globe /><span className='text-sm-semi-bold text-gray-500'>{business.website}</span></div>
            </div>
            <div className='flex gap-4 mt-2'>
              <a href="https://facebook.com" className='text-gray-500 hover:text-gray-900'>
                <Facebook />
              </a>
              <a href="https://twitter.com" className='text-gray-500 hover:text-gray-900'>
                <Twitter />
              </a>
              <a href="https://instagram.com" className='text-gray-500 hover:text-gray-900'>
                <Instagram />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
