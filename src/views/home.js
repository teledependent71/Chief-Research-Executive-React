import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Research Executive</title>
        <meta property="og:title" content="Chief Research Executive" />
      </Helmet>
    </div>
  )
}

export default Home
