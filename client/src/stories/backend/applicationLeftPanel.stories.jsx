import React from 'react'

import ApplicationWindow from '../../app/components/admission-module/application/application-window/application-window.jsx'

export default {
  title: 'Components/Application Window',
  component: ApplicationWindow,
  argTypes: {}
}

export const Description = () => (
  <div className='relative' style={{ height: '20rem' }}>
    <ApplicationWindow fixed={false} />
  </div>
)
