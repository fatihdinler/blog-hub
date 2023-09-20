import React from 'react'
import Marquee from 'react-fast-marquee'
import { Image } from '@chakra-ui/react'

const FastMarquee = () => {
  return (
    <Marquee gradient className='d-flex'>
      <div className='mx-4 w-50'>
        <Image src='images/brand-01.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-02.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-03.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-04.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-05.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-06.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-07.png' alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src='images/brand-08.png' alt='brand'/>
      </div>
    </Marquee>
  )
}

export default FastMarquee