import { useState } from "react"
import { ImageInterface } from "./ImageRow"
import Image from 'next/image'

const PortfolioPage = (props: { image: ImageInterface }) => {

    const [hover, setHover] = useState(false)

    return (
        <div
            className={`panel relative w-10/12 sm:w-2/3 xl:w-1/3 ${props.image.url === '' ? '' : 'cursor-pointer hover:opacity-60'}`}
            style={{ height: `calc(50vh)` }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image className='w-full' src={props.image.img.src} alt={props.image.alt} height={2400} width={2000} onClick={() => {
                if (props.image.url !== '') {
                    window.open(props.image.url, "_blank")
                }
            }} />
            <div className='p-10'>
                <h3 className='text-center text-xl'>
                    {props.image.title}
                </h3>
                <p className='mt-2 text-center text-l text-[var(--dusty-grey)]'>
                    {props.image.subtext}
                </p>
            </div>
        </div>
    )
}

export default PortfolioPage