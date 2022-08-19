import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
const NavBar: NextPage = () => {
    return (
        <nav
            className="flex items-center justify-center border-b border-gray-400
            bg-gray-900 
            w-full top-0 left-0 h-12 fixed drop-shadow-xl z-50">

            <div className="pl-5 pr-5 flex items-center justify-between w-navWidth ">
                <Link href="/"><div className="text-violet-400 hover:text-blue-400 cursor-pointer select-none ">ehsan sumra</div></Link>
                <section className="flex align-center [&>*:hover]:text-blue-400 [&>*]:select-none [&>*]:cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ehsan-sumra-a0107b248/" className="ml-5 ">linkedin</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ehsansumra" className="ml-5">github</a>
                </section>

            </div>
        </nav>
    )
}

export default NavBar;