import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router';

const NavBar: NextPage = () => {
    const router = useRouter();
    let nameColor = " text-violet-300 ";

    if (router.pathname === "/projects") nameColor = " text-emerald-300 ";
    if (router.pathname === "/about") nameColor = " text-blue-300 ";
    if (router.pathname === "/resume") nameColor = " text-red-300 ";

    const firstNameStyle = "hover:drop-shadow-dropViolet shadow-gray-300 cursor-pointer select-none text-lg " + nameColor;
    const secondNameStyle = "xm:inline-block hidden "
    return (
        <nav
            className="flex items-center justify-center  border-gray-400
            bg-gray-900 
            w-full top-0 left-0 h-12 fixed shadow shadow-gray-700 z-50">

            <div className="xm:px-5 px-3 flex items-center justify-between w-navWidth ">
                <Link href="/"><div className={firstNameStyle}>ehsan <span className={secondNameStyle}>sumra</span></div></Link>
                <section className="flex align-center  [&>*]:select-none [&>*]:cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ehsan-sumra-a0107b248/" className="ml-5 text-lg text-red-300 hover:drop-shadow-dropRed">linkedin</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ehsansumra" className="ml-5 text-lg text-emerald-300 hover:drop-shadow-dropGreen ">github</a>
                </section>
     

            </div>
        </nav>
    )
}

export default NavBar;