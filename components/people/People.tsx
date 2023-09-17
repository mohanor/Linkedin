import Image from "next/image"
import Link from "next/link"



const AvatarCricle = () => {
  return (
    <div className="w-8 h-8 xl2:w-10 xl2:h-10 bg-gray-400 rounded-full overflow-hidden">
      <Image
        src='/images/profile.jpg'
        width={40}
        height={40}
        className='h-full w-full object-cover'
        alt='profile'
      />
    </div>
  )
}


const ConnectUser = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <AvatarCricle />
        <div className="flex flex-col ml-2">
          <span className="text-sm xl2:text-base font-medium">Steve Jobs</span>
          <span className="text-[10px] xl2:text-xs text-gray-500 font-light">CEO of Apple</span>
        </div>
      </div>
      <button className="border text-[#00ACFF] border-[#00ACFF] text-xs rounded-xl px-2 xl2:px-3 ">Connect</button>
    </div>
  )
}


export default function People() {
  return (
    <div className='bg-white rounded-[16px] overflow-hidden'>
      <div className="px-6 py-4">
        <h3 className="font-medium text-base mb-4">People you may know:</h3>
        <div className="space-y-6">
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
        </div>
      </div>
      <hr className="mt-2"/>
      <Link href='/' className='block text-center text-xs xl2:text-sm py-4 text-[#00ACFF]'>
        See all
      </Link>
    </div>
  )
}
