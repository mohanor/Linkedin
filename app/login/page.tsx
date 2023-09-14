import Link from 'next/link'
import React from 'react'

import { FcGoogle } from 'react-icons/fc'

export default function page() {
  return (
    <div className='h-screen w-screen bg-slate-700 flex justify-center  items-center'>
        <Link
            href='/'
            className='flex items-center bg-slate-100 hover:bg-slate-200 rounded-md px-8 py-3 capitalize gap-3 cursor-pointer'
        >
            <FcGoogle className='text-2xl'/> <span className='text-xl'>log in with google</span>
        </Link>
    </div>
  )
}
