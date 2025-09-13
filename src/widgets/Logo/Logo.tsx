import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/" className='flex items-center gap-2 text-2xl font-bold'>
            <img src="/icons/logo.svg" alt="logo"
                className='w-8 h-8' />
            oric labs
        </Link>
    )
}

export default Logo