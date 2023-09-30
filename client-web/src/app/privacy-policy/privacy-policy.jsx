import React from 'react'
import { Helmet, Breadcrumb } from '../../components'

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet title='Privacy Policy' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Privacy Policy', link: '/privacy-policy', isActive: true },
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

export default PrivacyPolicy