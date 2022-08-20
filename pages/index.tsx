import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

const Main: NextPage = () => {
    return (
        <>

        <Head>
            <title>Ehsan Sumra</title>
        </Head>
        <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth p-8 px-5 mt-30  md:mx-2">

                <div className="flex justify-between flex-wrap w-full  ">
                    <div className="lg:w-boxWidth w-auto mb-10">
                        <h1 className="text-2xl text-violet-300 ">Hi, I&apos;m Ehsan Sumra.</h1>
                        <h2 className="mt-4 text-lg border-b inline-block text-violet-200 border-violet-500 px-1 ">I&apos;m a software engineer from West Haven, CT.</h2>

                        <p className="my-2 mb-4 w-full  text-gray-400">
                            ...and a Computer Science Student at Southern Connecticut State University (Graduating May 2023). I&apos;ve worked on
                            full stack CRUD applications as well as some frontend projects in my spare time.
                        </p>


                        <a className="hover:bg-green-300 hover:text-green-800 hover:font-bold text-green-300 border border-green-800 p-1 px-2" href="mailto:ehsansumra@gmail.com">
                            ehsansumra@gmail.com
                        </a>
                    </div>

                    <div className="lg:w-boxWidth w-auto  ">
                        <h1 className="text-2xl text-violet-300">Skills</h1>

                        <h2 className="mt-4 text-lg border-b inline-block text-violet-200 border-violet-500 px-1">Languages</h2>
                        <p className="mt-2 w-full  text-gray-400">
                            Javascript, Typescript, HTML, CSS, SQL, Java, Python
                        </p>

                        <h2 className="mt-4 text-lg border-b inline-block text-violet-200 border-violet-500 px-1">Frameworks and Libraries</h2>
                        <p className="mt-2 w-full  text-gray-400">
                            React, Node.js, Express.js, Next.js, Sequelize.js
                        </p>

                        <h2 className="mt-4 text-lg border-b inline-block text-violet-200 border-violet-500 px-1">Tools</h2>
                        <p className="mt-2 text-gray-400">
                            Git, Github, GitKraken, NPM, Trello
                        </p>

                    </div>

                </div>





                <h1 className="text-2xl text-violet-300 w-full mt-10">Projects</h1>

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <h2 className="text-lg text-violet-200 border-b border-violet-500 px-1">Full Stack Survey App</h2>
                    <a className="ml-3 mt-1 hover:bg-green-300 hover:text-green-800 hover:font-bold text-green-300 border border-green-800 px-1" href="https://github.com/ehsansumra/surveyProject">
                        -link
                    </a>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Created a fully responsive and user-friendly interface to create surveys, take surveys, and view the submission data of each survey.</li>
                    <li className="list-item">Developed a REST API backend using Node.js, Express.js, Sequelize ORM and MySQL.</li>
                    <li className="list-item">Single page application frontend using React, React Router, and React-Bootstrap.</li>
                </ul>

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <h2 className=" text-lg text-violet-200 border-b border-violet-500 px-1">This Website
                    </h2>
                    <a className=" ml-3  hover:bg-green-300 hover:text-green-800 hover:font-bold text-green-300 border border-green-800 px-1" href="https://github.com/ehsansumra/personalWebsite">
                        -link
                    </a>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">A responsive personal website created with React, Next.js, TypeScript, and Tailwind CSS</li>
                </ul>


                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <h2 className="text-lg text-violet-200 border-b border-violet-500 px-1">
                        Poker Overlay
                    </h2>
                    <p className="ml-3 text-gray-400 bg-gray-800 px-1">-private</p>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Co-created a poker overlay for the Pokernow.club website using Typescript and Node.js.</li>
                    <li className="list-item">Uses game history logs retrieved from Pokernow&apos;s backend API to construct hand histories</li>
                    <li className="list-item">Hand histories are stored for each player and used to display various statistics on each player</li>
                </ul>



            </section>


        </div>

        </>
    )
}

export default Main;