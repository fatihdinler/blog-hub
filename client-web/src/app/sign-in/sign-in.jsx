import React, { useState } from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Text, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    comment: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <div>
      <Helmet title='Sign In' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Sign In', link: '/sign-in', isActive: true },
        ]}
      />

      <div className='sign-in-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='sign-in-card rounded-5'>
                <Text as='h4'>Sign In</Text>
                <FormControl isRequired className='form-controller'>
                  <div>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                      name='email'
                      placeholder='johndoe@mail.com'
                      value={form.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name='password'
                      type='password'
                      placeholder='*****'
                      value={form.password}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Button
                      colorScheme='teal'
                      variant='solid'
                      className='w-100'>
                      Sign In
                    </Button>
                  </div>

                  <div className='d-flex justify-content-between gap-15 align-items-center'>
                    <div>
                      <Link to='/forgot-password'>
                        <Text className='mb-0'>Forgot Password ?</Text>
                      </Link>
                    </div>

                    <div className='d-flex flex-row'>
                      <Link to='/sign-up'>
                        <Text className='mb-0'>Sign Up</Text>
                      </Link>
                    </div>
                  </div>
                </FormControl>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn