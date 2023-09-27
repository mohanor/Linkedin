
import { Play, Plus } from '@/components/svgs'

import items from './data'

import AccountCard from '../accountcard/AccountCard'


const Item = () => {
  return (

    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <Play className="text-2xl" />
        <span className='text-lg font-light text-[#666666]'>Learning</span>
      </div>
      <span className='text-xs bg-[#00ACFF] text-white rounded-full px-1 font-light'>New</span>
    </div>
  )
}


const SideBarLinks = () => {
  return (
    <div className='bg-white rounded-[16px] overflow-hidden px-6 py-6 space-y-6'>


      {items.map(({icon, title, isNew}, i) => (
        <div key={i} className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            {icon}
            <span className='font-light text-[#666666]'>{title}</span>
          </div>
          { isNew && <span className='text-xs bg-[#00ACFF] text-white rounded-full px-1 font-light'>New</span> }
        </div>
      ))}

    </div>
  )
}

const Hashtag = ({ hashtag }: { hashtag: string }) => {

  return (
    <span className='bg-[#E9F0F8] px-3 rounded-md cursor-pointer'>
      #{hashtag}
    </span>
  )

}

const FollowedHashtags = () => {

  return (
    <div className='bg-white rounded-[16px] overflow-hidden px-6 py-4'>
      <div className='mb-4 flex justify-between border-b pb-1'>
        <h3 className='text-base font-light text-[#181818] uppercase'>Followed Hashtags</h3>
        <Plus className='text-[#00ACFF] text-xl' />
      </div>
      <div className='flex flex-wrap gap-2'>
        <Hashtag hashtag="work" />
        <Hashtag hashtag="business" />
        <Hashtag hashtag="hr" />
        <Hashtag hashtag="userinterface" />
      </div>
    </div>
  )

}


export default function SideBar() {


  return (
    <div className='col-span-1 space-y-8'>
      <AccountCard />
      <SideBarLinks />
      <FollowedHashtags />
    </div>
  )
}
