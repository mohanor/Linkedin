import React from 'react'

import AddUser from './svgs/AddUser'
import Time from './svgs/Time'
import Deleteuser from './svgs/Deleteuser'
import Up from './svgs/Up'
import Down from './svgs/Down'
import Yesterday from './svgs/Yesterday'
import Today from './svgs/Today'
import Download from './svgs/Download'



export default function Item() {
  return (
    <div className='bg-[#F6F6FB] p-10 rounded-[32px] space-y-10'>
        <div className='flex justify-between items-center'>
            <Today className='h-[30px]'/>
            <div className='flex items-baseline gap-1'>
                <Up className="w-[12px]"/>
                <p className='text-xs text-[#14ED44]'>20%</p>
            </div>
        </div>
        <div className='space-y-6'>
            <span className='block font-medium text-[32px] text-lg text-[#2B2F42]'>21457</span>
            <span className='block text-[#646776] font-medium text-[14px] capitalize'>Today</span>
        </div>
    </div>
  )
}
