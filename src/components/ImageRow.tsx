'use client'

// components/ImageRow.tsx

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import "./styles.css";
import Image, { StaticImageData } from 'next/image';
import jumptape from '../../public/img/jumptape.png'
import PortfolioPage from './PortfolioPage';
import Page from './Page';
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';

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

// gsap.registerPlugin(ScrollTrigger);

const ImageRow: React.FC<ImageRowProps> = ({ images }) => {

    const component = useRef(null);
    const slider = useRef(null);

    const { scrollYProgress } = useScroll({
        target: component,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((value) => {
            console.log('scrollYProgress:', value);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"], { ease: easeInOut });


    return (
        <>
            <div ref={component}
                // className='relative h-[300vh]'
                className='relative h-[300vh] w-[calc(83.3%*9)] sm:w-[calc(66.6%*9)] xl:w-[calc(33.3%*9)]'
            >
                {/* <div className="fixed">
                    This div element has position: fixed;
                </div> */}
                {/* <div ref={slider} className="container flex flex-1 items-center justify-start h-screen "> */}
                <div ref={slider} className='sticky top-0 h-screen items-center justify-start flex'>
                    <div className='absolute flex w-screen z-10 pointer-events-none items-center flex-col' style={{ height: '100%', top: 100 }}>
                        <h2 className='text-2xl'>{"A Collection of Stuff I've Built"}</h2>
                        <p className='text-xs text-[var(--dusty-grey)]'>{"keep scrolling down"}</p>
                    </div>
                    <motion.div className="h-screen items-center justify-start flex" style={{ x }} >
                        {images.map(((img) =>
                            img.url === 'jump'
                                ?
                                <Page key={img.alt} coverImg={jumptape} title={img.title} subtext={img.subtext}>
                                    <iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=52078" height={"100%"} width={"100%"} allowFullScreen className="border-none overflow-hidden rounded-lg"></iframe>
                                </Page>
                                :
                                <PortfolioPage key={img.alt} image={img} />
                        ))}
                        {/* <Card /> */}
                    </motion.div>
                </div>
            </div ></>
    );
};

const names = [
    { name: "John", id: 1 },
    { name: "Alice", id: 2 },
    { name: "Bob", id: 3 },
    { name: "Emily", id: 4 },
    { name: "Michael", id: 5 },
    { name: "Sarah", id: 6 },
];

const Card = () => {
    return (
        <div className="flex items-center gap-4 overflow-hidden p-6">
            {names.map((item) => (
                <div
                    key={item.id}
                    className="p-36 bg-blue-500 rounded-lg text-2xl text-white"
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};


export default ImageRow;