import React from 'react'
import { Input, Button } from '../../components'

const ForgotPassword = () => {
  return (
    <div className='min-vh-100 d-flex align-items-center' style={{ backgroundColor: '#6495ED'}}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
        <div className='mb-4'>
          <h3>Forgot Password</h3>
          <p>Please enter your registered e-mail address to get reset password mail</p>
        </div>
        <Input
          placeholder='johndoe@mail.com'
          helperText='E-mail address'
          type='email'
        />
        <Button
          content='Send Mail'
          style={{ color: '#6495ED', borderColor: '#6495ED' }}
        />
      </div>
    </div>
  )
}

export default ForgotPassword