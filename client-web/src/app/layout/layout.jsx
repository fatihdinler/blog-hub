import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Menu } from '../../app'
import routes from '../../routes'
import '../../shared/style/layout.css'

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />}>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.component}
                />
              )
            })
          }
        </Route>
      </Routes>
    </>
  )
}

export default Layout