import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='container mx-auto flex justify-between'>
            <nav className='py-6 px-4 flex justify-between itens-center ml-10'>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="reflect logo"
                        width={200}
                        height={60}
                        className='h-10 w-auto object-contain'
                    />
                </Link>
                <div className='flex items-center gap-4'>

                </div>
            </nav>
            <div className='flex item-center mr-10'>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>


    )
}

export default Header
