'use client';

import { useMediaQuery } from '@uidotdev/usehooks';
import Avatar from '../avatar/Avatar'
import { Plus } from '../svgs'
import Image from 'next/image'


const Progress = () => {
    return (
        <div className='flex-grow flex items-center mt-2 gap-1'>
            <div className='bg-[#F6F6F6] flex-grow rounded-full px-[2px] h-[8px] flex items-center'>
                <span className='block bg-[#00ACFF] rounded-full w-[90%] h-[4px]'></span>
            </div>
            <span className='text-xs text-[#00ACFF]'>90%</span>
        </div>
    )
}

export default function AccountCard() {

    const islargeDevice = useMediaQuery("only screen and (min-width : 1284px)");

    return (
        <div className='bg-white rounded-[16px] overflow-hidden'>

            <div className='h-[100px]'>
                <Image
                    src='/images/cover.jpg'
                    objectFit='cover'
                    alt='cover'
                    width={100}
                    height={80}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='px-4 py-2 relative'>
                <div className='flex items-start gap-2'>
                    <div className='w-[50px] xl2:w-[60px]'>
                        <Avatar className='absolute -top-[45%] w-[50px] h-[50px] xl2:w-[60px] xl2:h-[60px]' />
                    </div>
                    <div className=''>
                        <h3 className='xl2:text-lg text-[#181818]'>Karim Saif</h3>
                        <span className='text-xs text-black/[.46]'>UI/UX Designer</span>
                    </div>
                    { islargeDevice && <Progress /> }
                </div>
            </div>
            <div>
                <hr />
                <div className='flex items-center gap-4 px-6 py-4 xl2:py-2'>
                    <Plus className='text-[20px] xl2:text-[25px]' />
                    <span className='text-black/[.46] xl2:text-lg'>Add another account</span>
                </div>
            </div>
        </div>
    )
}
