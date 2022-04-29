import React, { useState } from 'react'
import clsx from 'clsx'
import { Fade } from 'react-reveal'
import { useParams } from 'react-router-dom'

import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import { staticsize } from '@image'
import { Upload, Input, Button } from '@stories'
import './campus-detail.scss'

export default function AddEnquiry({ burger }) {
  const styles = {
    btnWhite: {
      width: '6.563rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      backgroundColor: '#404eed',
      height: '2.563rem',
      marginTop: '1rem',
      marginbottom: '1rem'
    }
  }

  const [imgPreview, setImgPreview] = useState(false)

  const { id } = useParams()

  return (
    <div className={clsx('campus-detail pr-24', burger ? 'pl-69' : 'pl-20')}>
      <div>
        <Fade clear duration={300}>
          <NavLinks urls={dataLinks.campusDetailLinks} />
          <h1 className='namepage'>{id === 'company-edit' ? 'Edit Campus Details' : 'Create a New Campus'}</h1>
          <form action='#' method='POST' className='campus-detail-form'>
            <div className='campus-detail-form_section campus-detail-section'>
              <div className='campus-detail-section_header'>
                <h2 className='campus-detail-section_title'>1. Campus Image</h2>
                <p className='campus-detail-section_text'>Upload a campus image to make it easily recognizable.</p>
              </div>
              <div className='campus-detail-upload'>
                <img
                  className='campus-detail-upload_image'
                  src={imgPreview ? imgPreview : staticsize}
                  alt='uploaded image'
                />
                <Upload text='Upload Image' id='image-upload' accept='image/*' imageChange={setImgPreview} />
              </div>
            </div>
            <div className='campus-detail-form_section campus-detail-section'>
              <div className='campus-detail-section_header'>
                <h2 className='campus-detail-section_title'>2. Campus Details</h2>
                <p className='campus-detail-section_text'>
                  Add/ Edit campus details including name, address and other essentials.
                </p>
              </div>
              <div className='campus-detail-section_content'>
                <div className='flex'>
                  <Input
                    label='Campus Name'
                    name='campus-name'
                    value='Galileo Campus'
                    labelFix='top-2'
                    customStyle={{ width: '14.25rem', height: '2.5rem', fontSize: 14 }}
                  />
                  <Input
                    label='Campus Code'
                    name='campus-code'
                    value='AB5739CC'
                    labelFix='left-10 top-2'
                    customStyle={{ width: '14.25rem', height: '2.5rem', marginLeft: '1.75rem', fontSize: 14 }}
                  />
                </div>
                <Input
                  label='Address'
                  name='address'
                  value=''
                  labelFix='top-2'
                  customStyle={{ width: '30.25rem', height: '2.5rem', fontSize: 14 }}
                />
                <div className='flex'>
                  <Input
                    label='Country'
                    name='country'
                    value=''
                    labelFix='top-2'
                    customStyle={{ width: '14.25rem', height: '2.5rem', fontSize: 14 }}
                  />
                  <Input
                    label='City'
                    name='city'
                    value=''
                    labelFix='left-10 top-2'
                    customStyle={{ width: '14.25rem', height: '2.5rem', marginLeft: '1.75rem', fontSize: 14 }}
                  />
                </div>
                <div className='flex'>
                  <Input
                    label='State/Province'
                    name='state'
                    value=''
                    labelFix='top-2'
                    customStyle={{ width: '14.25rem', height: '2.5rem', fontSize: 14 }}
                  />
                  <Input
                    label='Zip Code'
                    name='zip-code'
                    value=''
                    labelFix='left-10 top-2'
                    customStyle={{ width: '14.25rem', height: '2.5rem', marginLeft: '1.75rem', fontSize: 14 }}
                  />
                </div>
                <Input
                  label='Phone Number'
                  name='phone'
                  value='+91 98876 73243'
                  labelFix='top-2'
                  customStyle={{ width: '30.25rem', height: '2.5rem', fontSize: 14 }}
                />
              </div>
              <div className='campus-detail-section_footer'>
                <Button text='Save' customStyle={styles.btnWhite} />
              </div>
            </div>
          </form>
        </Fade>
      </div>
    </div>
  )
}
