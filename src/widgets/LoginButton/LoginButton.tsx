import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return (
        <Link to="login" >
            <img
                className='w-10 h-10 opacity-90 hover:opacity-100 transition'
                src="/icons/user.svg" alt="" />
        </Link>
    )
}

export default LoginButton