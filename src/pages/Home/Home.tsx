import React from 'react'
import { Header } from 'widgets/index'
import Features from './Features/Features'

const Home = () => {
    return (
        <>
            <div className="relative w-screen h-screen bg-center bg-cover flex flex-col justify-center items-center"
                style={{ backgroundImage: "url('/images/bg.png')" }}>

                <div className='text-center text-white'>
                    <p className='text-lg mb-[10px]'>Готовься эффективно и легко</p>
                    <h1 className='text-5xl font-bold'>Прокачай свои навыки</h1>
                </div>
            </div >

            <Features />
        </>
    )
}

export default Home