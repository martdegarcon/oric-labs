import React from 'react'

interface CardProps {
    imageUrl: string
    title: string
    iconComponent: React.ReactNode
    iconText: string
}

const FeatureCard: React.FC<CardProps> = ({imageUrl, title, iconComponent, iconText}) => {
    return (
        <div className='w-[300px] h-[426px] border-[1px] border-gray-100 rounded-lg flex flex-col'>

            {/* image */}
            <div className='w-full h-[250px]'>
                <img 
                src={imageUrl} 
                alt={title} 
                className='w-full h-full object-cover rounded-t-lg'
                />
            </div>

            {/* text */}
            <div className='px-[30px] mt-[30px]'>
                <p className='text-base text-gray-400 leading-snug'>
                    {title}
                </p>
            </div>

            {/* badge */}
            <div className='px-[30px] mt-[30px]'>
                <div className='w-[240px] h-[42px] flex items-center gap-2 border border-gray-200 rounded px-2'>
                {iconComponent}
                <span>{iconText}</span>
                </div>
            </div>

        </div>
    )
}

export default FeatureCard

