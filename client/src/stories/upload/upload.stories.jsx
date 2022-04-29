import React, { useState } from 'react'

import Upload from './upload.jsx'

export default {
  title: 'Sub Components/Upload',
  component: Upload,
  argTypes: {
    variant: {
      options: ['default', 'outlined', 'avatar'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  const [image, setImage] = useState(null)

  return (
    <div className='information-field'>
      <Upload {...args} imageChange={setImage} image={image} />
      {args.variant !== 'avatar' && <img className='w-20 h-20 mt-5' src={image} />}
    </div>
  )
}

Template.args = {
  text: 'upload file',
  id: 'upload-file',
  accept: 'image/*',
  variant: 'default'
}
