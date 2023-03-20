import { Montserrat } from 'next/font/google'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <title>Pokenext.</title>
        </Head>
            <Navbar />
            <main className='main-container'>{children}</main>
            <Footer />
        </>
    )
}