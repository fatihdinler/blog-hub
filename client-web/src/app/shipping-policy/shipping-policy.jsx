import React from 'react'
import { Helmet, Breadcrumb } from '../../components'

const ShippingPolicy = () => {
  return (
    <div>
      <Helmet title='Shipping Policy' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Shipping Policy', link: '/shipping-policy', isActive: true },
        ]}
      />

      <div className='policy-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='row-12'>
              <div className='policy rounded-5'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingPolicy