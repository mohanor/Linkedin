import Image from 'next/image'
import React from 'react'

export default function Comments({
  image = '/images/profile.jpg',
}) {
  return (

    <div className="bg-gray-100 flex justify-center items-center w-full rounded-md px-2 py-1">
      <div className="block w-full">
        <div className="flex items-center space-x-2 space-y-2">
          <div className="group relative flex flex-shrink-0 self-start cursor-pointer pt-2">
            <Image
              src={image} className="h-8 w-8 object-fill rounded-full"
              width={48} height={48} alt="avatar"
            />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="block w-full">
              <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                <div className="font-medium">
                  <a href="#" className="hover:underline text-sm">
                    <small>Hasan Muhammad</small>
                  </a>
                </div>
                <div className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </div>
              </div>
              <div className="flex justify-start items-center text-xs w-full">
                <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                  <a href="#" className="hover:underline">
                    <small>Like</small>
                  </a>
                  <small className="self-center">.</small>
                  <a href="#" className="hover:underline">
                    <small>Reply</small>
                  </a>
                  <small className="self-center">.</small>
                  <a href="#" className="hover:underline">
                    <small>15 hour</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}



