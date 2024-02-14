import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="w-screen p-3 backdrop-blur-sm top-0 fixed z-50 flex justify-center gap-10">
            <Link className="hover:underline hover:pr-2 hover:pl-2 text-xl flex-row flex gap-3 items-center" href="https://linkedin.com/in/mrjonhudson">
                <FaLinkedin />
                <p className="hidden md:block">LinkedIn</p>
            </Link>
            <Link className="hover:underline hover:pr-2 hover:pl-2 text-xl flex-row flex gap-3 items-center" href="https://linkedin.com/in/mrjonhudson">
                <FaXTwitter />
                <p className="hidden md:block">Twitter</p>
            </Link>
            <Link className="hover:underline hover:pr-2 hover:pl-2 text-xl flex-row flex gap-3 items-center" href="https://linkedin.com/in/mrjonhudson">
                <FaInstagram />
                <p className="hidden md:block">Instagram</p>
            </Link>
        </header>
    );
}

export default Header;