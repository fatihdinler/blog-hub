import React, { useState } from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Text, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
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
      <Helmet title='Reset Your Password' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Reset Password', link: '/forgot-password', isActive: true },
        ]}
      />

      <div className='forgot-password-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='forgot-password-card rounded-5'>
                <Text as='h4'>Reset Your Password</Text>
                <Text as='p'>We'll send you an e-mail to reset your password. It'll only valid for 10 minutes.</Text>
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
                    <Button
                      colorScheme='teal'
                      variant='solid'
                      className='w-100 mb-2'>
                      Send Link
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

export default ForgotPassword