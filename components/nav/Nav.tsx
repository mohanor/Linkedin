'use client';

import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useMediaQuery } from "@uidotdev/usehooks";

import { navItems } from './items'

interface DropDownProps {
    setOpenDropDown: (param: boolean) => void
}

import { Logo, Home, Search, User, Work, Notification, Chat } from '@/components/svgs'

function DropDown({ setOpenDropDown }: DropDownProps) {


    const ref = useOutsideClick(setOpenDropDown);

    return (
        <div ref={ref} className='absolute top-[40px] right-0 w-[200px] h-[200px] bg-white border'>
            <button className='bg-red-500'>Profile</button>
        </div>
    )

}

const NavLogo = () => {
    return (
        <div className='flex items-center gap-2'>
            <h3 className='text-[#00ACFF] text-[31px] lg:text-[36px] font-bold'>Linked</h3>
            <Logo className='text-[35px] lg:text-[40px]' />
        </div>
    )
}

const SearchButton = () => {

    return (
        <button className='bg-[#00ACFF]/[.46] hover:bg-[#00ACFF] rounded-2xl w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] grid place-content-center'>
            <Search />
        </button>
    )

}

const SearchBar = () => {

    const [input, setInput] = useState('');

    const search = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('searching', input)
    }

    const line = `before:content-[""]
                before:rounded-full
                before:w-[1px]
                before:h-full
                before:bg-[#000000]/[0.28]
                before:block
                before:absolute
                before:bottom-0
                before:rounded-full
                before:left-[-20px]`;

    const isLargeDevice = useMediaQuery("only screen and (min-width : 1284px)");

    return (
        <>
            {
                isLargeDevice ?
                <form className={`flex h-[45px] relative ${line}`} onSubmit={search}>
                    <input
                        className='w-[250px] h-full rounded-l-2xl outline-none px-4 font-normal  bg-[#F6F6F6] placeholder-[#000000]/[.5] text-[#000000]/[.5] text-sm'
                        type="text"
                        placeholder='Search for anything (Jobs)'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button className='bg-[#00ACFF]/[.46] rounded-r-2xl h-full w-16 grid place-content-center'>
                        <Search className='mr-2' />
                    </button>
                </form>
                : <SearchButton />
            }
        </>
    )
}



const NavLinks = () => {

    const [active, setActive] = useState<number>(0);
    const line = 'after:content-[""] after:rounded-full after:w-full after:h-[2px] after:bg-[#00ACFF] after:block after:absolute after:bottom-0';
 
    return (
        <ul className='h-full flex justify-between space-x-6 lg:space-x-14'>

            {
                navItems.map((item: any, index: number) => {
                    return (
                        <li
                            key={index}
                            className={`relative h-full flex items-center justify-center w-11 ${active === index ? line : null}`}
                            onClick={() => setActive(index)}
                        >
                            <Link href={item.link} className='text-[#00ACFF]'>{item.icon}</Link>
                        </li>
                    )
                })

            }
           

        </ul>

    )
}

export default function Nav() {

    const isSmallDevice = useMediaQuery("only screen and (min-width : 600px)");

    return (
        <nav className='w-full h-[76px] bg-white'>
            <div className='h-full flex px-6 sm:px-2 lg:px-0 justify-between items-center  max-w-5xl xl2:max-w-7xl  m-auto'>
                <NavLogo />

                { isSmallDevice && <NavLinks />}
                
                <SearchBar />
            </div>
        </nav>
    )
}
