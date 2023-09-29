import React, { useState } from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Text, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [form, setForm] = useState({
    firstname:'',
    lastname: '',
    email: '',
    password: '',
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
      <Helmet title='Sign Up' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Sign Up', link: '/sign-up', isActive: true },
        ]}
      />

      <div className='sign-in-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='sign-in-card rounded-5'>
                <Text as='h4'>Sign Up</Text>
                <FormControl isRequired className='form-controller'>
                  <div>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      name='firstname'
                      type='text'
                      placeholder='John'
                      value={form.firstname}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      name='lastname'
                      type='text'
                      placeholder='Doe'
                      value={form.lastname}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                      name='email'
                      type='email'
                      placeholder='johndoe@mail.com'
                      value={form.email}
                      onChange={handleInputChange}
                    />
                    <FormHelperText>We'll not share your e-mail address with any third users!</FormHelperText>
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
                      className='w-100 mb-2'>
                      Sign Up
                    </Button>
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

export default SignUp