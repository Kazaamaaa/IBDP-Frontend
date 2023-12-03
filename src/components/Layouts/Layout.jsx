import React from 'react'
import Footer from './Footer'
import NavbarDefault from './Navbar'

const Layout = ({children}) => {
  return (
    <>
    <NavbarDefault/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout