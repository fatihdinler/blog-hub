import React from 'react'
import { Helmet, Breadcrumb } from '../../components'

const TermsConditionPolicy = () => {
  return (
    <div>
      <Helmet title='Terms & Condition' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Terms & Condition', link: '/terms-condition-policy', isActive: true },
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

export default TermsConditionPolicy