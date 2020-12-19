import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>URL Shortener</title>
      </Head>

      <Navbar />
      <Header />
    </div>
  )
}

export default Home
