import { topProducts } from '@/utils';
import React from 'react';

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

                </div>
            </div>

        </nav>
    );
};

export default HeaderFeature;