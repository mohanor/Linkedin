'use client';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"

import { TfiClose } from 'react-icons/tfi';
import Avatar from '@/components/avatar/Avatar';

import Popover from './Popover';
import { useHideGlobalScroll } from '@/hooks/useHideGlobalScroll';


import items from '../items';
import { Send } from '@/components/svgs';
import Image from 'next/image';

interface Props {
    close: (param: boolean) => void
}

const PostSection = forwardRef((props: any, ref: any) => {
    return (
        <div ref={ref} className='p-5 bg-slate-100'>
            WritePost
        </div>
    )
})


export default function StartWritePost({ close }: Props) {

    useHideGlobalScroll();

    const [content, setContent] = useState<string>('')
    const post = useRef<any>(null)

    const textArefRef = useRef<any>(null)

    const write = () => {
        setContent(textArefRef.current.value)
    }

    const getEmoji = (emojiObject: any, event: any) => {

        event.stopPropagation();

        if (!textArefRef.current) return;
        setContent(textArefRef.current.value + emojiObject.emoji)

    }

        const handdler = (e: any) => {

           

            if (post.current.contains(e.target)) return;

            if (textArefRef.current.value.length > 0) {
            
                if (confirm('Are you sure you want to discard this post?')) {
                    close(false)
                }
                return;
            }
            close(false)
        }

    useEffect(() => {

        // const handdler = (e: any) => {

        //     console.log('sssshi: ', isPickerOpen)
        //     if (isPickerOpen) return;

        //     if (post.current.contains(e.target)) return;

        //     if (textArefRef.current.value.length > 0) {
            
        //         if (confirm('Are you sure you want to discard this post?')) {
        //             close(false)
        //         }
        //         return;
        //     }
        //     close(false)
        // }

        // document.addEventListener('click', handdler)

        // return () => {
        //     document.removeEventListener('click', handdler)
        // }

    }, [])

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed z-10 inset-0 bg-black bg-opacity-50 py-10 sm:p-10 md:p-20 overflow-hidden'
        >
            <div
                ref={post}
                className='bg-white rounded-[16px] max-w-3xl mx-auto overflow-hidden'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
            >
                <div className='testetst px-8 py-4 flex flex-col min-h-[600px]'>

                    <div className='flex items-center justify-between flex-[0 0 auto]'>
                        <div className='flex gap-2'>
                            <Avatar />
                            <div>
                                <h2 className='text-lg font-medium text-[#181818]'>Karim Saif</h2>
                                <span className='text-black/[.46] text-xs'>UI/Ux Desginer</span>
                            </div>
                        </div>
                        <span className='cursor-pointer' onClick={() => close(false)}><TfiClose /></span>
                    </div>
                    
                    <div className='mt-6 flex flex-1'>
                        <div className='flex flex-1 flex-col'>
                            <textarea
                                ref={textArefRef}
                                className='w-full resize-none outline-none bg-transparent text-lg placeholder-gray-600 flex-1'
                                placeholder="What do you want to talk about?"
                                onChange={write}
                                value={content}
                            >
                            </textarea>

                            <div className='flex-[0 0 auto]' >
                                <Popover getEmoji={getEmoji} />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className='flex bg-[#D2F0FF]/[.41] justify-between h-[77px]'>
                    <div className='flex justify-between w-full px-6'>

                        {items.map((item, index) => (
                            <div key={index} className='flex items-center justify-between text-xl gap-2'>
                                {item.icon}
                                <span className='font-normal text-[#666666] text-base hidden sm:block'>{item.text}</span>
                            </div>
                        ))}

                    </div>
                    <button className='px-8 grid place-content-center bg-[#A1E1FF]/[.49] text-2xl'><Send /></button>
                </div>


            </div>
        </motion.div>

    )
}
