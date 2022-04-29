import React from 'react'

import Result from '../../app/components/institutions/result/result.jsx'

export default {
  title: 'Components/ResultCrumbs',
  component: Result,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <Result {...args} />
  </div>
)

Template.args = {
  resultDot: [
    { dot: 'done', text: 'Getting Started' },
    { dot: 'done', text: 'Address' },
    { dot: 'done', text: 'Choose a plan' },
    { dot: 'active', text: 'Domain Preferences' },
    { dot: 'unactive', text: 'Assign a buddy' }
  ]
}
