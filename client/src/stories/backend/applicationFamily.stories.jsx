import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import FamilyInformation from '../../app/components/admission-module/application/information/subcomponents/family-information.jsx'

export default {
  title: 'Components/Application Edit Family Information',
  component: FamilyInformation,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <FamilyInformation fixed={false} />
  </div>
)
