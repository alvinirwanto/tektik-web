import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import { HiArrowLongDown } from 'react-icons/hi2'

import HeroImg from '../public/main-foto.jpg'

const Hero = () => {
    return (
        <section name='home' className='w-full h-[110vh] md:h-screen py-8 md:border-b-[1.5px] border-black mb-[10rem] overflow-hidden'>
            <div className='grid grid-cols-12 gap-8 h-full place-items-center'>
                <motion.div
                    variants={slideIn('left', 0.5, 0.5)}
                    initial='hidden'
                    animate='show'
                    className='col-start-1 col-end-13 md:col-end-8 grid-rows-1 md:row-start-1 relative'
                >
                    <Image
                        src={HeroImg}
                        className='object-cover w-full h-[50vh] md:h-[70vh]'
                    />

                    <div className='w-full h-full absolute top-0 bg-gradient-to-l from-[#ffffffcb] to-transparent' />
                </motion.div>

                <div className='relative z-[100] col-start-1 md:col-start-4 xl:col-start-6 col-end-13 grid-rows-1 md:row-start-1 flex flex-col px-3 md:px-8 md:mt-[5rem]'>
                    <div className='overflow-hidden'>
                        <motion.h2
                            variants={showText(0.7, 0.7)}
                            initial='hidden'
                            animate='show'
                            className='text-5xl md:text-7xl xl:text-8xl font-bold'>Solusi Bisnis</motion.h2>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.h2
                            variants={showText(0.7, 0.7)}
                            initial='hidden'
                            animate='show'
                            className='my-2 text-5xl md:text-7xl xl:text-8xl font-bold'><span className='bg-black text-white px-2 md:px-4'>Modern</span> di Era</motion.h2>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h2
                            variants={showText(0.7, 0.7)}
                            initial='hidden'
                            animate='show'
                            className='text-5xl md:text-7xl xl:text-8xl font-bold'>Global</motion.h2>
                    </div>

                    <div className='grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_1.5fr] xl:grid-cols-2 gap-8 mt-4 md:px-2 xl:px-8'>

                        <motion.div
                            variants={staggerAnimation()}
                            initial='hidden'
                            whileInView='show'
                            className='flex flex-col items-end gap-4 mt-1.5'>
                            <div className='flex gap-4'>
                                <motion.div
                                    variants={staggerItems('right')} className='h-4 aspect-square bg-ventures-color hover:opacity-50' />
                                <motion.div
                                    variants={staggerItems('right')} className='h-4 aspect-square bg-digital-color hover:opacity-50' />
                                <motion.div
                                    variants={staggerItems('right')} className='h-4 aspect-square bg-network-color hover:opacity-50' />
                            </div>

                            <div
                                className='flex gap-4'>
                                <motion.div
                                    variants={staggerItems('right')} className='h-4 aspect-square bg-education-color hover:opacity-50' />
                                <motion.div
                                    variants={staggerItems('right')} className='h-4 aspect-square bg-space-color hover:opacity-50' />
                                <motion.div
                                    variants={staggerItems('right')} className='h-4 aspect-square bg-black hover:opacity-50' />
                            </div>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p
                                variants={showText(1, 0.7)}
                                initial='hidden'
                                animate='show'
                                className='text-xl font-semibold'
                            >
                                Solusi terbaik manajemen kampus, mahasiswa, kepegawaian, dan learning management system dengan penerapan teknologi terkini.
                            </motion.p>
                        </div>
                    </div>
                    <motion.div
                        variants={slideIn('down', 2.5, 0)}
                        initial='hidden'
                        animate='show'
                        className='flex items-end absolute bottom-0'>
                        <HiArrowLongDown className='text-5xl animate-bounce' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero