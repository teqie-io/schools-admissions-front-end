import React from 'react'

import TopReferalsItem from './topreferalsitem.jsx'

export default {
  title: 'Sub Components/TopReferalsItem',
  component: TopReferalsItem,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <TopReferalsItem {...args} />
  </div>
)

Template.args = {
  name: 'Kogi',
  image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
  achievement: '21 meets',
  hexColor: 'blue'
}
