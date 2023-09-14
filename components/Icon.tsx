import Image from 'next/image'
import React from 'react'



interface Props {

}


export default function Icon() {
  return (
    <Image
        src="/images/profile.jpg"
        alt="avatar"
        width={25}
        height={25}
    />
  )
}
