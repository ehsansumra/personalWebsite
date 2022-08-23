import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Transition from '../components/transition';
const Resume: NextPage = () => {
    const { pathname } = useRouter();
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
        <Head>
            <title>Resume - Ehsan Sumra</title>
        </Head>
        <Transition>
        <div className=" pattern w-full bg-gray-900 min-h-screen pt-12 flex flex-wrap justify-center">
            <section className=" bg-gray-900  shadow-gray-900 flex flex-col min-h-full w-navWidth p-8 px-5 mt-30  md:mx-2">

            <img src="resume.png"/>



            </section>


        </div>
        </Transition>

        </>
    )
}

export default Resume;