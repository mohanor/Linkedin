'use client';

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

import Close from './svgs/Close'

interface Props {
    close: (param: boolean) => void
    isEdit?: boolean
}

// if isEdit is true, then we are editing a page
// if isEdit is false, then we are creating a new page

const Popup = ({ close, isEdit = true }: Props) => {

    const ref = useRef<any>(null)

    const [name, setName] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const save = () => {

        if (!name || !url) return alert('Please fill all fields')

        setLoading(true)

        if (!isEdit) {
            
            // create new page
            close(false)
            return ;
        }

        // edit page
        close(false)
   
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const handdler = (e: any) => {

            if (ref.current.contains(e.target)) return;
            close(false)
        }

        document.addEventListener('click', handdler)

        return () => {
            document.removeEventListener('click', handdler)
            document.body.style.overflow = 'auto'
        }

    }, [])

    return (
        <div className='fixed inset-0 bg-black/[.4] z-50 flex items-center justify-center'>
            <div ref={ref} className='bg-white w-[450px] rounded-[46px] p-8'>
                <div className='flex justify-end' onClick={() => close(false)}><Close className='w-[20px]'  /></div>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold text-[#1A535C] my-4'> { isEdit ? 'Edit' : 'New Page'}</h3>
                    <div className='space-y-4'>
                        <div>
                            <label>
                                <input
                                    className='border px-2 w-full py-3 rounded-xl outline-none'
                                    placeholder='Page name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    className='border px-2 w-full py-3 rounded-xl outline-none'
                                    placeholder='Page URL'
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className='bg-[#7F265B] text-white font-bold w-full py-3 rounded-xl flex justify-center items-center' onClick={save}>
                            {loading && <svg
                                aria-hidden="true"
                                className="w-4 h-4 mr-2 text-gray-400 animate-spin fill-white"
                                viewBox="0 0 100 101" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>}
                            { isEdit ? 'Save' : 'Create' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

interface RowProps {
    index: number
}

const Row = ({index}: RowProps) => {

    const [checked, setChecked] = useState(false)
    const [show, setShow] = useState(true)

    const handleCheck = (e: any) => {
        console.log(checked)
        setChecked(!checked)
    }

    return (
        <>
            {show && <Popup close={setShow} />}
            <div className={`flex flex-wrap justify-between items-center  py-4 px-6 ${index % 2 == 0 ? 'bg-[#E4E8EB]' : 'bg-[#F1F6F9]'}`}>

                <div className='flex items-center gap-4'>
                    <div className='h-[40px] w-[40px] rounded-full overflow-hidden'>
                        <Image
                            src='/images/profile.jpg'
                            width={40}
                            height={40}
                            alt='avatar'
                            className='w-full h-full'
                        />
                    </div>
                    <span className='font-semibold text-sm'>Made by Flok</span>
                </div>
                <div className='flex items-center gap-6'>
                    <label className="relative inline-flex items-center cursor-pointer" >
                        <input type="checkbox" value="" className="sr-only peer" readOnly checked={checked} onClick={handleCheck} />
                        <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <button
                        className='block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                        onClick={() => setShow(!show)}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}

export default function Pages() {

    const [show, setShow] = useState<boolean>(false)

    return (
        <>
            {show && <Popup close={setShow} isEdit={false}/>}
            <div className="bg-white sm:border sm:border-[#DEDEDC] sm:rounded-[24px] px-2 md:px-28 py-16 mt-8 space-y-10">
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-3xl'>Pages</h3>
                    <button onClick={() => setShow(true)} className='bg-[#3EC70B] rounded-md px-4 py-3 text-white capitalize font-medium'>+ create page</button>
                </div>
                <div className='rounded-[20px] overflow-hidden'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <Row key={index} index={index} />)
                    }
                </div>
            </div>
        </>
    )
}
