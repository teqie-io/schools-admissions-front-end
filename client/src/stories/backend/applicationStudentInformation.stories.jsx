import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import PersonalInformation from '../../app/components/admission-module/application/information/subcomponents/personal-information.jsx'

export default {
  title: 'Components/Application Personal Information',
  component: PersonalInformation,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <PersonalInformation />
  </div>
)
