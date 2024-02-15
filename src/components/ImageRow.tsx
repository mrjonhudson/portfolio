'use client'

// components/ImageRow.tsx

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import PortfolioPage from './PortfolioPage';

export interface ImageInterface {
    img: StaticImageData;
    alt: string;
    url: string;
    title?: string;
    subtext?: string;
}

interface ImageRowProps {
    images: ImageInterface[];
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
            <div ref={component} className='w-[calc(83.3%*9)] sm:w-[calc(66.6%*9)] xl:w-[calc(33.3%*9)]' >
                {/* <div className="fixed">
                    This div element has position: fixed;
                </div> */}
                {/* <div ref={slider} className="container flex flex-1 items-center justify-start h-screen "> */}
                <div ref={slider} className='h-screen items-center justify-start flex'>
                    <div className='absolute flex justify-center w-screen z-10 pointer-events-none' style={{ height: '100%', top: 100 }}>
                        <h2 className='text-2xl'>{"My Work"}</h2>
                    </div>
                    {images.map(((img) =>
                        <PortfolioPage key={img.alt} image={img} />
                    ))}
                </div>
            </div ></>
    );
};


export default ImageRow;