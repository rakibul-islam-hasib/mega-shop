import React from 'react';
import logo from '@/assets/logo.svg'; // 👈 import logo
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

const NavBar = () => {
    return (
        <nav className='max-w-screen-xl mx-auto py-3'>
            <div className="flex items-center ">
                <div className="">
                    <Image className='w-[200px]' width={300} height={150} src={logo} alt="logo" />
                </div>
                <div className="">
                    <div className="relative">
                        <input
                            className=' outline-none rounded-full p-2 '
                            type="text"
                            placeholder='Search here...' />
                        <BiSearch className='text-2xl  absolute top-2 right-3 ' />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;