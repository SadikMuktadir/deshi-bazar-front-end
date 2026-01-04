'use client';

import Image from 'next/image';
import logo from '../../../public/image/logo.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { LucideSearch } from 'lucide-react';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='flex justify-between'>
      <div>
        <Image src={logo} height={50} width={100} alt=''></Image>
      </div>
      <div className='my-auto'>
        <ul className='flex'>
          <li className='mr-10'>
            <Link
              href='/'
              className={`relative group
      ${
        pathname === '/'
          ? 'text-[#db4444] after:w-full after:h-[2px] after:bg-[#db4444] after:absolute after:-bottom-1 after:left-0 after:rounded transition-all'
          : 'text-black after:w-0 after:h-[2px] after:bg-[#db4444] after:absolute after:-bottom-1 after:left-0 after:rounded group-hover:after:w-full transition-all'
      }`}
            >
              Home
            </Link>
          </li>
          <li className='mr-10'>
            <Link
              href='/about'
              className={`relative group
      ${
        pathname === '/about'
          ? 'text-[#db4444] after:w-full after:h-[2px] after:bg-[#db4444] after:absolute after:-bottom-1 after:left-0 after:rounded transition-all'
          : 'text-black after:w-0 after:h-[2px] after:bg-[#db4444] after:absolute after:-bottom-1 after:left-0 after:rounded group-hover:after:w-full transition-all'
      }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={`relative group
      ${
        pathname === '/contact'
          ? 'text-[#db4444] after:w-full after:h-[2px] after:bg-[#db4444] after:absolute after:-bottom-1 after:left-0 after:rounded transition-all'
          : 'text-black after:w-0 after:h-[2px] after:bg-[#db4444] after:absolute after:-bottom-1 after:left-0 after:rounded group-hover:after:w-full transition-all'
      }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='relative my-auto w-96'>
        <Input
          type='text'
          placeholder='What are you looking for?'
          className='pl-10 bg-[#f5f5f5]'
        />
        <LucideSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
      </div>
      <div className='flex my-auto'>
        <div className='mr-5'>
          <Link href='/register'>
            <Button
              className=' cursor-pointer
    rounded-none
    bg-[#db4444]
    text-white
    border border-transparent
    hover:bg-white
    hover:text-black
    hover:border-[#db4444]
    transition-colors'
            >
              Register
            </Button>
          </Link>
        </div>
        <div>
          <Link href='/login'>
            <Button
              className=' cursor-pointer
    rounded-none
    bg-[#db4444]
    text-white
    border border-transparent
    hover:bg-white
    hover:text-black
    hover:border-[#db4444]
    transition-colors'
            >
              login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
