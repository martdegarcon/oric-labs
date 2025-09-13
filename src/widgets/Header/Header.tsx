import React from 'react'
import { Link } from 'react-router-dom'
import { LoginButton, Logo, MobileNav, NavLinks } from 'widgets';

interface HeaderProps {
    className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`w-full ${className}`}>
            <div className='flex items-center justify-between mx-auto max-w-[1440px] px-8 py-8 text-white'>
                {/* logo */}
                < Logo />

                {/* desktop nav */}
                <div className='hidden lg:flex flex-1 justify-center'>
                    < NavLinks />
                </div>

                <div className='hidden lg:flex'>
                    < LoginButton />
                </div>

                {/* mobile nav */}
                <MobileNav />
            </div>
        </header >
    )
}

export default Header