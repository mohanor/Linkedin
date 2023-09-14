

import Image from 'next/image'

interface AvatarProps {
    className?: string
}

const Avatar = ({ className }: AvatarProps) => {
    return (
        <div className={`h-[50px] w-[50px] rounded-[22px] overflow-hidden ${className}`}>
            <Image
                src='/images/profile.jpg'
                width={50}
                height={50}
                className='h-full w-full object-cover'
                alt='profile'
            />
        </div>
    )
}


export default Avatar