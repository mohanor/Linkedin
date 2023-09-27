import Avatar from '@/components/avatar/Avatar'
import { Dots, Like, Send, Chat2, Bookmark, Voice, ImageComment } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

const UserInfo = () => {

    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <Avatar className='mr-2' />
                <div className='flex flex-col'>
                    <strong className='text-lg font-normal text-black'>Karim Saif</strong>
                    <span className='text-xs text-black/[.46]'>UI/UX Designer</span>
                </div>
            </div>

            <button><Dots className='w-5 h-5' /></button>
        </div>
    )

}


const PostContent = () => {

    return (
        <div className='flex flex-col py-6 font-normal'>

            <p className='text-lg'>-Healthy Tracking App lo</p>
            <div className='mt-4'>
                <Image
                    src='/images/post.png'
                    width={500}
                    height={0}
                    alt='Healthy Tracking App'
                    className='w-full'
                />
            </div>

        </div>
    )


}

const PostActions = () => {

    return (
        <div className='flex justify-between text-2xl'>
            <div className='flex items-center justify-between min-w-[8rem]'>
                <button><Like /></button>
                <button><Chat2 /></button>
                <button><Send /></button>
            </div>
            <button><Bookmark className='' /></button>
        </div>
    )

}

const AddComment = () => {

    const isSmallDevice = useMediaQuery("only screen and (min-width : 600px)");

    return (
        <div className='flex bg-[#F6F6F6] rounded-full overflow-hidden mt-6 py-2 px-2 pr-4 sm:pr-8 relative'>

            {
                isSmallDevice && <div className={`rounded-full h-[40px]  w-[50px] overflow-hidden `}>
                    <Image
                        src='/images/profile.jpg'
                        width={40}
                        height={40}
                        className='h-full w-full object-cover'
                        alt='profile'
                    />
                </div>
            }

            <input
                type="text"
                placeholder='Write a comment'
                className='w-full px-4  py-2 border-none font-light text-md outline-none text-black/[.36] bg-transparent'
            />

            <div className='flex gap-2 sm:gap-6 text-xl'>
                <button className=''>
                    <Voice />
                </button>
                <button>
                    <ImageComment />
                </button>
            </div>
        </div>
    )

}


export default function Post() {
    return (
        <div className='bg-white rounded-[16px] overflow-hidden px-6 py-4'>
            <UserInfo />
            <PostContent />
            <PostActions />
            <AddComment />
        </div>
    )
}
