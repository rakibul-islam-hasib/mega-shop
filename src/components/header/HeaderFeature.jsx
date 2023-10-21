import { topProducts } from '@/utils';
import hart from '@/assets/icons/love.svg';
import React from 'react';
import Image from 'next/image';

const HeaderFeature = () => {
    return (
        <nav className='max-w-screen-xl mx-auto'>
            <div className="">
                <div className="flex items-center gap-7">
                    {
                        topProducts.map((product) => (
                            <div className="text-dark-gray hover:text-black duration-500 cursor-pointer font-medium" key={product._id}> {product.name}</div>))
                    }
                </div>
                <div className="">
                    <div className="">
                        <Image width={30} height={30} alt='Blog Icon' src={hart} />
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default HeaderFeature;