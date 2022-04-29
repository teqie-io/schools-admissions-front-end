import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import ParentInformation from '../../app/components/admission-module/application/information/subcomponents/parent-information.jsx'

export default {
  title: 'Components/Application Parent Information',
  component: ParentInformation,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <ParentInformation />
  </div>
)
