import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './app/layout/layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
