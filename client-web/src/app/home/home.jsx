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
              <div className='main-banner-content p-3'>
                <Image 
                  src='images/main-banner-1.jpg'
                  alt='main banner'
                  className='img-fluid rounded-5'
                />
                <div className='main-banner-content'>
                  <Text as='h4'></Text>
                  <Text as='h5'></Text>
                  <Text as='p'>BUY NOW</Text>
                  <Link></Link>
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