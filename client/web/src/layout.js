import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
const Layout = () => {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme='teal' size='lg'>
          CLICK
        </Button>
      </div>
    </ChakraProvider>
  )
}

export default Layout