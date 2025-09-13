import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-4 mt-auto w-full'>
            <div className='max-w-[1440px] mx-auto text-center text-sm px-8'>
                © {new Date().getFullYear()} MySite. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer