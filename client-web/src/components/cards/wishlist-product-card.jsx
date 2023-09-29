import React from 'react'
import { Text, Image } from '@chakra-ui/react'

const WishlistProductCard = () => {
  return (
    <div className='wishlist-card position-relative rounded-5'>
      <Image
        src='images/cross.svg'
        alt='cross'
        className='position-absolute cross img-fluid '
      />

      <div>
        <Image
          src='images/watch-01.jpeg'
          alt='product-compare'
        />
      </div>

      <div>
        <Text as='h5' className='title'>
          Honor T1 7.0 1 GB RAM ROM 7 Inch With Wi-Fi+3G Tablet
        </Text>
        <Text as='h6' className='price'>
          $100
        </Text>
      </div>
    </div>
  )
}

export default WishlistProductCard