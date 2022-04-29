import React, { useState } from 'react'
import clsx from 'clsx'
import { Fade } from 'react-reveal'

import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import { staticsize } from '@image'
import ApplicationPanel from '@components/application-panel/application-panel.jsx'
import { Upload, SelectGroup, Input, Button } from '@stories'
import './add-enquiry.scss'

export default function AddEnquiry({ burger }) {
  const styles = {
    btn: {
      width: '48%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnWhite: {
      width: '48%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#404eed',
      backgroundColor: '#fff',
      border: '1px solid #404eed'
    }
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

  const [imgPreview, setImgPreview] = useState(false)

  return (
    <div className={clsx('add-enquiry pr-24', burger ? 'pl-69' : 'pl-20')}>
      <div>
        <Fade clear duration={300}>
          <NavLinks urls={dataLinks.enquiryLinks} />
          <h1 className='namepage'>Add a New Enquiry</h1>
          <form action='#' method='POST' className='add-enquiry-form'>
            <div className='add-enquiry-form_section add-enquiry-section'>
              <div className='add-enquiry-section_header'>
                <h2 className='add-enquiry-section_title'>1. Enquiry Photo</h2>
                <p className='add-enquiry-section_text'>Upload an image to make it easily recognizable.</p>
              </div>
              <div className='add-enquiry-upload'>
                <img
                  className='add-enquiry-upload_image'
                  src={imgPreview ? imgPreview : staticsize}
                  alt='uploaded image'
                />
                <Upload text='Upload Image' id='image-upload' accept='image/*' imageChange={setImgPreview} />
              </div>
            </div>
            <div className='add-enquiry-form_section add-enquiry-section'>
              <div className='add-enquiry-section_header'>
                <h2 className='add-enquiry-section_title'>2. Enquiry Details</h2>
                <p className='add-enquiry-section_text'>Enter applicant details below.</p>
              </div>
              <div className='add-enquiry-section_content'>
                <Input
                  customClass='add-enquiry_input add-enquiry_input--small'
                  label='First Name'
                  name='first-name'
                  value=''
                  labelFix='-translate-x-1'
                />
                <Input
                  customClass='add-enquiry_input add-enquiry_input--small'
                  label='Last Name'
                  name='last-name'
                  value=''
                  labelFix='-translate-x-1'
                />
                <Input customClass='add-enquiry_input' label='Campus' name='campus' value='' />
                <SelectGroup options={entryYear} title='Anticipated Grade of Entry' />
                <SelectGroup options={enrollmentYear} title='Enrollment Year' />
                <Input
                  customClass='add-enquiry_input'
                  labelFix='-translate-x-2'
                  label='Mobile Phone'
                  name='phone'
                  type='tel'
                  value=''
                />
                <Input customClass='add-enquiry_input' label='Email' name='phone' type='email' value='' />
              </div>
              <div className='add-enquiry-section_footer'>
                <Button text='Cancel' customStyle={styles.btnWhite} />
                <Button text='Add' customStyle={styles.btn} />
              </div>
            </div>
          </form>
        </Fade>
        <ApplicationPanel />
      </div>
    </div>
  )
}
