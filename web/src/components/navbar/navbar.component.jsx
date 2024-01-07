import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { setIsSearchBoxVisible } from '../../features/ui/navbar'
import { Logo } from '../../shared/images'
import { ROUTE_PATHS } from '../../shared/constants/route-paths'
import { navbarLiterals } from '../../shared/constants/literals'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isSearchBoxVisible } = useSelector(state => state.navbar)

  const onSearchBoxPress = () => {
    dispatch(setIsSearchBoxVisible(!isSearchBoxVisible))
  }

  return (
    <>
      <nav className='navbar'>
        <Link
          to='/'
          className='flex-none w-10'>
          <img
            src={Logo}
            className='w-full'
          />
        </Link>

        <div className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ${isSearchBoxVisible ? `show` : `hide`}`}>
          <input
            type='text'
            placeholder={navbarLiterals.SEARCH['en']}
            className='w-full bg-grey p-4 pl-6 pr-16 rounded-full placeholder:text-dark-grey md:pl-12'
          />
          <i className='fi fi-rr-search absolute right-[10%] top-1/2 transform -translate-y-1/2 pointer-events-none text-xl text-dark-grey'></i>
        </div>

        <div className='flex items-center gap-3 md:gap-6 ml-auto'>
          <button
            className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'
            onClick={onSearchBoxPress}>
            <i className='fi fi-rr-search text-2xl'></i>
          </button>

          <Link to={ROUTE_PATHS.EDITOR} className='hidden md:flex gap-2 link'>
            <i className='fi fi-rr-file-edit'></i>
            <p>{navbarLiterals.WRITE['en']}</p>
          </Link>

          <Link to={ROUTE_PATHS.SIGN_IN} className='btn-dark py-2'>
            {navbarLiterals.SIGN_IN['en']}
          </Link>

          <Link to={ROUTE_PATHS.SIGN_UP} className='btn-light py-2 hidden md:block'>
            {navbarLiterals.SIGN_UP['en']}
          </Link>
        </div>
      </nav>

      {/** In order to implement the nested routes in layout.js file, we need to place Outlet component here! */}
      <Outlet />
    </>
  )
}

export default Navbar