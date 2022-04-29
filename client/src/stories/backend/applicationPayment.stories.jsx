import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import Payment from '../../app/components/admission-module/application/payment/payment.jsx'

export default {
  title: 'Components/Application Payment',
  component: Payment,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <Payment />
  </div>
)
