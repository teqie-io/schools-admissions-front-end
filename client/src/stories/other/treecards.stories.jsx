import React, { useState } from 'react'

import { Cards } from '../../app/pages/stages/index.jsx'

export default {
  title: 'Components/TreeCards',
  component: Cards,
  argTypes: {
    // type: {
    //   options: ['checkbox', 'text'],
    //   control: { type: 'radio' }
    // }
  }
}

export const Template = (args) => {
  const [cards, setCards] = useState(data && data)

  return (
    <div className='information-field'>
      {cards.map((item, key) => (
        <div className='flex' key={key}>
          <Cards item={item} setCards={setCards} num={key} cards={cards} />
        </div>
      ))}
    </div>
  )
}

Template.args = {}

const data = [
  {
    left: { align: 'left', text: 'Data Collection', percent: 1 },
    middle: { align: 'middle', text: 'Refferal', percent: 2 },
    right: { align: 'right', text: 'Refferal', percent: 1 }
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Phone call', percent: 5 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Home Visit', percent: 5 },
    right: { align: 'right', text: 'Direct Enquiry', percent: 20 }
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Campus Visit', percent: 15 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Application', percent: 60 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Cadmission Test', percent: 80 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Principal Meeting', percent: 90 },
    right: null
  }
]
