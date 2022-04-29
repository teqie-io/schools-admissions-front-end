import React from 'react'

import { mainavatar } from '../../app/static/image'

import NotificationBadge from './badge.jsx'

export default {
  title: 'Sub Components/NotificationBadge',
  component: NotificationBadge,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <NotificationBadge {...args} />
  </div>
)

Template.args = {
  firstText: 'Your order is placed',
  secondText: 'waiting for shipping',
  image: mainavatar,
  time: '1 days'
}
