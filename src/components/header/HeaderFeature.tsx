import { topProducts } from '@/utils';
import hart from '@/assets/icons/love.svg';
import React from 'react';
import Image from 'next/image';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa';

const HeaderFeature = () => {
    return (
        <nav className='max-w-screen-xl mx-auto'>
            <div className="flex items-center gap-6">
                {/* <marquee behavior="" direction=""> */}
                <div className="flex items-center gap-7">
                    {
                        topProducts.map((product) => (
                            <div className="text-dark-gray hover:text-black duration-500 cursor-pointer font-medium" key={product._id}> {product.name}</div>))
                    }
                </div>
                {/* </marquee> */}
                <div className="flex flex-1 w-[4000px] gap-8">
                    <div className="flex items-center gap-1">
                        <Image width={30} height={30} alt='Blog Icon' src={hart} />
                        <h1 className='font-semibold text-gray'>Blog</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaCopy className='text-xl text-gray' />
                        <h1 className='font-semibold text-gray'>About Us</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <BsQuestionCircleFill className='text-2xl text-gray' />
                        <h1 className='font-semibold text-gray '>Help Center</h1>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default HeaderFeature;