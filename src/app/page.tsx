import Header from '@/components/Header';
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

const HomePage: React.FC = () => {

    const images = [
        { img: pubgolf, alt: 'work1', url: 'https://google.com' },
        { img: spad, alt: 'work2', url: 'https://www.saintspad.org.uk', title: 'SPAD', subtext: 'Lead EV Engineer | Website Design' },
        { img: smash, alt: 'Smash A Level Maths', url: 'https://smashalevelmaths.com', title: "Smash A Level Maths", subtext: "Frontend | Wordpress" },
        { img: pubgolf, alt: 'Pub Golf', url: 'https://thepubgolfapp.carrd.co', title: "Pub Golf App", subtext: "Fullstack | React Native | Typescript" },
        { img: diss, alt: 'diss', url: 'https://docs.google.com/file/d/1oOjldAZFFy4XsV95Spo2bRg56DtxPtH2/preview', title: "UI/UX Research", subtext: "Read my dissertation" },
        { img: arrow, alt: 'arrow', url: '' },
        { img: graduation, alt: 'cv', url: 'https://docs.google.com/file/d/17qyW_k4VeXhIQoZ7Nar7TnhHdXQcmhH5/preview?usp=drivesdk', title: "CV", subtext: "Want to know more?" },
        { img: connectgif, alt: 'connect with me', url: 'https://google.com', title: 'Connect with me', subtext: "Let's get personal" },

    ]

    return (
        <>
            <Header />
            <main className='overflow-hidden relative'>
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