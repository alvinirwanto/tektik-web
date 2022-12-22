import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { HiOutlineArrowLongRight } from 'react-icons/hi2'


const BisnisUnitItem = ({ Icon, Unit, LinkPage }) => {
    return (
        <div className='border-2 border-black px-4 py-8 flex flex-col gap-[13rem]'>
            <div className='flex justify-end'>
                <Image
                    src={Icon}
                    width={500}
                    height={500}
                    className='h-[5rem] w-auto object-contain'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='text-4xl font-bold'>Tektik</h2>
                <h2 className={`text-5xl font-bold ${Unit === 'Network' ? 'text-network-color'
                        : Unit === 'Digital' ? 'text-digital-color'
                            : Unit === 'Education' ? 'text-education-color'
                                : 'text-black'}`}>{Unit}</h2>
                <Link href={LinkPage} target='_blank' >
                    <button className='flex justify-start items-center gap-2 hover:gap-4 duration-300 font-semibold mt-6'>
                        Selengkapnya
                        <HiOutlineArrowLongRight className='text-2xl mt-[1px]' />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BisnisUnitItem