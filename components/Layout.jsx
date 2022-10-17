import Head from 'next/head';
import {box} from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <box maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
            {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </box>
    </>
)

export default Layout;