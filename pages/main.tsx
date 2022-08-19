import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/Main.module.css'
const Main: NextPage = () => {
    return (
        <div className=" pattern w-full min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900 shadow-lg shadow-gray-900 flex flex-col min-h-full w-navWidth p-8 px-5   md:border-x   border-gray-400 md:mx-2">
                <h1 className="text-2xl text-violet-400 w-full">Hi, I'm Ehsan.</h1>
                <h2 className="mt-2 text-lg w-full">I'm a software engineer from West Haven, CT.</h2>

                <p className="mt-4 w-full  text-gray-400">
                    I'm a Computer Science Student at Southern Connecticut State University (Graduating May 2023). I've worked on
                    full stack CRUD applications as well as some frontend projects in my spare time.
                </p>


                <a className="mt-4 hover:underline w-10" href="mailto:ehsansumra@gmail.com">
                    ehsansumra@gmail.com
                </a>


                <h1 className="text-2xl text-violet-400 w-full mt-20">Skills</h1>

                <h2 className="mt-4 text-lg w-full">Languages</h2>
                <p className="mt-2 w-full  text-gray-400">
                    Javascript, Typescript, HTML, CSS, SQL, Java, Python
                </p>

                <h2 className="mt-4 text-lg w-full">Frameworks and Libraries</h2>
                <p className="mt-2 w-full  text-gray-400">
                    React, Node.js, Express.js, Next.js, Sequelize.js
                </p>

                <h2 className="mt-4 text-lg w-full">Tools</h2>
                <p className="mt-2 w-full  text-gray-400">
                    Git, Github, GitKraken, NPM, Trello
                </p>

                <h1 className="text-2xl text-violet-400 w-full mt-20">Projects</h1>

                <h2 className="mt-4 text-lg w-full">Full Stack Survey App</h2>
                <ul className="pl-5 mt-2 [&>*]:text-gray-400">
                    <li className="list-item">Created a fully responsive and user-friendly interface to create surveys, take surveys, and view the submission data of each survey.</li>
                    <li className="list-item">Developed a REST API backend using Node.js, Express.js, Sequelize ORM and MySQL.</li>
                    <li className="list-item">Single page application frontend using React, React Router, and React-Bootstrap.</li>
                </ul>

                <a className="mt-4 hover:underline w-10 text-blue-400" href="https://github.com/ehsansumra/surveyProject">
                    github.com/ehsansumra/surveyProject
                </a>

            </section>


        </div>
    )
}

export default Main;