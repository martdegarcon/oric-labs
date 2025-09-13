import React from 'react'
import { Link } from 'react-router-dom';

const links = [
    { to: '/practice', label: 'Практика' },
    { to: '/refactoring', label: 'Рефакторинг' },
    { to: '/algorithms', label: 'Алгоритмы' },
    { to: '/async', label: 'Асинхронность' },
    { to: '/premium', label: 'Premium' },
];

const NavLinks = () => {
    return (
        <nav className='flex gap-[67px]'>
            {links.map(({ to, label }) => (
                <Link key={to} to={to}
                    className='
                    px-[12px] py-[10px]
                    rounded-[100px]
                    border border-transparent
                    text-white/80
                    hover:text-white
                    hover:border-white
                    transition
                    '
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavLinks