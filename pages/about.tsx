import { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import websiteportrait from "../public/websiteportrait.jpg";
import MainHeader from "../components/mainheader";
const Projects: NextPage = () => {

    return (

        <>
        <Head>
            <title>Projects - Ehsan Sumra</title>
        </Head>
        <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth xm:p-8 pb-5 xm:px-5 px-3 mt-30  md:mx-2">
                
                <div className="w-full flex flex-wrap justify-evenly mt-5 ">
                    <div style={{width:"225px", height:"300px"}} className=" shadow shadow-gray-800  ml-5 mr-5 mb-5">
                        <Image layout="responsive" src={websiteportrait}/>
                    </div>
                    <div className="md:w-2/3">
                        <MainHeader noMargin={true}>I&apos;m Ehsan. I like programming, designing, and learning new technologies</MainHeader>
                        <div className="w-full mt-3 text-gray-400">
                            I&apos;m working towards landing my first job as a software engineer. This website is a way for me to put the skills I&apos;ve learned on display.

                        </div>
                        <MainHeader style={{marginTop: "1.25rem"}}>What I&apos;m working on</MainHeader>
                        <div className="w-full mt-3 text-gray-400">
                            I&apos;m working on learning Rust language to expand my knowledge on compiled languages. 
                            I&apos;m reading the documentation and learning new Rust concepts including references, borrowing, ownership, all of 
                            which Rust uses for memory safety instead of a garbage collector. I&apos;m planning to start a project using Rust. 
                            <br/><br/>Some project ideas: Markdown language parser, web server, CLI tool, implementing a linked-list (It&apos;s hard in Rust!)

                        </div>

                        <MainHeader style={{marginTop: "1.25rem"}}>School and Work</MainHeader>
                        <div className="w-full mt-3 text-gray-400">
                            I&apos;m in my last year of university as a Computer Science major. This semester, I&apos;m taking Theory of Programming Language (Haskell), Computer Graphics (C++),
                            Algorithms (Java), Software Design and Development (Python and Bash), and Introduction to Research in Computer Science.
                            <br/> <br/> I also work as a Help Desk Technician at my university. I have experience working with faculty and students to resolve various IT issues, 
                            both software and hardware related.

                        </div>
                    </div>

                </div>
            </section>
        </div>
        </>
    )
}

export default Projects;