'use client';
import { Edit } from '@/components/svgs'
import Post from './post/Post'
import Avatar from '@/components/avatar/Avatar'

import StartWritePost from './post/StartWritePost'
import { useState } from 'react'


const WriteSomething = () => {
  return (
    <>
      <span className='text-[#666666] text-xl font-light'>Write something ...</span>
      <Edit className="text-xl ml-1" />
    </>
  )

}

const WritePost = () => {

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<string>('')

  return (
    <>
      { open && <StartWritePost close={setOpen} /> }

      <div
        className='bg-white w-full rounded-lg overflow-hidden'
        style={{boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)'}}
      >
        <div className='flex items-center px-2 py-2 cursor-text overflow-hidden' onClick={() => setOpen(true)}>
          <Avatar className='mr-4 flex-shrink-0 rounded-full' />
          <WriteSomething />
        </div>
      </div>
    </>
  )

}


export default function Main() {
  return (
    <main className='col-span-4 px-4 xl1:px-0 xl1:col-span-2'>
      <WritePost />
      <div className='mt-8 flex flex-col gap-8'>
        <Post />
        <Post />
      </div>
    </main>
  )
}
