import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import { useCreateUserMutation } from '../../redux/api'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleFileInputChange = (event) => {
    // Use it when the user going to change their avatar.
    const file = event.target.files[0]
    setAvatar(file)
  }

  const handleRegister = () => {
    // Sends data to backend.
  }

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='flex items-center justify-center bg-gray-50 sm:w-full sm:flex sm:items-center sm:justify-center'>
        <form
          className=' bg-white p-6 rounded-2xl shadow-md'
        >
          <div className='flex flex-row items-center'>
            <h2 className='text-2xl font-thin mb-6 font-Poppins'>Register to</h2>
            <h2 className='text-2xl font-light mb-6 ml-1 font-Poppins'>Shopper</h2>
          </div>
          <div className='mb-4'>
            <p className='font-Poppins font-extralight text-gray-500'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum ea quasi?
            </p>
          </div>

          <div className='mb-4'>
            <label htmlFor='fullName' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Full Name
            </label>
            <input
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='John Doe'
              type='text'
              name='full-name'
              value={fullName}
              onChange={(event) => handleChange(event, setFullName)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Email
            </label>
            <input
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='johndoe@mail.com'
              type='email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={(event) => handleChange(event, setEmail)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Password
            </label>
            <input
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='******'
              type='password'
              name='password'
              autoComplete='new-password'
              value={password}
              onChange={(event) => handleChange(event, setPassword)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Confirm Password
            </label>
            <input
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='******'
              type='password'
              name='confirmPassword'
              autoComplete='new-password'
              value={confirmPassword}
              onChange={(event) => handleChange(event, setConfirmPassword)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='avatar' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Choose an Avatar
            </label>
            <div className='mt-2 flex items-center'>
              <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                {avatar ? (
                  <img
                    src={avatar}
                    alt='avatar'
                    className='h-full w-full object-cover rounded-full'
                  />
                ) : (
                  <RxAvatar className='h-8 w-8' />
                )}
              </span>
              <label
                htmlFor='file-input'
                className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
              >
                <span>Upload a file</span>
                <input
                  type='file'
                  name='avatar'
                  id='file-input'
                  accept='.jpg,.jpeg,.png'
                  onChange={handleFileInputChange}
                  className='sr-only w-full'
                />
              </label>
            </div>
          </div>

          <div className='mb-4'>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-blue-400 hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2 text-white font-medium rounded focus:outline-none transition-colors duration-300 font-Poppins'
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          <div className='flex flex-row mb-6'>
            <p className='font-Poppins font-extralight text-gray-700'>Already have an account?</p>
            <p className='ml-1 text-blue-400 font-Poppins'>
              <Link to='/login'>Login here</Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}

const handleChange = (event, setMethod) => {
  setMethod(event.target.value)
}

export default Register
