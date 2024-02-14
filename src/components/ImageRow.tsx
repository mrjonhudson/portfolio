'use client'

// components/ImageRow.tsx

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Image {
    img: StaticImageData;
    alt: string;
    url: string;
    title?: string;
    subtext?: string;
}

interface ImageRowProps {
    images: Image[];
}

gsap.registerPlugin(ScrollTrigger);

const ImageRow: React.FC<ImageRowProps> = ({ images }) => {

    const component = useRef(null);
    const slider = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    // snap: 1 / (panels.length + 1),
                    //@ts-ignore
                    end: () => "+=" + slider.current.offsetWidth
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <>
            <div ref={component} className='w-[calc(83.3%*6)] sm:w-[calc(66.6%*6)] xl:w-[calc(33.3%*6)]' >
                {/* <div className="fixed">
                    This div element has position: fixed;
                </div> */}
                {/* <div ref={slider} className="container flex flex-1 items-center justify-start h-screen "> */}
                <div ref={slider} className='h-screen items-center justify-start flex'>
                    <div className='absolute flex justify-center w-screen z-10 pointer-events-none' style={{ height: '100%', top: 100 }}>
                        <h2 className='text-2xl'>{"My Work"}</h2>
                    </div>
                    {images.map(((img) =>
                        <div className={`panel relative w-10/12 sm:w-2/3 xl:w-1/3 ${img.url === '' ? '' : 'cursor-pointer hover:opacity-60'}`} style={{ height: `calc(50vh)` }}>
                            <Image className='w-full' key={img.alt} src={img.img.src} alt={img.alt} height={2400} width={2000} onClick={() => {
                                if (img.url !== '') {
                                    window.open(img.url, "_blank")
                                }
                            }} />
                            <div className='p-10'>
                                <h3 className='text-center text-xl'>
                                    {img.title}
                                </h3>
                                <p className='mt-2 text-center text-l text-[var(--dusty-grey)]'>
                                    {img.subtext}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div ></>
    );
};


export default ImageRow;