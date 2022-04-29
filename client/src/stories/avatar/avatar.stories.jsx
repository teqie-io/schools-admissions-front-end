import React from 'react'

import Avatar from './avatar.jsx'

export default {
  title: 'Sub Components/Avatar',
  component: Avatar,
  argTypes: {
    avatarSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <Avatar {...args} />
  </div>
)

Template.args = {
  img: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
  alt: 'image',
  customStyle: {},
  customClass: '',
  multi: true,
  avatarSize: 'medium',
  dataImg: [
    {
      img: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      alt: ''
    },
    {
      img: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      alt: ''
    },
    {
      img: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      alt: ''
    }
  ]
}
