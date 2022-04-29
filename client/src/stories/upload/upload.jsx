import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { upload } from '../../app/static/image'
import './upload.scss'

const Upload = ({
  text,
  inputDisabled,
  customStyle,
  onClick,
  id,
  accept,
  imageChange,
  customStyleBtn,
  variant = 'default',
  avatarStyle,
  avatarClassName,
  icon
}) => {
  const [imgPreview, setImgPreview] = useState()

  const changeImageHandler = (e) => {
    let selected = e.target.files
    if (selected && selected[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        variant !== 'avatar' && imageChange(e.target.result)
        variant === 'avatar' && setImgPreview(e.target.result)
      }
      reader.readAsDataURL(selected[0])
    }
  }

  return (
    <React.Fragment>
      {variant === 'default' && (
        <div className='upload-btn' style={customStyleBtn}>
          <input type='file' id={id} name={id} accept={accept} disabled={inputDisabled} onChange={changeImageHandler} />
          <label style={customStyle} htmlFor={id} onClick={onClick}>
            <img src={icon ? icon : upload} alt={upload} />
            {text}
          </label>
        </div>
      )}
      {variant === 'outlined' && (
        <div>
          <input
            className='hidden'
            type='file'
            id={id}
            name={id}
            accept={accept}
            disabled={inputDisabled}
            onChange={changeImageHandler}
          />
          <label className='cursor-pointer pr-4 pb-2 pl-4 pt-2 rounded-lg border' htmlFor='upload-file'>
            {text}
          </label>
        </div>
      )}
      {variant === 'avatar' && (
        <div>
          <label htmlFor='image-upload' className='cursor-pointer'>
            {imgPreview && (
              <img
                className={clsx('add-enquiry-upload_image rounded-full w-20 h-20', avatarClassName)}
                style={avatarStyle}
                src={imgPreview}
                alt='uploaded image'
              />
            )}
            {!imgPreview && (
              <div
                className={clsx(
                  'flex items-center justify-center add-enquiry-upload_image text-main-blue text-xl rounded-full w-20 h-20',
                  avatarClassName
                )}
                style={avatarStyle ? avatarStyle : { background: '#E5EFFD' }}
              >
                +
              </div>
            )}
          </label>
          <input
            type='file'
            id='image-upload'
            name='image-upload'
            className='hidden'
            accept='image/*'
            onChange={changeImageHandler}
          />
        </div>
      )}
    </React.Fragment>
  )
}

Upload.propTypes = {
  text: PropTypes.string,
  inputDisabled: PropTypes.bool,
  customStyle: PropTypes.object,
  icon: PropTypes.string,
  accept: PropTypes.string,
  onClick: PropTypes.func,
  avatarStyle: PropTypes.object,
  avatarClassName: PropTypes.string,
  variant: PropTypes.string,
  imageChange: PropTypes.func,
  icon: PropTypes.string
}

Upload.defaultProps = {
  text: 'upload file',
  id: 'upload-file',
  accept: 'image/*',
  inputDisabled: false,
  customStyle: {}
}

export default Upload
