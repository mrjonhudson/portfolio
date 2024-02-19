import Header from '@/components/header/Header';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ImageRow from '@/components/ImageRow';
import spad from '../../public/img/spad.png'
import connectgif from '../../public/img/connect.gif'
import pubgolf from '../../public/img/pub_golf.png'
import pubgolf2 from '../../public/img/pub_golf2.png'
import arrow from '../../public/img/arrow.png'
import graduation from '../../public/img/graduation.png'
import diss from '../../public/img/diss.png'
import smash from '../../public/img/smash.png'
import pantree from '../../public/img/pantree.png'
import jump from '../../public/img/jump.gif'
import hero from '../../public/img/hero.jpg'
import blog from '../../public/img/blog.png'
import x from '../../public/img/x.png'


const HomePage: React.FC = () => {

    const images = [
        { img: pantree, alt: 'Pantree', url: 'https://blog.mrjonhudson.com/posts/pantree', title: 'Pantree', subtext: 'Product | Figma | Mobile Design' },
        { img: spad, alt: 'work2', url: 'https://blog.mrjonhudson.com/posts/spad', title: 'SPAD', subtext: 'Lead EV Engineer | Website Design' },
        { img: jump, alt: 'Jump 8-bit Game', url: 'jump', title: 'JUMP', subtext: '8-bit Video Game' },
        { img: smash, alt: 'Smash A Level Maths', url: 'https://smashalevelmaths.com', title: "Smash A Level Maths", subtext: "Frontend | Wordpress" },
        { img: pubgolf, alt: 'Pub Golf', url: 'https://blog.mrjonhudson.com/posts/pga', title: "Pub Golf App", subtext: "Fullstack | React Native | Typescript" },
        { img: x, alt: 'x', url: '' },
        { img: diss, alt: 'diss', url: 'https://docs.google.com/file/d/1oOjldAZFFy4XsV95Spo2bRg56DtxPtH2/preview', title: "UI/UX Research", subtext: "Read my dissertation" },
        { img: blog, alt: 'blog', url: 'https://blog.mrjonhudson.com', title: "My Blog", subtext: "Interested in my thoughts?" },
        { img: arrow, alt: 'arrow', url: '' },
        { img: graduation, alt: 'cv', url: 'https://docs.google.com/file/d/17qyW_k4VeXhIQoZ7Nar7TnhHdXQcmhH5/preview?usp=drivesdk', title: "CV", subtext: "Want to know more?" },
        { img: connectgif, alt: 'connect with me', url: 'https://www.linkedin.com/in/mrjonhudson', title: 'Connect with me', subtext: "Let's get personal" },

    ]

    return (
        <>
            <Header />
            <main className='overflow-hidden relative'>
                <Image priority src={hero} alt={'Hero'} className='hidden' />
                <Hero />
                <ImageRow images={images} />
                <div className="lastContainer w-screen p-4 justify-center flex bg-[var(--dark-void)]">
                    <p className='text-[var(--snow)]'>🌱 Organic produce from Shropshire</p>
                </div>
            </main>
        </>
    );
};


export default HomePage;

/*
bg-[url(/img/hero.jpg)] 
                bg-cover bg-center
                bg-no-repeat
                fle
                before:content-['']
                before:absolute
                before:inset-0
                before:block
                before:bg-gradient-to-b
                before:from-transparent
                before:to-black
                before:opacity-15
                before:z-[-5]x
*/