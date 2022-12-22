import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import HeroImg from '../public/dummy.jpeg'

const Tentang = () => {
    return (
        <div name='tentang' className='w-full h-[110vh] md:h-screen py-8 overflow-hidden' >
            <div className='grid grid-cols-12 gap-8 h-full place-items-center'>
                <div className='w-full z-[100] col-start-1 col-end-13 xl:col-start-3 md:col-end-9 grid-rows-1 md:row-start-1 flex flex-col gap-6 items-start px-3 md:px-8'>
                    <div className='overflow-hidden'>
                        <motion.h2
                            variants={showText(0.3, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='text-digital-color font-bold text-2xl'>Tentang Kami</motion.h2>
                    </div>
                    <motion.p
                        variants={showText(0.5, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        className='text-[2.5rem] leading-[3rem] text-black font-semibold'>Tektik bergerak dalam bidang konsultan manajemen IT yang telah berdiri sejak awal tahun 2021.</motion.p>
                </div>

                <div className='col-start-1 col-end-13 md:col-start-4 xl:col-start-6 xl:col-end-12 grid-rows-1 md:row-start-1 relative'>
                    <motion.div
                        variants={slideIn('right', 0.5, 0.5)}
                        initial='hidden'
                        whileInView='show'
                    >
                        <Image
                            src={HeroImg}
                            className='object-cover w-full h-[50vh] md:h-[70vh]'
                        />
                    </motion.div>

                    <div className='w-full h-full absolute top-0 bg-gradient-to-r from-[#ffffff] to-transparent' />

                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        className='flex justify-end py-8 gap-4 px-8 xl:px-0'>
                        <motion.div
                            variants={staggerItems('left')} className='h-4 aspect-square border-[3.5px] border-ventures-color' />
                        <motion.div
                            variants={staggerItems('left')} className='h-4 aspect-square border-[3.5px] border-digital-color' />
                        <motion.div
                            variants={staggerItems('left')} className='h-4 aspect-square border-[3.5px] border-network-color' />
                        <motion.div
                            variants={staggerItems('left')} className='h-4 aspect-square border-[3.5px] border-education-color' />
                        <motion.div
                            variants={staggerItems('left')} className='h-4 aspect-square border-[3.5px] border-space-color' />
                        <motion.div
                            variants={staggerItems('left')} className='h-4 aspect-square border-[3.5px] border-black' />
                    </motion.div>
                </div>
            </div>

            <motion.div
                variants={slideIn('left', 1, 1.5)}
                initial="hidden"
                whileInView='show'
                className='border-b-[1.5px] border-black w-[60%]' />
        </div>
    )
}

export default Tentang