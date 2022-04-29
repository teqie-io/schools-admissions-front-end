import React from 'react'

import WorldCard from './worldcard.jsx'
import { graphstats } from '../../app/components/header/search/sub-components/nav-app/image'

export default {
  title: 'Sub Components/WorldCard',
  component: WorldCard,
  argTypes: {
    size: {
      options: ['big', 'small'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field'>
      <WorldCard {...args} />
    </div>
  )
}

Template.args = {
  link: '/link',
  label: 'Finance',
  img: graphstats,
  comingSoon: false,
  size: 'big'
}
