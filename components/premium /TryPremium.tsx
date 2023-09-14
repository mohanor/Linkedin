import React from 'react'

import { Ellipse, LinkedInP } from '@/components/svgs'
import Link from 'next/link'
import Image from 'next/image'

export default function TryPremium() {
    return (
        <div className='flex bg-white rounded-[16px] overflow-hidden bg-gradient-to-bl from-white to-[#D4F1FF]/[.54]'>
            <div className='flex-[.6] flex flex-col gap-2 justify-center text-center p-4'>
                <h2 className='text-center text-xl xl2:text-2xl m-auto'> 
                    Try Premium
                    <span className='flex justify-center items-center gap-1'>
                        <Ellipse className="text-[#F5C54F] text-xl" />
                        for free
                        <Ellipse className="text-[#D3BD7E] text-xl" />
                    </span>
                </h2>
                <span className='text-black/[.58] text-xs xl2:text-sm flex justify-center'>--One month free <LinkedInP /></span>
                <Link href='/' className='block text-sm lg rounded-3xl xl2:px-12 py-3 xl2:py-4 bg-gradient-to-b from-[#00ACFF] to-[#BD00FF]/[.25]'>
                    Try free
                </Link>
            </div>
            <div className='flex-[.4] relative'>
                <Image
                    src='/images/premium.png'
                    width={500}
                    height={0}
                    alt='Premium'
                    className='w-full absolute right-0 bottom-0 object-contain'
                />
            </div>
        </div>
    )
}
