import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinksEng } from '@/constant'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    const session = {}
    return (
    <nav className='flexBetween navbar font-raleway'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
                <Image
                    src='/static/logo.png'
                    width={116}
                    height={43}
                    alt='logo'
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinksEng.map((link) => (
                    <Link href={link.href} key={link.text}>
                    {link.text}
                    </Link>
                ))}
            </ul>
        </div>
        <div className='flexCenter gap-4'>
            <>
                <UserButton afterSignOutUrl="/"/>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="btn">
                            Sign in
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <Link href="/create-thread" >
                        Request a new project
                    </Link>
                    <Link href="/" >
                        My Projects
                    </Link>
                    <SignOutButton></SignOutButton>
                </SignedIn>
            </>
        </div>
    </nav>
  )
}

export default Navbar