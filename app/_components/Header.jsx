"use client"

import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import GlobalApi from '@/app/_services/GlobalApi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import CategoryList from './CategoryList';

function Header() {
  const { data: session } = useSession();
  const { width } = useWindowSize();

  const [showMenu, setShowMenu] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const params = usePathname();

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    setSelectedCategory(params?.split('/')[2]);
  }, [params]);

  /**
   * Used to get All Category List
   */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp);
      setCategoryList(resp.categories);
    });
  };

  const isSmallScreen = width <= 768;

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="p-5 shadow-sm flex justify-between items-center mt-5">
      <div className="flex items-center">
        <img src="/location.png" alt="Logo Icon" className="h-6 w-6 sm:h-12 sm:w-12 mr-2" />
        <div>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-bold">
            molo pages
          </h1>
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm ml-3 text-primary opacity-70">
            Molo Business Directory
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center gap-6 flex-grow">
        <Link href={'/'} className="text-inherit hover:text-primary">
          Home
        </Link>
        <Link href={'/about'} className="text-inherit hover:text-primary">
          About Us
        </Link>
        <Link href={'/about'} className="text-inherit hover:text-primary">
          MarketPlace
        </Link>
        <Link href={'/services'} className="text-inherit hover:text-primary">
          Business Registration
        </Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {session ? (
            <Button onClick={toggleMenu}>&#8659; {isSmallScreen ? 'Menu' : 'My Account'}</Button>
          ) : (
            <Button onClick={toggleMenu}>&#8659; {isSmallScreen ? 'Menu' : 'Menu/Login/SignUp'}</Button>
          )}
        </DropdownMenuTrigger>

        {showMenu && (
          <DropdownMenuContent>
            {session && (
              <>
                <div className="max-h-80 overflow-y-auto">
                  <Link href="/">
                    <DropdownMenuLabel className="text-center text-white bg-primary rounded-lg">
                      Register a Business
                    </DropdownMenuLabel>
                  </Link>

                  <DropdownMenuSeparator />
                  {categoryList.map((category, index) => (
                    <Link
                      href={'/search/' + category.name}
                      key={index}
                      className={`flex gap-2 p-3 border rounded-lg mb-2 cursor-pointer hover:bg-purple-50 hover:shadow-md items-center hover:text-primary hover:border-primary ${
                        selectedCategory == category.name &&
                        'border-primary text-primary shadow-md bg-purple-60 items-center'
                      }`}
                    >
                      <h2 className="text-sm item-center ml-2">{category.name}</h2>
                    </Link>
                  ))}
                </div>
                <DropdownMenuItem className="bg-primary text-white justify-center" onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </>
            )}

            {!session && (
              <>
                <div className="max-h-80 overflow-y-auto">
                  {categoryList.map((category, index) => (
                    <Link
                      href={'/search/' + category.name}
                      key={index}
                      className={`flex gap-2 p-3 border rounded-lg mb-3 cursor-pointer hover:bg-purple-50 hover:shadow-md items-center hover:text-primary hover:border-primary ${
                        selectedCategory == category.name &&
                        'border-primary text-primary shadow-md bg-purple-60 items-center'
                      }`}
                    >
                      <h2 className="text-sm item-center ml-2">{category.name}</h2>
                    </Link>
                  ))}
                </div>
                <DropdownMenuItem
                  className="bg-primary text-white justify-center"
                  onClick={() => signIn('descope')}
                >
                  Login/Signup
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}

export default Header;