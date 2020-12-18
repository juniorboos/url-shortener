import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>URL Shortener</title>
      </Head>

      <Header />
    </div>
  )
}

export default Home
