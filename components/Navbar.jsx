import { useState, useEffect } from 'react'
import Image from 'next/image'

import Logo from '../public/horizontal/tektik-navbar.png'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })



    // show navbar in the mobile version
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white w-full primary-padding flex justify-between items-center fixed top-0 z-[300] px-2 md:px-4 xl:px-[5rem] py-4`}>

            <Image
                src={Logo}
                alt='logo'
                className='duration-500 h-[3.5rem] w-auto'
            />


            <div className='hidden md:flex justify-center items-center gap-8 xl:gap-[4rem] text-lg font-medium text-primary-blue'>
                <div>
                    Beranda
                </div>
                <div>
                    Tentang
                </div>
                <div>
                    Klien
                </div>
                <div>
                    Produk
                </div>
                <div className='px-8 py-2 bg-black text-white'>
                    Kontak
                </div>
            </div>


            {/* Mobile Version */}
            <div className={showNavbar ? 'flex flex-col fixed top-0 left-0 w-full h-screen bg-white justify-center items-start gap-8 text-3xl px-8 font-medium text-primary-blue' : 'hidden'}>
                <div>
                    Beranda
                </div>
                <div>
                    Tentang
                </div>
                <div>
                    Klien
                </div>
                <div>
                    Produk
                </div>
                <div className='px-8 py-2 bg-black text-white'>
                    Kontak
                </div>
            </div>

            {
                showNavbar
                    ? <CgClose
                        className='text-3xl cursor-pointer z-[100]'
                        onClick={() => { setShowNavbar(!showNavbar) }}
                    />

                    : <HiOutlineMenuAlt3
                        className='text-3xl cursor-pointer block md:hidden'
                        onClick={() => { setShowNavbar(!showNavbar) }}
                    />
            }

        </nav>
    )
}

export default Navbar