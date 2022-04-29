import React from 'react'

import CardContainer from './cardcontainer.jsx'

export default {
  title: 'Sub Components/CardContainer',
  component: CardContainer,
  argTypes: {
    shadowType: {
      options: ['main-card', 'standart', 'mini', 'grade'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <CardContainer {...args}>
      <div>Content</div>
    </CardContainer>
  </div>
)

Template.args = {
  shadowType: 'main-card',
  customStyle: { width: '15rem', height: '6rem' }
}
