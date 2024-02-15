import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import HeaderList from "./HeaderList";
import Image from "next/image"
import instagram from '../../../public/img/instagram.gif'
import linkedIn from '../../../public/img/linkedin.png'
import twitter from '../../../public/img/twitter.gif'


const Header = () => {
    return (
        <header className="w-screen p-3 backdrop-blur-sm top-0 fixed z-50 flex justify-center gap-10">
            <HeaderList
                title={"LinkedIn"}
                icon={<FaLinkedin />} url={"https://www.linkedin.com/in/mrjonhudson"}
                hover={
                    <div className="absolute h-[100px] w-[300px]">
                        <Image src={linkedIn} alt="LinkedIn" />
                    </div>
                } />
            <HeaderList
                title={"Twitter"}
                icon={<FaXTwitter />} url={"https://www.twitter.com/mrjonhudson"}
                hover={
                    <div className="absolute h-[100px] w-[300px] ">
                        <Image src={twitter} alt="Twitter" />
                    </div>
                } />
            <HeaderList
                title={"Instagram"}
                icon={<FaInstagram />} url={"https://www.instagram.com/mrjonhudson"}
                hover={
                    <div className="absolute h-[100px] w-[300px]">
                        <Image src={instagram} alt="Instagram gif" />
                    </div>
                } />
        </header>
    );
}

export default Header;