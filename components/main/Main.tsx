import { Send, Edit } from '@/components/svgs'
import Post from './post/Post'
import items from './items'
import Avatar from '@/components/avatar/Avatar'

import StartWritePost from './post/StartWritePost'
import { useEffect, useRef, useState } from 'react'


const WriteSomething = () => {
  return (
    <>
      <span className='text-[#666666] text-xl font-light'>Write something ...</span>
      <Edit className="text-xl ml-1" />
    </>
  )

}

const WritePost = () => {

  const [open, setOpen] = useState(true)
  const [content, setContent] = useState<string>('')


  return (
    <>
      { open && <StartWritePost close={setOpen} setContent={setContent} content={content} /> }

      <div
        className='bg-white w-full rounded-[16px] overflow-hidden'
        style={{boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)'}}
      >
        <div className='h-32 px-8 py-6 cursor-text overflow-hidden' onClick={() => setOpen(true)}>
          <div className='flex items-center'>
            <Avatar className='mr-4 flex-shrink-0' />
            { !content.length ? <WriteSomething /> : <p className={`text-[#666666] line-clamp-2 text-xl font-light`}>{content}</p> }
          </div>
        </div>

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
    </>
  )

}


export default function Main() {
  return (
    <main className='col-span-4 px-4 xl1:px-0 xl1:col-span-2'>
      <WritePost />
      <div className='mt-8 flex flex-col gap-8'>
        <Post />
        {/* <Post /> */}
      </div>
    </main>
  )
}
