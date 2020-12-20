import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>URL Shortener</title>
      </Head>

      <Navbar />
      <Header />
      <Statistics />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
