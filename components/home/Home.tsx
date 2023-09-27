import Link from 'next/link'
import { forwardRef } from 'react'


interface ButtonProps {
    children: any
    href?: string
    className?: string
}

function Button({ children, href = '/', className = '' }: ButtonProps) {

    return (
        <Link href={href} className={`font-semibold rounded-[4px] transition ease-in-out px-4 py-3  text-sm sm:text-base ${className}`}>{children}</Link>
    )
}

function NabBar() {
    return (
        <div className='bg-[#FFE6C9] w-full py-6 px-4 xl:px-0'>
            <nav className='flex justify-between max-w-7xl m-auto'>
                <h3>Logo</h3>
                <div className='space-x-4'>
                    <Button className='bg-[#7F265B] hover:bg-[#9f3a77] text-white'>Sign Up</Button>
                    <Button className='bg-white text-black hover:text-white hover:bg-black border border-black'>Sign In</Button>
                </div>
            </nav>
        </div>
    )
}

function Header() {
    return (
        <header className='bg-[#FFE6C9] text-center md:text-left h-[95vh] md:h-[90vh] flex lg:items-center'>
            <div className='max-w-5xl flex flex-col md:flex-row items-center justify-around flex-1 lg:m-auto'>
                <div className='space-y-8 md:space-y-16'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-5xl sm:text-7xl capitalize'>x-accounts</h1>
                        <p className='max-w-md text-sm sm:text-base capitalize px-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum, tempore libero a aliquam eum facilis suscipit, deserunt nostrum aspernatur dignissimos quasi fuga, similique quam
                        </p>
                    </div>
                    <div className='space-x-4'>
                        <Button className='bg-[#7F265B] hover:bg-[#9f3a77] text-white'>Download App</Button>
                        <Button className='bg-white text-black border border-black hover:text-white hover:bg-black'>Sign Up</Button>
                    </div>
                </div>
                <div className='bg-red-400 rounded-[30px] w-[280px] h-[540px] sm:w-[316px] sm:h-[640px] relative overflow-hidden'>
                    <iframe
                        className='w-full h-full'
                        src="https://www.youtube.com/embed/TJAfLE39ZZ8?si=fyjgCerXDZa_h59s"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
        </header>
    )
}

interface ItemProps {
    subtitle: string
    content: string
}

const Item = forwardRef(({subtitle, content}: ItemProps, key: any) => {
    return (
        <div key={key} className='bg-[#E8EEF3] rounded-2xl pt-6 pl-6 pr-16 pb-14 w-full md:w-auto'>
            <h4 className='text-[#656F77] text-sm font-light mb-2'>{subtitle}</h4>
            <p className='md:max-w-[200px] font-semibold text-xl'>{content}</p>
        </div>
    )
})



function Services() {

    const items = [
        {
            subtitle: "Custom Landing Pages",
            content : "Your custom pages are ready! Log in to start using them now."
        },
        {
            subtitle: "Page Personalization",
            content : "Take control and customize your page. Log in now to get started!"
        },
        {
            subtitle: "Statistical Insights & Downloads",
            content : "See all your stats. Download them easily."
        }
    ]

    return (
        <main className='bg-white'>
            <section className='min-h-[500px] mt-16 mb-28'>
                <h3 className='text-center font-bold text-3xl mb-8'>Our Service</h3>
                <div className='flex flex-col sm:flex-row flex-wrap px-4 justify-center gap-8 sm:gap-16'>
                    {items.map(({subtitle, content}, index: number) => <Item key={index} subtitle={subtitle} content={content} />)}
                </div>
            </section>
        </main>
    )
}

export default function Home() {
    return (
        <>
            <NabBar />
            <Header />
            <Services />
        </>
    )
}

Home.displayName = 'Home'
Item.displayName = 'Item'
Services.displayName = 'Services'
Button.displayName = 'Button'
NabBar.displayName = 'NabBar'
Header.displayName = 'Header'