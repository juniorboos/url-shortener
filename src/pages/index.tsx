import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import Banner from '../components/Banner'

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
    </div>
  )
}

export default Home
