'use client';

import React from 'react'


import Main from './main/Main'
import Sidebar from './sidebar/SideBar'
import RightSide from './sidebar/RightSide'

import { useMediaQuery } from '@/hooks/useMediaQuery'



export default function Content() {

  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 780px)");

  return (
    <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl lg:max-w-5xl xl2:max-w-7xl m-auto mt-10'>
      { isMediumDevice ? <Sidebar /> : null }
      <Main />
      { isLargeDevice ? <RightSide /> : null }
    </div>
  )
}
