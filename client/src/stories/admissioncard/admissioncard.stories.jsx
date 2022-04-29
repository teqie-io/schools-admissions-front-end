import React from 'react'

import AdmissionCard from './admissioncard.jsx'
import { mainavatar } from '../../app/static/image/index.jsx'

export default {
  title: 'Components/AdmissionCard',
  component: AdmissionCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <AdmissionCard {...args} />
  </div>
)

Template.args = {
  data: {
    title: 'Applications',
    levels: [
      {
        title: 'Level 1',
        multiple: false,
        users: [
          {
            label: 'Karthik',
            image: mainavatar,
            deleteChip: true,
            customStyle: { background: 'red' },
            desciption: null
          },
          {
            label: 'Anushman',
            image: mainavatar,
            deleteChip: true,
            customStyle: { background: 'blue' },
            desciption: null
          },
          { label: 'Jack', image: mainavatar, deleteChip: true, customStyle: { background: 'green' }, desciption: null }
        ]
      },
      {
        title: 'Level 2',
        multiple: true,
        users: [
          {
            label: 'Karthik',
            image: mainavatar,
            deleteChip: true,
            customStyle: { background: 'red' },
            desciption: null
          },
          {
            label: 'Anushman',
            image: mainavatar,
            deleteChip: true,
            customStyle: { background: 'blue' },
            desciption: null
          },
          { label: 'Jack', image: mainavatar, deleteChip: true, customStyle: { background: 'green' }, desciption: null }
        ]
      }
    ]
  }
}
