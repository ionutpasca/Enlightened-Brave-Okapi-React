import React from 'react'

import { Helmet } from 'react-helmet'

import Component8 from '../components/component8'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Enlightened Brave Okapi</title>
        <meta property="og:title" content="Enlightened Brave Okapi" />
      </Helmet>
      <Component8
        text={
          <fragment>
            <span className="home-text">Text</span>
          </fragment>
        }
        text1={
          <fragment>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <span>Li</span>
              <span className="home-text02">n</span>
              <span>k</span>
            </a>
          </fragment>
        }
        text2={
          <fragment>
            <span className="home-text04">
              <span>Butdsadsadsa</span>
              <br></br>
              <span>vfdbgfton</span>
            </span>
          </fragment>
        }
        heading={
          <fragment>
            <span className="home-text08">
              <span>Hea</span>
              <span className="home-text10">dddsadsa</span>
              <br className="home-text11"></br>
              <span className="home-text12">dsadsasa</span>
              <br className="home-text13"></br>
              <span className="home-text14">dsad</span>
              <span>saing</span>
            </span>
          </fragment>
        }
      ></Component8>
    </div>
  )
}

export default Home
