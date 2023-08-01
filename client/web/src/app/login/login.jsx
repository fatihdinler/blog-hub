import React, { useState } from 'react'
import { Heading } from '@chakra-ui/react'
import { Input } from '../../components'

const Login = () => {

  const [emailAdress, setEmailAdress] = useState(null)
  const [userPassword, setUserPassword] = useState(null)

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Heading textAlign='center' className='mt-6 text-gray-800'>Let's Login to Your Shopper!</Heading>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email Adress
              </label>
              <div className='mt-1'>
                <Input
                  type='email'
                  name='email'
                  autoComplete='email'
                  required
                  placeholder='johndoe@mail.com'
                  value={emailAdress}
                  onChange={(e) => setEmailAdress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <Input
                  type='password'
                  name='password'
                  autoComplete='current-password'
                  required
                  placeholder='******'
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
