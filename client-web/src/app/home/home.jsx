import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className='home-wrapper-primary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <Image 
                  src='images/main-banner-1.jpg'
                  alt='main banner'
                  className='img-fluid rounded-5'
                />
                <div className='main-banner-content position-absolute '>
                  <Text as='h4'>SUPERCHARGED FOR PROS.</Text>
                  <Text as='h5'>iPad S13+ pro.</Text>
                  <Text as='p'>From $999.00 or $41.62/mo. for 24 month</Text>
                  <Link>BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className='col-6'>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home