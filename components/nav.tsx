import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
const NavBar: NextPage = () => {
    return (
        <nav
            className="flex items-center justify-center  border-gray-400
            bg-gray-900 
            w-full top-0 left-0 h-12 fixed shadow shadow-gray-700 z-50">

            <div className="pl-5 pr-5 flex items-center justify-between w-navWidth ">
                <Link href="/"><div className="text-violet-300   hover:drop-shadow-dropViolet shadow-gray-300 cursor-pointer select-none text-lg ">ehsan sumra</div></Link>
                <section className="flex align-center  [&>*]:select-none [&>*]:cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ehsan-sumra-a0107b248/" className="ml-5 text-lg text-red-300 hover:drop-shadow-dropRed">linkedin</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ehsansumra" className="ml-5 text-lg text-green-300 hover:drop-shadow-dropGreen ">github</a>
                </section>

            </div>
        </nav>
    )
}

export default NavBar;