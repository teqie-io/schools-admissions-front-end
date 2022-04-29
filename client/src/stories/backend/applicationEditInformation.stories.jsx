import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import AddressEditInformation from '../../app/components/admission-module/application/information/subcomponents/address-edit-information.jsx'

export default {
  title: 'Components/Application Edit Address Information',
  component: AddressEditInformation,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <AddressEditInformation />
  </div>
)
