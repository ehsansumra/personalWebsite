import { NextPage } from "next"
import HeaderBox from "../components/headerbox";
import LinkBox from "../components/linkbox";
import Head from 'next/head'
import Transition from "../components/transition";
const Projects: NextPage = () => {

    return (

        <>
        <Head>
            <title>Projects - Ehsan Sumra</title>
        </Head>
        <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth xm:p-8 pb-5 xm:px-5 px-3 mt-30  md:mx-2">
                <Transition>
                <h1 className="xm:text-2xl text-xl text-emerald-300  mt-10">Projects</h1>

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <HeaderBox>Coastal Materials Testing Lab Website</HeaderBox>
                    <LinkBox narrowStyle={true} href="https://www.coastalmaterialstesting.com">-coastalmaterialstesting.com</LinkBox>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Co-created and designed a responsive website for Coastal Materials Testing Lab, LLC.</li>
                    <li className="list-item">Created with Next.js and React-Bootstrap.</li>
                    <li className="list-item">Worked with the client to ensure that all of the requirements were met. Held multiple meetings to ensure we were on the same page in the development process</li>
                </ul>

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <HeaderBox>Full Stack Survey App</HeaderBox>
                    <LinkBox narrowStyle={true} href="https://github.com/ehsansumra/surveyProject">-github repo</LinkBox>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Created a fully responsive and user-friendly interface to create surveys, take surveys, and view the submission data of each survey.</li>
                    <li className="list-item">Developed a REST API backend using Node.js, Express.js, Sequelize ORM and MySQL.</li>
                    <li className="list-item">Single page application frontend using React, React Router, and React-Bootstrap.</li>
                </ul>

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <HeaderBox>This Website</HeaderBox>
                    <LinkBox narrowStyle={true} href="https://ehsansumra.com">-ehsansumra.com</LinkBox>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">A responsive personal website created with React, Next.js, TypeScript, and Tailwind CSS</li>
                </ul>


                

                

                <section className="flex justify-start items-baseline flex-wrap mt-5 mb-2">
                    <HeaderBox>Poker Overlay</HeaderBox>
                    <p className="ml-3 text-gray-400 bg-gray-800 px-1 mt-2">-private</p>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Co-created a poker overlay for the Pokernow.club website using Typescript and Node.js.</li>
                    <li className="list-item">Uses game history logs retrieved from Pokernow&apos;s backend API to construct hand histories</li>
                    <li className="list-item">Hand histories are stored for each player and used to display various statistics on each player</li>
                </ul>
                </Transition>
            </section>
        </div>
        </>
    )
}

export default Projects;