import NavBar from '@/components/Header/NavBar';
import HeaderFeature from '@/components/Header/HeaderFeature';

import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar />
            <HeaderFeature />
            {children}
        </div>
    );
};

export default HomeLayout;