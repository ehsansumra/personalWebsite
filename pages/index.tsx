import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderArray from '../components/headerarray';
import MainHeader from '../components/mainheader';
import JsonHeader from '../components/jsonheader';
import Transition from '../components/transition';
import Link from 'next/link';
const Main: NextPage = () => {

    return (
        <>

            <Head>
                <title>Ehsan Sumra</title>
            </Head>
            
            <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
                <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth xm:p-8 xm:px-5 px-3 mt-30  md:mx-2">

                <Transition>

                
                    <div className="w-auto sm:mb-5">
                        <MainHeader firstHeader={true}>Hi, I&apos;m Ehsan Sumra.</MainHeader>
                        <h2 className="mt-4 xm:text-lg  inline-block text-violet-200  ">I&apos;m a software engineer from West Haven, CT.</h2>

                        <p className="my-2 mb-4 w-full  text-gray-400">
                            ...and a Computer Science Student at Southern Connecticut State University (Graduating May 2023). I&apos;ve worked on
                            full stack CRUD applications as well as some frontend projects in my spare time.
                        </p>
                        <div className="flex justify-start flex-wrap items-baseline">
                            <Link href="mailto:ehsansumra@gmail.com">
                                <a className="mr-2 mt-2 text-green-200 border hover:-translate-y-1 border-green-300 p-2 px-3 transition-all hover:bg-green-300 hover:text-green-800 hover:font-bold">
                                    ehsansumra@gmail.com
                                </a>
                            </Link>
                            <Link href="/resume">
                                <a className="mr-2 mt-2 text-red-200 border hover:-translate-y-1 border-red-300 p-2 px-3 transition-all hover:bg-red-300 hover:text-red-900 hover:font-bold">
                                    resume
                                </a>
                            </Link>
                            <Link href="/projects">
                                <a className="mr-2 mt-2 text-violet-200 border hover:-translate-y-1 border-violet-300 p-2 px-3 transition-all hover:bg-violet-300 hover:text-violet-800 hover:font-bold">
                                    projects
                                </a>
                            </Link>

                            <Link href="/about">
                                <a className=" mt-2 text-blue-200 border hover:-translate-y-1 border-blue-300 p-2 px-3 transition-all hover:bg-blue-300 hover:text-blue-800 hover:font-bold">
                                    about me
                                </a>
                            </Link>
                            

                            
                        </div>

                    </div>

                    <div className="w-auto mb-20 ">
                        <JsonHeader title="Skills">
                            <HeaderArray title="Languages">
                                &quot;Javascript&quot;, &quot;Typescript&quot;, &quot;HTML&quot;, &quot;CSS&quot;, &quot;SQL&quot;, &quot;Java&quot;, &quot;Python&quot;
                            </HeaderArray>

                            <HeaderArray title="Frameworks/Libraries">
                                &quot;React&quot;, &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;Next.js&quot;, &quot;Sequelize.js&quot;
                            </HeaderArray>

                            <HeaderArray title="Tools">
                                &quot;Git&quot;, &quot;Github&quot;, &quot;GitKraken&quot;, &quot;NPM&quot;, &quot;Trello&quot;
                            </HeaderArray>

                            <HeaderArray title="Projects">
                                <Link href="/projects" >
                                    <a className="text-green-200 border hover:-translate-y-1 border-green-300 p-2 px-3 transition-all hover:bg-green-300 hover:text-green-800 hover:font-bold ">
                                        &quot;/projects&quot;
                                    </a>
                                </Link>
                            </HeaderArray>
                        </JsonHeader>

                    </div>
                    </Transition>

                </section>


            </div>

        </>
    )
}

export default Main;