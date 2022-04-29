import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import AddressInformation from '../../app/components/admission-module/application/information/subcomponents/address-information.jsx'

export default {
  title: 'Components/Application Address Information',
  component: AddressInformation,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <AddressInformation />
  </div>
)
