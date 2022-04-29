import React from 'react'
import { IconGallery } from 'storybook-icon-gallery'

import IcCheck from './svg/IcCheck.svg'

function Icons() {
  return (
    <IconGallery>
      <IconGallery.Variants name='add'>
        <IconGallery.Variant size={24} copyValue=''>
          <img src={IcCheck} />
        </IconGallery.Variant>
      </IconGallery.Variants>
    </IconGallery>
  )
}

export default Icons
