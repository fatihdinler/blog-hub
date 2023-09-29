import React from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '../../components/icons/icons'

const BlogDetail = () => {
  return (
    <div>
      <Helmet title='Dynamic Blog Name' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Blog', link: '/blog', isActive: false },
          { content: 'Dynamic Blog Name', link: '/blog', isActive: true },
        ]}
      />

      <div className='blog-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card rounded-5'>
                <Link to='/blog'>
                  <ArrowLeftIcon />
                  <Text className='link-text'>Go Back to Blogs</Text>
                </Link>
                <Text as='h3'>
                  A Beautiful Sunday Morning Renaissance
                </Text>
                <Image
                  src='images/blog-1.jpg'
                  alt='blog-detail'
                  className='img-fluid rounded-top-5 w-100'
                />
                <Text as='p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati rerum ratione nostrum. Magnam porro iste tempora ipsum! Aperiam et sequi labore recusandae aliquam nisi minima laboriosam eligendi sit esse!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium autem deserunt esse omnis excepturi voluptatem modi veritatis, iste quos placeat eum cupiditate harum suscipit ad doloribus. Ea ut voluptatibus deserunt?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate illum corporis dolorum doloribus minus ex pariatur reprehenderit temporibus quas modi quia unde totam, a facilis, aperiam tempore. Minima, aspernatur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit velit quibusdam. Ratione id sequi dolorem odio ad praesentium minima quia laborum, illo incidunt illum eum itaque dolor expedita? Possimus.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptate eum, accusantium non nulla ut odio delectus aliquam laboriosam cum magnam repudiandae amet dicta fugiat, dignissimos ducimus neque nemo alias!
                </Text>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail