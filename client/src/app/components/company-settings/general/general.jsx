import React, { useState } from 'react'

import { staticsize } from '@image'
import { Input } from '@stories'

export default function General() {
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

  return (
    <React.Fragment>
      <div className='flex items-center justify-between w-full mb-12 border-b'>
        <div>
          <h1 className='mb-10 font-bold text-base'>Company Name</h1>
          <Input label='Name' value='Nalanda Group of Institutions' customStyle={{ width: '30.25rem', fontSize: 14 }} />
          <div className='mt-4 mb-8'>
            <button
              className='pl-4 pr-4 pt-1 pb-1 none-after rounded-lg mr-2'
              style={{ background: '#F1F2F3', color: '#DBDDDF' }}
            >
              Save
            </button>
            <button className='pl-4 pr-4 pt-1 pb-1 none-after'>Cancel</button>
          </div>
        </div>
        <div>
          <h1 className='mb-10 font-bold text-base'>Company Name</h1>
          <div className='flex items-center' style={{ width: '30.25rem', height: '3.125rem' }}>
            <img
              src={imgPreview ? imgPreview : staticsize}
              className='ml-1 mr-6 w-10 h-10 rounded-full'
              alt='uploaded image'
            />
            <div>
              <input
                className='hidden'
                type='file'
                id='upload-file'
                name='upload-file'
                accept='image/*'
                onChange={changeImageHandler}
              />
              <label className='cursor-pointer pr-4 pb-2 pl-4 pt-2 rounded-lg border' htmlFor='upload-file'>
                Upload Logo
              </label>
            </div>
          </div>
          <div className='mt-4 mb-8'>
            <button
              className='pl-4 pr-4 pt-1 pb-1 none-after rounded-lg mr-2'
              style={{ background: '#F1F2F3', color: '#DBDDDF' }}
            >
              Save
            </button>
            <button className='pl-4 pr-4 pt-1 pb-1 none-after'>Cancel</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className='mb-10 font-bold text-base'>Address Details</h1>
        <Input
          label='Address Line 1'
          value='High Tension Road, Beside hanuman temple'
          customStyle={{ width: '30.25rem', fontSize: 14 }}
          labelFix='-translate-x-2.5'
        />
        <Input
          label='Address Line 2'
          value='Kala Nagar Road'
          labelFix='-translate-x-2.5'
          customStyle={{ width: '30.25rem', fontSize: 14, marginBottom: '1.875rem', marginTop: '1.875rem' }}
        />
        <div className='flex items-center' style={{ marginBottom: '1.875rem' }}>
          <Input
            label='City'
            value='Vijaywada'
            customStyle={{
              width: '18.5rem',
              fontSize: 14,
              marginRight: '1.5rem'
            }}
          />
          <Input
            label='State'
            value='Andhra Pradesh'
            customStyle={{ width: '18.5rem', fontSize: 14, marginRight: '1.5rem' }}
          />
          <Input
            label='Country'
            labelFix='-translate-x-1'
            value='India'
            customStyle={{ width: '18.5rem', fontSize: 14 }}
          />
        </div>
        <div className='flex items-center'>
          <Input
            label='Contact Number 1'
            labelFix='-translate-x-3'
            value='+91-7899321232'
            customStyle={{
              width: '18.5rem',
              fontSize: 14,
              marginRight: '1.5rem'
            }}
          />
          <Input
            label='Contact Number 2'
            value='-'
            labelFix='-translate-x-3'
            customStyle={{ width: '18.5rem', fontSize: 14, marginRight: '1.5rem' }}
          />
          <Input label='Email' value='contact@nalanda.edu.in' customStyle={{ width: '18.5rem', fontSize: 14 }} />
        </div>
        <div className='mt-4 mb-8'>
          <button
            className='pl-4 pr-4 pt-1 pb-1 none-after rounded-lg mr-2'
            style={{ background: '#F1F2F3', color: '#DBDDDF' }}
          >
            Save
          </button>
          <button className='pl-4 pr-4 pt-1 pb-1 none-after'>Cancel</button>
        </div>
      </div>
    </React.Fragment>
  )
}
