import React, { useState } from 'react'
import PropTypes from 'prop-types'

import upload from './upload.svg'

export default function DomainCard({ title, body, id }) {
  const [image, imageChange] = useState()

  const changeImageHandler = (e) => {
    let selected = e.target.files
    if (selected && selected[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        onChangeImage ? onChangeImage(e.target.result) : imageChange(e.target.result)
      }
      reader.readAsDataURL(selected[0])
    }
  }

  return (
    <div className='flex items-center mt-14' style={{ width: '40.625rem' }}>
      <div className='border-dashed border-2 rounded-lg mr-8' style={{ borderColor: '#449DA7' }}>
        <input type='file' className='hidden' id={id} name={id} accept='image/*' onChange={changeImageHandler} />
        <label
          className={`cursor-pointer flex flex-col rounded-lg items-center justify-center text-sm ${
            image ? '' : ' pt-12 pb-12 pl-8 pr-8 '
          } hover:bg-ligther-gray`}
          style={{ color: '#449DA7', transition: '0.2s easy-in-out' }}
          htmlFor={id}
        >
          {image ? (
            <img src={image} alt='image' className='rounded-lg' style={{ width: '8.963rem', height: '9.25rem' }} />
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <img src={upload} className='w-8 h-8' alt='upload' />
              <p className='font-normal text-xs'>Upload Logo</p>
            </div>
          )}
        </label>
      </div>
      <div style={{ width: '29.25rem' }}>
        <p className='text-base font-bold relative left-2'>{title}</p>
        <p className='text-sm font-medium'>{body}</p>
      </div>
    </div>
  )
}

DomainCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  onChangeImage: PropTypes.func,
  image: PropTypes.string
}
