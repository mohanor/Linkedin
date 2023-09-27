import React from 'react'

import Statistics from './Statistics'
import Pages from './Pages'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
  return (
    <main className={`bg-[#F1F6F9] ${inter.className}`}>
        <div className='sm:max-w-2xl md:max-w-7xl m-auto'>
            <Statistics />
            <Pages />
        </div>
    </main>
  )
}
