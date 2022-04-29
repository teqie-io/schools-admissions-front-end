import React from 'react'

import { FooterCard } from '../../app/pages/stages/index.jsx'

export default {
  title: 'Components/Footer Cards Stages',
  component: FooterCard,
  argTypes: {
    // type: {
    //   options: ['checkbox', 'text'],
    //   control: { type: 'radio' }
    // }
  }
}

export const Template = (args) => {
  return (
    <div className='flex w-full items-center'>
      <FooterCard {...args} />
    </div>
  )
}

Template.args = { title: 'Won', body: 'Only closed ones', type: '#27C59A' }
