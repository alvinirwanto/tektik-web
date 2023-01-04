import React from 'react'
import { motion } from 'framer-motion'

import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import BisnisUnitItem from '../components/BisnisUnitItem'

import LogoNetwork from '../public/logo/network.png'
import LogoDigital from '../public/logo/digital.png'
import LogoEducation from '../public/logo/education.png'

const BisnisUnit = () => {
    return (
        <section name='bisnis-unit' className='grid grid-cols-12 gap-8 h-full place-items-center py-[10rem] overflow-hidden'>
            <motion.div
                variants={staggerAnimation()}
                initial='hidden'
                whileInView='show'
                className='col-start-1 col-end-2 flex flex-col self-start h-full gap-4 mt-8 ml-4'>
                <motion.div
                    variants={staggerItems('up')} className='h-4 aspect-square bg-black hover:opacity-50' />
                <motion.div
                    variants={staggerItems('up')} className='h-4 aspect-square bg-digital-color hover:opacity-50' />
                <motion.div
                    variants={staggerItems('up')} className='h-4 aspect-square bg-network-color hover:opacity-50' />
                <motion.div
                    variants={staggerItems('up')} className='h-4 aspect-square bg-education-color hover:opacity-50' />
                <motion.div
                    variants={staggerItems('up')} className='h-4 aspect-square bg-space-color hover:opacity-50' />
                <motion.div
                    variants={staggerItems('up')} className='h-4 aspect-square bg-ventures-color hover:opacity-50' />
            </motion.div>

            <div className='w-full col-start-1 col-end-13 md:col-end-13 xl:col-start-5 grid-rows-1 md:row-start-1 flex flex-col gap-6 items-start px-3 md:px-8'>
                <div className='grid md:grid-cols-2 xl:grid-cols-[1fr_1fr_.5fr] items-end gap-9'>
                    <div className=''>
                        <motion.h2
                            variants={showText(0.5, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='text-7xl md:text-9xl font-bold'>Bisnis</motion.h2>
                    </div>

                    <motion.p
                        variants={slideIn('right', 0.8, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        className='hidden md:block w-full font-medium text-lg '>Akan memberikan solusi berbasis teknologi yang dapat disesuaikan dengan kebutuhan perusahaan Anda
                    </motion.p>

                </div>
                <div className='flex xl:grid xl:grid-cols-[3fr_1fr] gap-8 items-center w-full'>
                    <div className='overflow-hidden'>
                        <motion.h2
                            variants={showText(0.5, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='text-7xl md:text-9xl font-bold'>Unit Kami</motion.h2>
                    </div>
                    <motion.hr
                        variants={slideIn('right', 1, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        className='bg-black w-[10rem] h-1 hidden xl:block' />
                </div>

                {/* Mobile version */}
                <p className='block md:hidden w-full xl:w-[30%] font-medium text-lg'>Akan memberikan solusi berbasis teknologi yang dapat disesuaikan dengan kebutuhan perusahaan Anda</p>
            </div>

            <div className='w-full col-start-2 col-end-12 mt-[3rem]'>
                <motion.div
                    variants={staggerAnimation()}
                    initial='hidden'
                    whileInView='show'
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>

                    <motion.div
                        variants={staggerItems('right')}
                    >
                        <BisnisUnitItem
                            Icon={LogoNetwork}
                            Unit='Network'
                            LinkPage='https://www.google.com/'
                        />
                    </motion.div>


                    <motion.div
                        variants={staggerItems('right')}
                    >
                        <BisnisUnitItem
                            Icon={LogoDigital}
                            Unit='Digital'
                            LinkPage='https://www.google.com/'
                        />
                    </motion.div>



                    <motion.div
                        variants={staggerItems('right')}
                    >
                        <BisnisUnitItem
                            Icon={LogoEducation}
                            Unit='Education'
                            LinkPage='https://www.google.com/'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default BisnisUnit