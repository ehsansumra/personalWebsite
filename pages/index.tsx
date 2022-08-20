import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBox from '../components/headerbox';
import HeaderArray from '../components/headerarray';
import LinkBox from '../components/linkbox';
import MainHeader from '../components/mainheader';
import JsonHeader from '../components/jsonheader';

import Link from 'next/link';
const Main: NextPage = () => {
    
    return (
        <>

            <Head>
                <title>Ehsan Sumra</title>
            </Head>
            <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
                <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth p-8 px-5 mt-30  md:mx-2">


                    <div className="lg:w-boxWidth w-auto sm:mb-5">
                        <MainHeader firstHeader={true}>Hi, I&apos;m Ehsan Sumra</MainHeader>
                        <h2 className="mt-4 text-lg  inline-block text-violet-200  ">I&apos;m a software engineer from West Haven, CT.</h2>

                        <p className="my-2 mb-4 w-full  text-gray-400">
                            ...and a Computer Science Student at Southern Connecticut State University (Graduating May 2023). I&apos;ve worked on
                            full stack CRUD applications as well as some frontend projects in my spare time.
                        </p>

                        <LinkBox href="mailto:ehsansumra@gmail.com">ehsansumra@gmail.com</LinkBox>

                        <Link href="/resume">
                            <a className="ml-1 text-red-200 border border-red-300 p-1 px-2 hover:bg-red-300 hover:text-red-800 hover:font-bold">
                                resume
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="ml-1 text-violet-200 border border-violet-300 p-1 px-2 hover:bg-violet-300 hover:text-violet-800 hover:font-bold">
                                projects
                            </a>
                        </Link>
                    </div>

                    <div className="w-auto mb-20 ">
                        <JsonHeader title="Skills">
                            <HeaderArray title="Languages">
                                "Javascript", "Typescript", "HTML", "CSS", "SQL", "Java", "Python"
                            </HeaderArray>

                            <HeaderArray title="Frameworks and Libraries">
                                "React", "Node.js", "Express.js", "Next.js", "Sequelize.js"
                            </HeaderArray>

                            <HeaderArray title="Tools">
                                "Git", "Github", "GitKraken", "NPM", "Trello"
                            </HeaderArray>

                            <HeaderArray title="Projects">
                                <Link href="/projects" scroll={false}>
                                    <a className="hover:bg-green-300 hover:text-green-800 hover:font-bold text-green-300 border border-green-800 p-1">
                                       "/projects-link"
                                    </a>
                                </Link>
                            </HeaderArray>
                        </JsonHeader>

                    </div>







                    
                </section>


            </div>

        </>
    )
}

export default Main;