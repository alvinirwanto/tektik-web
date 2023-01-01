import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { slideIn, showText, zoomIn, opacityIn, staggerAnimation, staggerItems } from '../utils/motion'

const Klien = () => {
    return (
        <section name='klien' className='w-full px-3 md:px-8 py-[15rem] h-full flex flex-col gap-[10rem] justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='overflow-hidden'>
                    <motion.h2
                        variants={showText(0.5, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        className='text-3xl xl:text-xl font-semibold text-center'>Kami telah bekerja sama dengan beberapa perusahaan dan akan terus memberikan pelayanan yang terbaik</motion.h2>
                </div>

                <motion.div
                    variants={staggerAnimation()}
                    initial='hidden'
                    whileInView='show'
                    className='w-full xl:w-[50vw] flex flex-wrap gap-8 items-center justify-evenly md:justify-between mt-[7rem] md:mt-[5rem]'>

                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/umb.png'
                            width={1000}
                            height={1000}
                            className='object-contain h-[7rem] md:h-[7rem] w-auto grayscale hover:grayscale-0'
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/fma.png'
                            width={1000}
                            height={1000}
                            className='object-contain h-[4rem] md:h-[4rem] w-auto grayscale hover:grayscale-0'
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/bams.png'
                            width={1000}
                            height={1000}
                            className='object-contain h-[7rem] md:h-[7rem] w-auto grayscale hover:grayscale-0'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Klien