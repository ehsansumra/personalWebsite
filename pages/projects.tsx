import { NextPage } from "next"
import MainHeader from "../components/mainheader";
import HeaderBox from "../components/headerbox";
import LinkBox from "../components/linkbox";

const Projects: NextPage = () => {

    return (
        <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth xm:p-8 pb-5 xm:px-5 px-3 mt-30  md:mx-2">

                <h1 className="xm:text-2xl text-xl text-violet-300  mt-10">Projects</h1>

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
                    <p className="ml-3 text-gray-400 bg-gray-800 px-1 mt-2">-private</p>
                </section>

                <ul className="pl-5 [&>*]:text-gray-400">
                    <li className="list-item">Co-created a poker overlay for the Pokernow.club website using Typescript and Node.js.</li>
                    <li className="list-item">Uses game history logs retrieved from Pokernow&apos;s backend API to construct hand histories</li>
                    <li className="list-item">Hand histories are stored for each player and used to display various statistics on each player</li>
                </ul>

            </section>
        </div>

    )
}

export default Projects;