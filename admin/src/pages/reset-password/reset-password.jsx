import React from 'react'
import { Input, Button } from '../../components'

const ResetPassword = () => {
  return (
    <div className='min-vh-100 d-flex align-items-center' style={{ backgroundColor: '#6495ED' }}>
      <div className='my-5 w-25  bg-white rounded-3 mx-auto p-3'>
        <div className='mb-4'>
          <h3>Reset Password</h3>
          <p>Login into your account to continue</p>
        </div>
        <Input
          helperText='Password'
          placeholder='******'
          type='password'
        />
        <Input
          helperText='Confirm your password'
          placeholder='******'
          type='password'
        />
        <Button
          content='Reset My Password'
          style={{ color: '#6495ED', borderColor: '#6495ED' }}
        />
      </div>
    </div>
  )
}

export default ResetPassword