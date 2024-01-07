import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components'
import PageAnimation from '../../shared/common/page-animation'
import { ROUTE_PATHS } from '../../shared/constants/route-paths'
import { userAuthFormLiterals } from '../../shared/constants/literals'
import { GoogleIcon } from '../../shared/images'

const UserAuthForm = ({ type }) => {
  return (
    <PageAnimation key={type}>
      <section className='h-cover flex items-center justify-center'>
        <form className='w-[80%] max-w-[400px]'>
          <h1 className='text-4xl font-bold capitalize mb-10'>
            {type === ROUTE_PATHS.SIGN_IN ? userAuthFormLiterals.WELCOME_BACK['en'] : userAuthFormLiterals.JOIN_US_TODAY['en']}
          </h1>

          {
            type === ROUTE_PATHS.SIGN_UP && (
              <Input
                name='fullname'
                type='text'
                placeholder='John Doe'
                icon='fi-rr-user'
                helperText='Full Name'
              />
            )
          }
          <Input
            name='email'
            type='email'
            placeholder='johndoe@example.com'
            icon='fi-rr-envelope'
            helperText='Email'
          />

          <Input
            name='password'
            type='password'
            placeholder='******'
            icon='fi-rr-key'
            helperText='Password'
          />

          <button
            className='btn-dark center mt-14'
            type='sumbit'>
            {type
              .replace('-', ' ')
              .replace('/', '')
            }
          </button>

          <div className='relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold'>
            <hr className='w-1/2 border-black' />
            <p>{userAuthFormLiterals.OR['en']}</p>
            <hr className='w-1/2 border-black' />
          </div>

          <button className='btn-dark flex items-center justify-center gap-4 w-[90%] center'>
            <img src={GoogleIcon} className='w-5' />
            {userAuthFormLiterals.CONTINUE_WITH_GOOGLE['en']}
          </button>

          <p className=' mt-6 text-dark-gray text-center text-xl'>
            {type === ROUTE_PATHS.SIGN_IN ? userAuthFormLiterals.DONT_HAVE_AN_ACCOUNT['en'] : userAuthFormLiterals.ALREADY_A_MEMBER['en']}
            <Link to={type === ROUTE_PATHS.SIGN_IN ? ROUTE_PATHS.SIGN_UP : ROUTE_PATHS.SIGN_IN} className='underline text-black text-xl ml-1'>
              {type === ROUTE_PATHS.SIGN_IN ? userAuthFormLiterals.JOIN_US_TODAY['en'] : userAuthFormLiterals.SIGN_IN_HERE['en']}
            </Link>
          </p>
        </form>
      </section>
    </PageAnimation>
  )
}

export default UserAuthForm