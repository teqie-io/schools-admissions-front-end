import React from 'react'

import InputVerification from './input-verification.jsx'

export default {
  title: 'Sub Components/InputVerification',
  component: InputVerification,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <InputVerification {...args} />
  </div>
)

Template.args = { length: 6, onChange: () => {}, onCompleted: () => {} }
