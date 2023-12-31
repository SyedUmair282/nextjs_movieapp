import Head from 'next/head';
import React from 'react'
import AboutComp from '../components/about';
import type { NextPage } from 'next'
const About:NextPage = () => {
  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./fav.png" />
      </Head>
      <AboutComp/>
    </>
  )
}

export default About;