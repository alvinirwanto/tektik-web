import React from 'react'

const Tagline = () => {
    return (
        <div className='w-full h-[80vh] xl:h-screen mt-[10rem] md:mt-0 py-8 relative overflow-hidden'>

            <div className='hidden md:block w-[100px] md:h-[800px] xl:h-[600px] bg-gray-50 -skew-x-[40deg] absolute top-0 right-[80rem] md:right-[15rem] xl:right-[20rem]' />

            <div className='block md:hidden w-[100px] h-[500px] bg-gray-100 -skew-x-[40deg] right-0 absolute md:right-[15rem] xl:right-[25rem] top-[10rem]' />

            <div className='w-[70px] h-[200px] border-[10px] border-gray-100 -skew-x-[40deg] right-0 absolute md:right-[15rem] xl:right-[25rem] top-[10rem]' />

            <div className='absolute right-[15rem] md:right-[30rem] xl:right-[40rem]'>
                <div className='flex items-end gap-[6rem]'>
                    <div className='w-[20px] h-[70px] border-4 border-gray-50 skew-x-[40deg]' />
                    <div className='w-[40px] h-[130px] bg-gray-100 -skew-x-[40deg]' />
                </div>
            </div>


            <div className='grid grid-cols-12 gap-8 h-full place-items-center z-[99] absolute w-full -mt-[10rem] xl:mt-0'>
                <div className='col-start-1 xl:col-start-3 col-end-13 w-full px-3 md:px-8'>
                    <h2 className='text-network-color font-bold text-2xl mb-[4rem]'>Tagline</h2>
                    <div className='flex flex-col gap-4'>
                        <p className='text-7xl xl:text-8xl font-bold'>Tektik : </p>
                        <p className='text-6xl xl:text-7xl font-semibold'>Tactical Technology Today</p>
                    </div>
                    <div className='flex gap-4 mt-8 ml-4'>
                        <div className='h-4 aspect-square bg-black hover:opacity-50' />
                        <div className='h-4 aspect-square bg-digital-color hover:opacity-50' />
                        <div className='h-4 aspect-square bg-network-color hover:opacity-50' />
                        <div className='h-4 aspect-square bg-education-color hover:opacity-50' />
                        <div className='h-4 aspect-square bg-space-color hover:opacity-50' />
                        <div className='h-4 aspect-square bg-ventures-color hover:opacity-50' />
                    </div>
                </div>
            </div>

            <div className='border-b-[1.5px] border-black w-[60%] absolute bottom-0 right-0' />
        </div>
    )
}

export default Tagline