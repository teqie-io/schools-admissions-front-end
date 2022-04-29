import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { Input, SelectGroup } from '../../../../../../stories'

export default function FamilyInformation({ fixed = true }) {
  const [imgPreview, setImgPreview] = useState(false)
  const [gender, setGender] = useState({
    male: true,
    female: false
  })

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

  const styles = {
    fullName: { position: 'relative', left: '1.25rem', width: '12.5rem' },
    gender: { height: '1.875rem', fontSize: '0.813rem' }
  }

  return (
    <div className='flex items-center'>
      <div className='information-field_family'>
        <div className='flex items-center ml-5 relative top-5'>
          <div>
            <label htmlFor='image-upload-2' className='cursor-pointer'>
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
              id='image-upload-2'
              name='image-upload-2'
              className='hidden'
              accept='image/*'
              onChange={changeImageHandler}
            />
          </div>
          <Input label='Full Name' labelFix='left-8' customStyle={styles.fullName} />
        </div>
        <div className='ml-28 mt-5'>
          <p className='text-xs font-medium text-button-disable relative' style={{ left: '0.375rem' }}>
            Gender
          </p>
          <div className='flex mt-2'>
            <button
              onClick={() => setGender({ male: true, female: false })}
              className={clsx('text-white rounded mr-3 btn', gender.male ? 'bg-main-blue' : 'bg-blue-200')}
              style={Object.assign({ width: '3.375rem' }, styles.gender)}
            >
              Male
            </button>
            <button
              onClick={() => setGender({ male: false, female: true })}
              className={clsx('text-white rounded btn', gender.female ? 'bg-main-blue' : 'bg-blue-200')}
              style={Object.assign({ width: '4.188rem' }, styles.gender)}
            >
              Female
            </button>
          </div>
        </div>
        <div className='ml-5 mt-8' style={{ width: '18rem' }}>
          <SelectGroup
            options={entryYear}
            labelFix={{ left: -5 }}
            className='mb-5'
            title='Relationship with Applicant'
          />
          <SelectGroup options={enrollmentYear} className='mb-5' title='Occupation' />
          <Input label='Mobile Number' labelFix='top-3' customStyle={{ width: '18rem', marginBottom: '1.25rem' }} />
          <Input label='Email' labelFix='top-3' customStyle={{ width: '18rem' }} />
        </div>
      </div>
      {fixed && (
        <div className='relative bottom-7 left-20 flex flex-col items-center justify-center cursor-pointer'>
          <div
            className='flex items-center justify-center add-enquiry-upload_image text-main-blue text-xl'
            style={{ background: '#E5EFFD' }}
          >
            +
          </div>
          <p className='text-xs mt-2 text-button-disable'>Add Family Member</p>
        </div>
      )}
    </div>
  )
}

const entryYear = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' }
]

const enrollmentYear = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' }
]

FamilyInformation.propTypes = {
  /** @param storybook Position for storybook */
  fixed: PropTypes.bool,
  /**  @param Type An array of objects.
   * @param Object Keys for object - fullName: string, gender: string, image: string, relationship: array of objects, occupation: array of objects, tel: string, email: string
   * @param relationship Keys for object - value: string, label:string
   * @param occupation Keys for object - value: string, label: string
   * @param gender Key variations - Male, Female
   * @param Example [{
   * fullName: '',
   * gender: 'Male',
   * image: '',
   * relationship: [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' }
],
occupation: [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' }
],
tel: '',
email: ''
   * }]
   **/
  data: PropTypes.array
}
