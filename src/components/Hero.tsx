import Image from "next/image";
import { ChevronDown } from "react-feather"
import "./styles.css";

const Hero = () => {
    return (
        <div className="
                shadow-2xl
                firstContainer
                h-screen 
                flex
                flex-col
                bg-[linear-gradient(to_bottom,transparent,var(--dark-voided)),url(/img/hero.jpg)] 
                bg-cover bg-center
                bg-no-repeat
                fle
                "
            style={{ padding: '3vw' }}>
            <div className='flex-grow' />
            {/* <h1 className='text-9xl font-black text-[var(--snow)] justify-center flex'>mrjonhudson</h1> */}
            <div className='w-full'>
                <Image priority className='w-full justify-center' src='./img/title.svg' alt='mrjonhudson portfolio' width={1147} height={208} />
            </div>
            <div className='flex-grow flex flex-col'>
                <div className='screenDisplay flex-grow flex-col lg:flex-row flex' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 40 }}>
                    <p className='text-2xl text-[var(--snow)] justify-center flex'>
                        I research, design and build
                    </p>
                    <p className='text-2xl text-[var(--snow)]'>
                        Apps
                        <br></br>
                        Websites
                        <br></br>
                        Hardware
                    </p>
                    <p className='text-2xl text-[var(--snow)] justify-center flex'>
                        for consumers.
                    </p>
                </div>
                <div className='mobileDisplay flex-grow flex-col lg:flex-row flex' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 60 }}>
                    <p className='text-center font-light text-xl text-[var(--snow)] justify-center flex'>
                        I research, design and build Apps, Websites and Hardware for consumers.
                    </p>
                </div>
                <div className='flex' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ChevronDown
                        className='stroke-[var(--snow)] chevron'
                        size={75}

                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;