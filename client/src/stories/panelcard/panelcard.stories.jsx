import React from 'react'

import PanelCard from './panelcard.jsx'
import { mainavatar } from '../../app/static/image/'

export default {
  title: 'Sub Components/PanelCard',
  component: PanelCard,
  argTypes: {}
}

export const Template = (args) => {
  return (
    <div className='information-field'>
      <PanelCard {...args} />
    </div>
  )
}

Template.args = {
  meetPeople: ' Dhruv Malpuri’s Parent',
  imgPeople: mainavatar,
  meetDate: 'Feb 10, 2021 at 12:15 PM GMT +5:30'
}
