import React from 'react';
import logo from '@/assets/logo.svg'; // 👈 import logo
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
    return (
        <nav className='max-w-screen-xl mx-auto py-3'>
            <div className="flex justify-between items-center ">
                <div className="">
                    <Image className='w-[200px]' width={300} height={150} src={logo} alt="logo" />
                </div>
                <div className="w-1/2">
                    <div className="relative">
                        <input
                            className=' w-full  outline-none rounded-full p-2 '
                            type="text"
                            placeholder='Search here...' />
                        <BiSearch className='text-2xl  absolute top-2 right-3 ' />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center space-x-3">
                        <FaUserAlt className='text-3xl text-[#A1A1A1]' />
                        <div className="">
                            <p className='text-sm'>Welcome</p>
                            <p className='text-[#b275f7] text-[15px] leading-4'>Sign In / Register</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <AiOutlineShoppingCart className='text-4xl text-[#A1A1A1]' />
                        <div className="">
                            <p className='text-sm'>My Cart</p>
                            <p className='text-[#b275f7] text-[15px] leading-4'>$500000</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;