import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import ApplicationInformation from '../../app/components/admission-module/application/information/subcomponents/application-information.jsx'

export default {
  title: 'Components/Application Edit Personal Information',
  component: ApplicationInformation,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <ApplicationInformation />
  </div>
)
