import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
<h2 className='text-[44px] text-center font-bold'>
            Find Any 
            <span className='text-primary'> <br></br>Business </span> or <span className='text-primary'> Services</span>
            <br></br> in Molo</h2>
        <h2 className='text-xl text-gray-400'>Explore Business and Services Near You</h2>
        <div className='mt-4 flex gap-4 items-center'>
            <Input placeholder='Search'
            className="rounded-full md:w-[350px]" />
            <Button className="rounded-full h-[46px]">
                <Search className='h-4 w-4'/>
            </Button>
        </div>
    </div>
  )
}

export default Hero