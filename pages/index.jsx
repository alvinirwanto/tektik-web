import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BisnisUnit from '../sections/BisnisUnit'
import Hero from '../sections/Hero'
import Klien from '../sections/Klien'
import Tagline from '../sections/Tagline'
import Tentang from '../sections/Tentang'

export default function Home() {
    return (
        <>
            <Head>
                <title>Tektik: Tactical Technology Today</title>
                <meta name="description" content="tektik it solution network " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo/tektik-white.png" />
            </Head>
            <main>
                <Navbar />
                <Hero />
                <Tentang />
                <Tagline />
                <Klien />
                <BisnisUnit />
                <Footer />
            </main>
        </>
    )
}
