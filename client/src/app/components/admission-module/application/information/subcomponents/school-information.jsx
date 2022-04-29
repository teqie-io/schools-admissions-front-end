import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Input } from '../../../../../../stories'

const theme = createTheme({
  palette: {
    primary: { main: '#404EED' },
    text: { secondary: '#919eab', disabled: '#919eab' }
  },
  shape: { borderRadius: '1rem', borderColor: 'rgba(229, 231, 235, 1)' }
})

export default function SchoolInformation() {
  const [imgPreview, setImgPreview] = useState(false)
  const [value, setValue] = useState(new Date())
  const [value2, setValue2] = useState(new Date())
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
    <div className='flex items-center'>
      <div className='information-field_family'>
        <div className='flex items-center ml-5 relative top-5'>
          <div>
            <label htmlFor='image-upload-3' className='cursor-pointer'>
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
              id='image-upload-3'
              name='image-upload-3'
              className='hidden'
              accept='image/*'
              onChange={changeImageHandler}
            />
          </div>
          <Input
            label='Full Name'
            labelFix='left-8 top-2'
            customStyle={{ marginLeft: '1.25rem', width: '12.5rem', height: '2.5rem' }}
          />
        </div>
        <div className='ml-4 mt-10' style={{ width: 288 }}>
          <Input
            label='Address'
            labelFix='top-2'
            customStyle={{ padding: '0.5rem 0.5rem', width: '18rem', marginBottom: '1.25rem', height: '2.5rem' }}
          />
          <div className='flex flex-col items-center justify-between mb-6' style={{ height: '6.25rem' }}>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Start Date'
                  className='datepickerCustom'
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue)
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: '18rem', color: 'text.secondary' }} size='small' {...params} />
                  )}
                />
                <DatePicker
                  label='End Date'
                  className='datepickerCustom'
                  value={value2}
                  onChange={(newValue) => {
                    setValue2(newValue)
                  }}
                  renderInput={(params) => <TextField sx={{ width: '18rem' }} size='small' {...params} />}
                />
              </LocalizationProvider>
            </ThemeProvider>
          </div>
          <Input
            label='Mobile Number'
            labelFix='top-2'
            customStyle={{ padding: '0.5rem', width: '18rem', marginBottom: '1.25rem', height: '2.5rem' }}
          />
          <Input
            label='Website or Google link'
            labelFix='top-2'
            customStyle={{ padding: '0.5rem', width: '18rem', height: '2.5rem' }}
          />
        </div>
      </div>
      <div className='relative bottom-7 left-20 flex flex-col items-center justify-center cursor-pointer'>
        <div
          className='flex items-center justify-center add-enquiry-upload_image text-main-blue text-xl'
          style={{ background: '#E5EFFD' }}
        >
          +
        </div>
        <p className='text-xs mt-2 text-button-disable'>Add School History</p>
      </div>
    </div>
  )
}
