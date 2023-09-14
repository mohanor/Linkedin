'use client';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { forwardRef, useRef, useState } from 'react';
import { motion } from "framer-motion"
import Image from 'next/image';

import { TfiClose } from 'react-icons/tfi';
import { BiLoaderAlt } from 'react-icons/bi'
import EmojiPicker from 'emoji-picker-react';

import { GrEmoji } from 'react-icons/gr'
import Avatar from '@/components/avatar/Avatar';

interface Props {
    close: (param: boolean) => void
    setContent: (param: string) => void
    content: string
}

const PostSection = forwardRef((props: any, ref: any) => {
    return (
        <div ref={ref} className='p-5 bg-slate-100'>
            WritePost
        </div>
    )
})


export default function StartWritePost({ close, setContent, content }: Props) {

    const post = useOutsideClick(close)
    const textArefRef = useRef<any>(null)

    const [sending, setSending] = useState(false)
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

    const write = () => {
        setContent(textArefRef.current.value)
    }

    const getEmoji = (emojiObject: any) => {
        if (!textArefRef.current) return;
        textArefRef.current.value += emojiObject.emoji
        setOpenEmojiPicker(true)
    }

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute z-10 inset-0 bg-black bg-opacity-50 p-10 md:p-20 '
        >

            <div
                ref={post}
                className='px-8 py-4 bg-slate-100 rounded-lg max-w-3xl mx-auto min-h-[600px] flex flex-col'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
            >

                <div className='flex items-center justify-between flex-[0 0 auto]'>
                    <div className='flex gap-2'>
                        <Avatar />
                        <div>
                            <h2 className='text-lg font-medium text-[#181818]'>Karim Saif</h2>
                            <span className='text-[#666666] text-sm'>UI/Ux Desginer</span>
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
                        <div className='flex-[0 0 auto]'>
                            <GrEmoji
                                className={`text-2xl cursor-pointer mb-2 ${!openEmojiPicker ? 'opacity-50' : null}`}
                                onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                            />
                            {
                                openEmojiPicker && <div className='relative'>
                                    <div className='absolute'>
                                        <EmojiPicker onEmojiClick={getEmoji} />
                                    </div>
                                </div>
                            }
                            <hr />
                            <div className='flex justify-end mt-4'>
                                <button
                                    className={`px-6 py-2 bg-[#00ACFF] rounded-full text-white font-medium active:scale-95 disabled:opacity-50 disabled:pointer-events-none`}
                                    onClick={() => close(false)}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </motion.div>

    )
}
