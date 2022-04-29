import React from 'react'

import FeebokEditCard from './feebokedit.jsx'

export default {
  title: 'Components/FeebokEditCard',
  component: FeebokEditCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field' style={{ width: 850 }}>
    <FeebokEditCard {...args} />
  </div>
)

Template.args = {
  data: {
    globalFee: '15000',
    admissionFee: '10000',
    bookFee: '2000',
    types: ['Monthly', 'Quaterly', 'Trimester', 'Half Yearly', 'Term Dates', 'Custom'],
    customFee: [
      { term: 1, value: '10000', date: 'Feb 20, 2022' },
      { term: 2, value: '10000', date: 'Feb 20, 2022' },
      { term: 3, value: '10000', date: 'Feb 20, 2022' },
      { term: 4, value: '10000', date: 'Feb 20, 2022' }
    ]
  }
}
