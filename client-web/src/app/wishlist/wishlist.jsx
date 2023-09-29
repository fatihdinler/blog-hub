import React from 'react'
import { Helmet, Breadcrumb, WishlistProductCard } from '../../components'
import { Image, Text } from '@chakra-ui/react'

const Wishlist = () => {
  return (
    <div>
      <Helmet title='Your Wishlists' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Wishlist', link: '/wishlist', isActive: true },
        ]}
      />

      <div className='wishlist-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3 mt-4'>
              <WishlistProductCard />
            </div>

            <div className='col-3 mt-4'>
              <WishlistProductCard />
            </div>

            <div className='col-3 mt-4'>
              <WishlistProductCard />
            </div>

            <div className='col-3 mt-4'>
              <WishlistProductCard />
            </div>

            <div className='col-3 mt-4'>
              <WishlistProductCard />
            </div>

            <div className='col-3 mt-4'>
              <WishlistProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist