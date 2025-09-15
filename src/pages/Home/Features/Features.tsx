import React from 'react'
import { FeatureCard } from 'widgets/index'
import { FaStarOfLife } from 'react-icons/fa';


const Features = () => {
    return (
        <section className='w-full bg-[#FBF8F1] py-20'>
            <div className='container mx-auto px-8 text-center mt-50'>
                <p className='text-2xl font-medium leading-snug max-w-3xl mx-auto'>
                    <span className='text-[#221E1B]'>Практикуйся каждый день и решай задачи,</span><br />
                    <span className='text-[#B2AFA8]'>которые реально встречаются на собеседованиях,</span><br />
                    <span className='text-[#B2AFA8]'>улучшай навыки и достигай своих целей.</span>
                </p>
            </div>


            <div className='flex flex-col items-center mt-35'>
            <div className='flex flex-col items-center'>
                <p>Задачи</p>
                <h2>Подготовка по всем фронтам</h2>
            </div>
                <div className='flex flex-wrap justify-center gap-[40px] mt-10'>
                    <FeatureCard 
                        imageUrl='/images/practice.jpg' 
                        title='Прореший самые популярные задачки' 
                        iconComponent={<FaStarOfLife className="w-4 h-4 text-yellow-500"/>}
                        iconText='Практика'
                        />
                <FeatureCard 
                        imageUrl='/images/practice.jpg' 
                        title='Прореший самые популярные задачки' 
                        iconComponent={<FaStarOfLife className="w-4 h-4 text-yellow-500"/>}
                        iconText='Практика'
                        />
                        <FeatureCard 
                        imageUrl='/images/practice.jpg' 
                        title='Прореший самые популярные задачки' 
                        iconComponent={<FaStarOfLife className="w-4 h-4 text-yellow-500"/>}
                        iconText='Практика'
                        />
                </div>
                
                <div className='flex flex-wrap justify-center gap-[40px] mt-5'>
                        <FeatureCard 
                        imageUrl='/images/practice.jpg' 
                        title='Прореший самые популярные задачки' 
                        iconComponent={<FaStarOfLife className="w-4 h-4 text-yellow-500"/>}
                        iconText='Практика'
                        />
                        <FeatureCard 
                        imageUrl='/images/practice.jpg' 
                        title='Прореший самые популярные задачки' 
                        iconComponent={<FaStarOfLife className="w-4 h-4 text-yellow-500"/>}
                        iconText='Практика'
                        />
                </div>
            </div>
        </section>
        
    )
}

export default Features