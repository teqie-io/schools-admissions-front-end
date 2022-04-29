import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input } from '../../../../../../stories'

export default function ApplicationInformation() {
  const [imgPreview, setImgPreview] = useState(false)

  const changeImageHandler = (e) => {
    let selected = e.target.files
    if (selected && selected[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        setImgPreview(e.target.result)
      }
      reader.readAsDataURL(selected[0])
    }
  }

  const styles = { bottom: { marginBottom: '1.875rem' } }

  return (
    <div className='information-field_application'>
      <div className='h-24 flex items-center bg-gray-100'>
        <div className='ml-10'>
          <label htmlFor='image-upload' className='cursor-pointer'>
            {imgPreview && <img className='add-enquiry-upload_image' src={imgPreview} alt='uploaded image' />}
            {!imgPreview && (
              <div
                className='flex items-center justify-center add-enquiry-upload_image text-main-blue text-xl'
                style={{ background: '#E5EFFD' }}
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
        <p className='text-2xl font-bold text-main-black ml-5'>Dhruv Malpuri</p>
      </div>
      <div className='grid grid-cols-2 1620px:grid-cols-3 mt-10 pl-10'>
        <Input label='First Name' customStyle={styles.bottom} />
        <Input label='Middle Name' labelFix='-translate-x-2' customStyle={styles.bottom} />
        <Input label='Last Name' labelFix='-translate-x-1' customStyle={styles.bottom} />
        <Input label='Date of Birth' labelFix='-translate-x-1' customStyle={styles.bottom} />
        <Input label='Antinicapted Grade of Entry' labelFix='-translate-x-5' customStyle={styles.bottom} />
        <Input label='Gender' customStyle={styles.bottom} />
        <Input label='Enrollment Year' labelFix='-translate-x-2' customStyle={styles.bottom} />
        <Input label='Campus' labelFix='-translate-x-0.5' customStyle={styles.bottom} />
      </div>
    </div>
  )
}

ApplicationInformation.propTypes = {
  /**  @param Type An object.
   * @param Object Keys for objects - name: string, image: string, firstName: '', lastName: string, middleName: string, date: string, grade: string, gender: string, enrollment: string, campus: string
   * @param Example {
   * name: 'Dhruv Malpuri',
   * image: '',
   * firstName: '',
   * middleName: '',
   * lastName: '',
   * date: '',
   * grade: '',
   * gender: '',
   * enrollment: '',
   * campus: ''
   * }
   **/
  data: PropTypes.object
}
