"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Buy, book, or rent a supercar — supercars at your fingertips!
                </h1>
                {/* Study the styling and make changes of your own after build */}
                <p className="hero__subtitle">
                    The Best Way to Experience the Thrill of Speed.
                </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            {/* Study CustomButton component and resueable techniques for components*/}
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/bugatti.png" alt='hero' fill className='object-contain' />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero