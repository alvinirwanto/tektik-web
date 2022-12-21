import React from 'react'
import Image from 'next/image'

import { HiArrowLongDown } from 'react-icons/hi2'

import HeroImg from '../public/dummy.jpeg'

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen py-8 border-b-[1.5px] border-black mb-[10rem]'>
            <div className='grid grid-cols-12 gap-8 h-full place-items-center'>
                <div className='col-start-1 col-end-13 md:col-end-8 grid-rows-1 md:row-start-1 relative'>
                    <Image
                        src={HeroImg}
                        className='object-cover w-full h-[50vh] md:h-[70vh]'
                    />

                    <div className='w-full h-full absolute top-0 bg-gradient-to-l from-[#ffffff] to-transparent' />
                </div>

                <div className='relative z-[100] col-start-1 md:col-start-4 xl:col-start-6 col-end-13 grid-rows-1 md:row-start-1 flex flex-col px-3 md:px-8 mt-[5rem]'>
                    <h2 className='text-5xl md:text-7xl xl:text-8xl font-bold'>Solusi Bisnis</h2>
                    <h2 className='my-2 text-5xl md:text-7xl xl:text-8xl font-bold'><span className='bg-black text-white px-2 md:px-4'>Modern</span> di Era</h2>
                    <h2 className='text-5xl md:text-7xl xl:text-8xl font-bold'>Global</h2>

                    <div className='grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_1.5fr] xl:grid-cols-2 gap-8 mt-4 md:px-2 xl:px-8'>
                        <div className='flex flex-col items-end gap-4 mt-1.5'>
                            <div className='flex gap-4'>
                                <div className='h-4 aspect-square bg-ventures-color hover:opacity-50' />
                                <div className='h-4 aspect-square bg-digital-color hover:opacity-50' />
                                <div className='h-4 aspect-square bg-network-color hover:opacity-50' />
                            </div>
                            <div className='flex gap-4'>
                                <div className='h-4 aspect-square bg-education-color hover:opacity-50' />
                                <div className='h-4 aspect-square bg-space-color hover:opacity-50' />
                                <div className='h-4 aspect-square bg-black hover:opacity-50' />
                            </div>
                        </div>
                        <p className='text-xl font-semibold'>
                            Solusi terbaik manajemen kampus, mahasiswa, kepegawaian, dan learning management system dengan penerapan teknologi terkini.
                        </p>
                    </div>
                    <div className='flex items-end absolute bottom-0'>
                        <HiArrowLongDown className='text-5xl -mb-[10rem] md:-mb-[13rem] xl:-mb-[5rem] animate-bounce' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero