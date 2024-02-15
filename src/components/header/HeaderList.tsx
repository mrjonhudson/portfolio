'use client'
import Link from "next/link"
import { ReactNode, useState } from "react"

type HeaderListProps = {
    title: string
    url: string
    icon: ReactNode
    hover?: ReactNode
}

const HeaderList = (props: HeaderListProps) => {

    const [show, setShow] = useState(false)

    return (
        <div className="relative">
            <Link
                className="hover:underline hover:pr-2 hover:pl-2 text-xl flex-row flex gap-3 items-center justify-center"
                href={props.url}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {props.icon}
                <p className="hidden md:block">{props.title}</p>
            </Link>
            {show && props.hover}
        </div>
    )
}

export default HeaderList