import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { HiOutlineArrowLongRight } from 'react-icons/hi2'


const BisnisUnitItem = ({ Icon, Unit, LinkPage }) => {
    return (
        <div className='group'>
            <div className={`border-2 border-black px-4 py-8 flex flex-col justify-between h-[30rem] 
            ${Unit === 'Network' ? 'group-hover:bg-network-color'
                : Unit === 'Digital' ? 'group-hover:bg-digital-color'
                    : Unit === 'Education' ? 'group-hover:bg-education-color'
                        : 'text-black'}`}>
                <div className='flex justify-end group-hover:invisible'>
                    <Image
                        src={Icon}
                        width={500}
                        height={500}
                        className='h-[5rem] w-auto object-contain'
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex flex-col gap-2 xl:-mb-[3rem] xl:group-hover:mb-[1rem] duration-300'>
                        <h2 className='text-4xl font-bold'>Tektik</h2>
                        <h2 className={`text-5xl font-bold group-hover:text-white ${Unit === 'Network' ? 'text-network-color'
                            : Unit === 'Digital' ? 'text-digital-color'
                                : Unit === 'Education' ? 'text-education-color'
                                    : 'text-black'}`}>{Unit}</h2>
                    </div>
                    <Link href={LinkPage} target='_blank' >
                        <button className='xl:text-white xl:opacity-0 xl:group-hover:opacity-100 flex justify-start items-center gap-2 hover:gap-4 duration-500 font-semibold mt-6'>
                            Selengkapnya
                            <HiOutlineArrowLongRight className='text-2xl mt-[1px]' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BisnisUnitItem