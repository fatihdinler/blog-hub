import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Text, Heading, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <div>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <Text className='text-white mb-0'>
                Free Shipping Over $100 & Free Returns
              </Text>
            </div>
            <div className='col-6'>
              <Text className='text-end text-white mb-0'>
                Hotline: <a className='text-white' href='tel:+90 546 881 24 26'>(+90) 546 881 24 26</a>
              </Text>
            </div>
          </div>
        </div>
      </header>
      <div className='header header-upper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
              <Heading as='h2' size='xl' className='text-white'>
                <Link>DigiShop</Link>
              </Heading>
            </div>
            <div className='col-5'>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <BsSearch color='gray.300' />
                </InputLeftElement>
                <Input type='tel' className='bg-white' placeholder='Search Product' />
              </InputGroup>
            </div>
            <div className='col-5'>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header