import NavBar from '@/components/Header/NavBar';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default HomeLayout;