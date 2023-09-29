import React, { useState } from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Text, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {

  const [form, setForm] = useState({
    password:'',
    confirmPasswordassword: '',
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
      <Helmet title='Reset Password' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Reset Password', link: '/reset-password', isActive: true },
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
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      name='confirmPassword'
                      type='password'
                      placeholder='*****'
                      value={form.confirmPasswordassword}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Button
                      colorScheme='teal'
                      variant='solid'
                      className='w-100 mb-2'>
                      Reset Password
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

export default ResetPassword