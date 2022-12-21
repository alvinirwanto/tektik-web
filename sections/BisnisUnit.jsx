import React from 'react'

import BisnisUnitItem from '../components/BisnisUnitItem'

const BisnisUnit = () => {
    return (
        <div className='grid grid-cols-12 gap-8 h-full place-items-center pt-[5rem] pb-[10rem]'>
            <div className='col-start-1 col-end-2 flex flex-col self-start h-full gap-4 mt-8 ml-4'>
                <div className='h-4 aspect-square bg-black hover:opacity-50' />
                <div className='h-4 aspect-square bg-digital-color hover:opacity-50' />
                <div className='h-4 aspect-square bg-network-color hover:opacity-50' />
                <div className='h-4 aspect-square bg-education-color hover:opacity-50' />
                <div className='h-4 aspect-square bg-space-color hover:opacity-50' />
                <div className='h-4 aspect-square bg-ventures-color hover:opacity-50' />
            </div>

            <div className='w-full col-start-1 col-end-13 md:col-end-12 xl:col-start-5 grid-rows-1 md:row-start-1 flex flex-col gap-6 items-start px-3 md:px-8'>
                <div className='flex items-end gap-9'>
                    <h2 className='text-7xl md:text-9xl font-bold'>Bisnis</h2>
                    <p className='hidden md:block w-full xl:w-[30%] font-medium text-lg'>Akan memberikan solusi berbasis teknologi yang dapat disesuaikan dengan kebutuhan perusahaan Anda</p>
                </div>
                <div className='flex gap-8 items-center w-full'>
                    <h2 className='text-7xl md:text-9xl font-bold'>Unit Kami</h2>
                    <hr className='bg-black w-[10rem] h-1 hidden xl:block' />
                </div>
                <p className='block md:hidden w-full xl:w-[30%] font-medium text-lg'>Akan memberikan solusi berbasis teknologi yang dapat disesuaikan dengan kebutuhan perusahaan Anda</p>
            </div>

            <div className='w-full col-start-2 col-end-12 mt-[3rem]'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>

                    <BisnisUnitItem
                        Icon='img'
                        Unit='Network'
                        LinkPage='https://www.google.com/'
                    />

                    <BisnisUnitItem
                        Icon='img'
                        Unit='Digital'
                        LinkPage='https://www.google.com/'
                    />

                    <BisnisUnitItem
                        Icon='img'
                        Unit='Education'
                        LinkPage='https://www.google.com/'
                    />
                </div>
            </div>
        </div>
    )
}

export default BisnisUnit