"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

function Header() {

  const {data}=useSession();

  useEffect(()=>{
    console.log(data);
  },[data])

  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
    <div className="flex items-center">
   <img src="/location.png" alt="Logo Icon" className="h-8 w-8 sm:h-12 sm:w-12 mr-2" />
    <div>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary font-bold">molo pages</h1>
        <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-primary opacity-70">Molo Business Directory</p>
    </div>
</div>
            
        <div className='hidden md:flex justify-center items-center gap-6 flex-grow'>
            <Link href={'/'} className='hover:scale-105 hover:text-primary
            cursor-pointer'>Home</Link>
            <h2 className='hover:scale-105 hover:text-primary
            cursor-pointer'>Services</h2>
            <h2 className='hover:scale-105 hover:text-primary
            cursor-pointer'>About Us</h2>
        </div>
        <div>
          {data?.user?
          
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Image src={data?.user?.image}
          alt='user'
          width={40}
          height={40}
          className='rounded-full'
          />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     <Link href={'/mybooking'}>My Booking</Link> 
      </DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>

          :  

          <Button onClick={()=>signIn('descope')}>Login / Sign Up</Button>

        }
            </div>
    </div>
  )
}

export default Header