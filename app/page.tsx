'use client';

import Nav from '@/components/nav/Nav'
import Content from '@/components/Content'
import { useMediaQuery } from '@uidotdev/usehooks';

export default function Home() {

  const isMediumDevice = useMediaQuery("only screen and (min-width : 780px)");


  return (
    <>
      <Nav />
      <Content />
    </>
  )
}
