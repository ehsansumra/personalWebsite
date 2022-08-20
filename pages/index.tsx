import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import HeaderBox from '../components/headerbox';
import LinkBox from '../components/linkbox';
import MainHeader from '../components/mainheader';

const Main: NextPage = () => {
    return (
        <>

        <Head>
            <title>Ehsan Sumra</title>
        </Head>
        <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth p-8 px-5 mt-30  md:mx-2">

                <div className="flex justify-between flex-wrap w-full  ">
                    <div className="lg:w-boxWidth w-auto">
                        <MainHeader>Hi, I&apos;m Ehsan Sumra</MainHeader>
                        <h2 className="mt-4 text-lg  inline-block text-violet-200  ">I&apos;m a software engineer from West Haven, CT.</h2>

                        <p className="my-2 mb-4 w-full  text-gray-400">
                            ...and a Computer Science Student at Southern Connecticut State University (Graduating May 2023). I&apos;ve worked on
                            full stack CRUD applications as well as some frontend projects in my spare time.
                        </p>

                        <LinkBox href="mailto:ehsansumra@gmail.com">ehsansumra@gmail.com</LinkBox>

                        <a 
                            className="ml-1 text-red-200 border border-red-300 p-1 px-2 hover:bg-red-300 hover:text-red-800 hover:font-bold"
                            href="/resume.png" target="_blank" rel="noopener noreferrer"
                        >resume</a>
                    </div>

                    <div className="lg:w-boxWidth w-auto  ">
                        <MainHeader>Skills</MainHeader>

                        <HeaderBox>Languages</HeaderBox>
                        <p className="mt-2 w-full  text-gray-400">
                            Javascript, Typescript, HTML, CSS, SQL, Java, Python
                        </p>

                        <HeaderBox>Frameworks and Libraries</HeaderBox>
                        <p className="mt-2 w-full  text-gray-400">
                            React, Node.js, Express.js, Next.js, Sequelize.js
                        </p>

                        <HeaderBox>Tools</HeaderBox>
                        <p className="mt-2 text-gray-400">
                            Git, Github, GitKraken, NPM, Trello
                        </p>

                    </div>

                </div>





                <MainHeader margin={true}>Projects</MainHeader>

                <section className="flex justify-start items-baseline flex-wrap mb-2">
                    <HeaderBox>Full Stack Survey App</HeaderBox>
                    <LinkBox narrowStyle={true} href="https://github.com/ehsansumra/surveyProject">-link</LinkBox>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Created a fully responsive and user-friendly interface to create surveys, take surveys, and view the submission data of each survey.</li>
                    <li className="list-item">Developed a REST API backend using Node.js, Express.js, Sequelize ORM and MySQL.</li>
                    <li className="list-item">Single page application frontend using React, React Router, and React-Bootstrap.</li>
                </ul>

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <HeaderBox>This Website</HeaderBox>
                    <LinkBox narrowStyle={true} href="https://github.com/ehsansumra/personalWebsite">-link</LinkBox>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">A responsive personal website created with React, Next.js, TypeScript, and Tailwind CSS</li>
                </ul>


                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <HeaderBox>Poker Overlay</HeaderBox>
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