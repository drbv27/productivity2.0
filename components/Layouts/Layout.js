import React from 'react'
import LeftNavbar from '../LeftNavbar'
import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <LeftNavbar/>
      <Header/>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout