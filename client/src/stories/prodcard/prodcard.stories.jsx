import React from 'react'

import ProdCard from './prodcard.jsx'

export default {
  title: 'Sub Components/ProdCard',
  component: ProdCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <ProdCard {...args} />
  </div>
)

Template.args = {
  firstHeader: 'First Title',
  secondHeader: 'Second Title',
  firstName: 'Description',
  secondName: 'Description',
  modal: true,
  opinio: 3,
  access: false,
  crumbs: false
}
