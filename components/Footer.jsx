import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LongArrow from '../public/long-arrow.svg'
import TektikLogo from '../public/horizontal/tektik-white.png'

import { FaFacebookF, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'


const Footer = () => {
    return (
        <footer className='bg-black text-white pt-[7rem] pb-8 px-3 md:px-8 xl:px-[7rem] relative'>
            <hr className='bg-white outline-none border-none w-[60rem] h-[.5px] absolute right-[40%] top-[50%]' />
            <hr className='bg-white opacity-25 md:opacity-100 h-[30rem] w-[1px] absolute left-[20%] xl:left-[40%] top-[15%]' />


            <div className='grid grid-cols-1 px-3 md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.5fr] justify-end'>
                <div></div>
                <div className='flex flex-col gap-4 items-end'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-2xl font-semibold'>Contact Us</h2>
                        <p className='text-9xl font-bold'>Let's Talk</p>
                    </div>

                    <div className='grid grid-cols-[3fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-8 items-center'>
                        <hr className='bg-white w-[10rem] h-1 hidden xl:block justify-self-end' />
                        <p className='text-xl'>We are looking forward to start a great project with you.</p>
                    </div>

                    <Image
                        src={LongArrow}
                        className='h-[10rem] w-auto object-contain mt-8'
                    />
                </div>

                <div className='flex flex-col gap-2 mt-[5rem]'>
                    <Image
                        src={TektikLogo}
                        className='object-contain h-[5rem] w-auto self-start'
                    />
                    <p className='text-2xl mt-8 font-bold'>Our Office</p>
                    <p className='xl:max-w-[400px]'>Gedung Teja Buana, 2nd Floor, JL. Menteng Raya, No. 29, RT.15/RW.10, Kebon Sirih, Menteng, Jakarta Pusat, 10340</p>
                    <div className='flex justify-between md:justify-start items-center gap-4 text-white mt-[3rem] xl:mt-4'>
                        <Link
                            href='https://www.google.com'
                            className='p-2 duration-200 hover:opacity-60'
                        >
                            <FaFacebookF className='text-3xl xl:text-xl' />
                        </Link>

                        <Link
                            href='https://www.google.com'
                            className='p-2 duration-200 hover:opacity-60'
                        >
                            <RiInstagramFill className='text-3xl xl:text-2xl' />
                        </Link>

                        <Link
                            href='https://www.google.com'
                            className='p-2 duration-200 hover:opacity-60'
                        >
                            <FaLinkedin className='text-3xl xl:text-2xl' />
                        </Link>

                        <Link
                            href='https://www.google.com'
                            className='p-2 duration-200 hover:opacity-60'
                        >
                            <FaTiktok className='text-3xl xl:text-xl' />
                        </Link>

                        <Link
                            href='https://www.google.com'
                            className='p-2 duration-200 hover:opacity-60'
                        >
                            <FaYoutube className='text-3xl xl:text-2xl' />
                        </Link>
                    </div>
                </div>

                <div></div>
            </div>

            <p className='text-center text-white mt-[5rem]'>© Copyright {new Date().getFullYear()} Tektik  |  All Rights Reserved</p>
        </footer>
    )
}

export default Footer