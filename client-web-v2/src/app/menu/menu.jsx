import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../../components'

const Menu = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Menu