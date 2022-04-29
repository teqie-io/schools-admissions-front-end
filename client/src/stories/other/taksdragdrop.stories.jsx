import React from 'react'

import DragDrop from '../../app/components/tasks/drag-drop/drag-drop.jsx'

export default {
  title: 'Components/TaksDragDrop',
  component: DragDrop,
  argTypes: {}
}

export const Template = (args) => {
  return (
    <div className=''>
      <DragDrop />
    </div>
  )
}

Template.args = {}
