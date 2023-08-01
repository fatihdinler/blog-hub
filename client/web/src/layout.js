import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

const Layout = () => {
  return (
    <ChakraProvider>
      <Routes>
        {
          routes.map(route => {
            return (
              <Route key={route.id} path={route.path} element={route.element}/>
            )
          })
        }
      </Routes>
    </ChakraProvider>
  )
}

export default Layout