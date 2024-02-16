import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, ReactNode } from "react"

export interface PageInterface {
    coverImg: StaticImageData
    title?: string;
    subtext?: string;
}

const JumpPage = (props: PropsWithChildren<PageInterface>) => {
    return (
        <div
            className={`panel relative w-10/12 sm:w-2/3 xl:w-1/3 hover:opacity-60`}
            style={{ height: `calc(50vh)` }}
        >
            <div>
                <div className="w-full aspect-square flex justify-center items-center">
                    <div className="jump-panel w-[67%] aspect-[4/5]">
                        <Image className="pointer-events-none absolute top-0 left-0" src={props.coverImg} alt="Cover Image" />
                        {props.children}
                    </div>
                </div>
                {/* <Image className='w-full' src={jump} alt={"Jump"} height={2400} width={2000} onClick={() => {

                }} /> */}
            </div>
            <div className='p-10'>
                <h3 className='text-center text-xl'>
                    {props.title}
                </h3>
                <p className='mt-2 text-center text-l text-[var(--dusty-grey)]'>
                    {props.subtext}
                </p>
            </div>
        </div>
    )
}

export default JumpPage