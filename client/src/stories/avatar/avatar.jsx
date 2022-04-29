import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import './avatar.scss'

export default function Avatar({ img, alt, customStyle, customClass, avatarSize = 'medium', multi = false, dataImg }) {
  return multi ? (
    <div className='flex -space-x-3 overflow-hidden'>
      {dataImg.map((item, key) => (
        <img
          key={key}
          className={clsx(
            'inline-block rounded-full ring-0.5 ring-white',
            `avatar-component-${avatarSize}`,
            customClass
          )}
          src={item.img}
          alt={item.alt}
          style={customStyle}
        />
      ))}
    </div>
  ) : (
    <img
      src={img}
      alt={alt}
      style={customStyle}
      className={clsx('avatar-component', `avatar-component-${avatarSize}`, customClass)}
    />
  )
}

Avatar.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  customStyle: PropTypes.object,
  customClass: PropTypes.string,
  avatarSize: PropTypes.string,
  multi: PropTypes.bool,
  dataImg: PropTypes.array
}
