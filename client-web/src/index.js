import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './app/layout/layout'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)