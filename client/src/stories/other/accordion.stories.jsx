import React from 'react'

import Accordion from '../../app/components/accordion/accordion.jsx'

export default {
  title: 'Sub Components/Accordion',
  component: Accordion,
  argTypes: {
    // type: {
    //   options: ['checkbox', 'text'],
    //   control: { type: 'radio' }
    // }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field'>
      <Accordion {...args}>
        <div>1.Content</div>
        <div>2.Content</div>
      </Accordion>
    </div>
  )
}

Template.args = {
  title: 'Accordion'
}
