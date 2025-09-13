import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from 'widgets';
import { HiMenu } from 'react-icons/hi';

const links = [
    { to: '/practice', label: 'Практика' },
    { to: '/refactoring', label: 'Рефакторинг' },
    { to: '/algorithms', label: 'Алгоритмы' },
    { to: '/async', label: 'Асинхронность' },
    { to: '/premium', label: 'Premium' },
    { to: '/login', label: 'Войти' },
];

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='lg:hidden relative'>
            <button onClick={() => setOpen(!open)}>
                <HiMenu className='w-8 h-8' />
            </button>
            {open && (
                <div className='absolute top-full right-0 mt-2 flex flex-col gap-4 bg-gray-800 p-4 rounded shadow-lg'>
                    {links.map(({ to, label }) => (
                        <Link key={to} to={to} className='hover:text-white'>
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileNav