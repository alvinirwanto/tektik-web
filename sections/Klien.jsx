import React from 'react'

import Image from 'next/image'


import LogoUMB from '../public/umb.png'

const Klien = () => {
    return (
        <div name='klien' className='w-full px-3 md:px-8 py-[15rem] h-full flex flex-col gap-[10rem] justify-center items-center'>
            <div>
                <h2 className='text-3xl xl:text-xl font-semibold text-center'>Kami telah bekerja sama dengan akan terus memberikan pelayanan yang terbaik</h2>

                <div className='w-full xl:w-[50vw] flex flex-wrap gap-8 items-center justify-evenly md:justify-between mt-[7rem] md:mt-[5rem]'>
                    <Image
                        src='/umb.png'
                        width={1000}
                        height={1000}
                        className='object-contain h-[7rem] md:h-[7rem] w-auto grayscale hover:grayscale-0'
                    />

                    <Image
                        src='/fma.png'
                        width={1000}
                        height={1000}
                        className='object-contain h-[4rem] md:h-[4rem] w-auto grayscale hover:grayscale-0'
                    />

                    <Image
                        src='/bams.png'
                        width={1000}
                        height={1000}
                        className='object-contain h-[7rem] md:h-[7rem] w-auto grayscale hover:grayscale-0'
                    />
                </div>
            </div>
        </div>
    )
}

export default Klien