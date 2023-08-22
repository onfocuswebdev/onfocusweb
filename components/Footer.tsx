import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { NavLinksEng } from "@/constant";

const Footer = () => {
  return (
    <section className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
            <div className="flex items-center flex-col">
                <Image src="/static/logo.png" width={116} height={38} alt="logo" />

                <p className="text-center text-sm font-normal mt-5 max-w-xs">
                    OnFocusWeb is the world's leading company that will develop your web and mobile application.
                </p>
            </div>
            <ul className='xl:flex hidden justify-center text-small gap-7'>
                {NavLinksEng.map((link) => (
                    <Link href={link.href} key={link.text}>
                    {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flexCenter footer_copyright">
            <p>@ 2023 OnFocusWeb. All rights reserved</p>
        </div>
    </section>
  )
}

export default Footer