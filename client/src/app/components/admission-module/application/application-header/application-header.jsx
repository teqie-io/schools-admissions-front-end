import React from 'react'
import PropTypes from 'prop-types'

import { Chip, Button } from '../../../../../stories'
import { chipData } from '../../../../entities/data'
import { mainavatar, ellipsis } from '../../../../static/image'
import './application-header.scss'

export default function ApplicationHeader() {
  const styles = {
    button: {
      paddingLeft: '0.625rem',
      paddingRight: '0.625rem',
      marginTop: '0.313rem',
      fontSize: '0.813rem'
    }
  }

  return (
    <div className='application-header'>
      <div className='application-header-profile'>
        <div className='flex'>
          <img className='w-8 h-8 mr-2' src={mainavatar} alt='' />
          <div>
            <h6 className='text-sm'>Meena Atluri</h6>
            <p className='text-micro text-second-gray'>id # 0011223344</p>
          </div>
        </div>
        <div className='flex'>
          <p className='rounded-profile rounded-profile_main'>New</p>
          <p className='rounded-profile rounded-profile_second'>PY4</p>
          <p className='rounded-profile rounded-profile_second w-18'>2021-22</p>
        </div>
      </div>
      <div className='2xl:border-r border-l border-main-gray'>
        <div className='application-header-family top-1'>
          <p className='inline-block mr-7 relative bottom-1'>Family</p>
          {chipData.map((item, key) => (
            <div key={key} className='inline-block'>
              <Chip
                styleChip={item.styleChip}
                label={item.label}
                chipAvatarStyle={{ width: 18, height: 18 }}
                image={item.image}
                customStyle={item.style}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='application-header-referal'>
        <div className='flex mt-2'>
          <p className='text-sm text-second-gray mr-5'>Referal</p>
          <Chip
            styleChip={chipData[1].styleChip}
            label={chipData[1].label}
            chipAvatarStyle={{ width: 18, height: 18 }}
            image={chipData[1].image}
            customStyle={chipData[1].style}
          />
        </div>
        <div className='flex items-center'>
          <p className='text-sm text-second-gray mr-5 relative top-1'>School</p>
          <div className='flex items-center school-card mt-2'>
            <img className='w-6 h-6 mr-2 ml-2' src={mainavatar} alt='' />
            <div className=''>
              <h2 className='text-10px font-semibold leading-3'>Delhi Public School</h2>
              <p className='text-third-gray text-10px leading-3'>Vijaywada, AP</p>
            </div>
          </div>
        </div>
      </div>
      <div className='application-header-type'>
        <p className='text-sm text-second-gray mt-2.5'>
          Type <span className='text-main-black'>Phone Enquiry</span>
        </p>
        <Button text='Next Stage' buttonStyle='outlined' buttonSize='small' customStyle={styles.button} />
        <img src={ellipsis} className='absolute top-9 right-3 w-6 h-5' alt='' />
      </div>
    </div>
  )
}

ApplicationHeader.propTypes = {
  /**  @param Type An Object.
   * @param Object Keys for object - name: string, id: string, enquirie: object, referal: string, school: object, family: array of objects, type: string, link: string
   * @param enquirie Keys for object - type: string, py: string, date: string
   * @param school Keys for object - name: string, location: string
   * @param family Keys for object - label: string, style: string, image: string
   * @param style Key variations - primary, secondary 
   * @param Example {
   * name: 'Meena Atluri',
   * id: '0011223344',
   * enquirie: {
   *   type: 'New',
   *   py: 'PY-4',
   *   date: '2021-22'
   * },
   * referal: 'Ramesh Kodali'
   * school: {
   *   name: 'Delhi Public School',
   *   location: 'Vijaywada, A'
   * },
   * family: [
      { label: 'Dharma Theja', style: 'primary', image: 'https://localhost:8080/...' },
      {
        label: 'Ramesh Kodali',
        styleChip: 'outlined',
        image: 'https://localhost:8080/...',
        style: 'secondary'
      },
      { label: 'Gopal Kodali ', style: 'primary', image: 'https://localhost:8080/...' },
      {
        label: 'Radhika Kodali'
        image: 'https://localhost:8080/...',
        style: 'secondary'
      },
      {
        label: 'Radhika Kodali'
        image: 'https://localhost:8080/...',
        style: 'secondary'
      },
      { label: 'Gopal Kodali ', style: 'primary', image: 'https://localhost:8080/...' }
      ],
      type: 'Phone Enquiry',
      link: ''
   * }
   **/
  data: PropTypes.array
}
