import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Plus } from '@/components/svgs'

const Page = () => {

    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <div className='h-[30px] w-[30px]'>
                    <Image
                        src='/images/icon.png'
                        width={30}
                        height={30}
                        className='w-full object-contain'
                        alt='page logo'
                    />
                </div>
                <span className='text-lg font-light text-[#666666]'>UI Design</span>
            </div>
            <span className='bg-[#FF1930] text-white rounded-full h-fit text-xs font-light py-[1px] px-2'>+99</span>
        </div>
    )


}

export default function Pages() {
    return (
        <div className='bg-white rounded-[16px] overflow-hidden px-6 py-4 space-y-6'>
            <Page />
            <Page />

            <Link
                href='/'
                className='flex items-center gap-4 font-light text-[#666666]'
            >
                <div className='h-[30px] w-[30px]'>
                    <Plus className='text-[25px]' />
                </div>
                Add new page
            </Link>

        </div>
    )
}
