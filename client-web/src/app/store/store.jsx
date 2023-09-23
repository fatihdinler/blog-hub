import React from 'react'
import { Breadcrumb, Helmet } from '../../components'
import { Text, Checkbox, Stack, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

const Store = () => {
  return (
    <div>
      <Helmet title='Our Store' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Store', link: '/store', isActive: true },
        ]}
      />
      <div className='store-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Shop By Categories</Text>
                <ul>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Filter By</Text>
                <div>
                  <Text as='h5' className='sub-title'>Availability</Text>
                  <Stack>
                    <Checkbox
                      colorScheme='teal'
                      className='checkbox-item'
                      size={'md'}>
                      In Stock (2)
                    </Checkbox>
                    <Checkbox
                      colorScheme='teal'
                      className='checkbox-item'
                      size={'md'}>
                      Out of Stock (0)
                    </Checkbox>
                  </Stack>

                  <Text as='h5' className='sub-title'>Price</Text>
                  <Stack direction='row'>
                    <InputGroup size='sm'>
                      <InputLeftAddon children='$' />
                      <Input type='number' placeholder='From' />
                    </InputGroup>

                    <InputGroup size='sm'>
                      <InputLeftAddon children='$' />
                      <Input type='number' placeholder='To' />
                    </InputGroup>
                  </Stack>

                  <Text as='h5' className='sub-title'>Colors</Text>
                  <div>
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Product Tags</Text>
              </div>
              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Random Products</Text>
              </div>
            </div>
            <div className='col-9'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store