import React from 'react'
import LeftNavbar from './LeftNavbar'
import Header from './Header'
import Head from 'next/head'

const Layout = (props) => {
  const usuario = true;
  return (
    <>
      <Head>
        <title>PygmaProductivity</title>
      </Head>
      <LeftNavbar usuario={usuario}/>
      <Header usuario={usuario}/>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout