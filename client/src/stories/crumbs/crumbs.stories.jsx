import React from 'react'

import Crumbs from './crumbs.jsx'

export default {
  title: 'Sub Components/Crumbs',
  component: Crumbs,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <Crumbs {...args} />
  </div>
)

Template.args = {
  urls: [
    { name: 'Home', path: '/' },
    { name: 'Campus', path: '/campus' },
    { name: 'Campus List', path: '/campus/campus-list', active: true }
  ]
}
