import React, { useState } from 'react'
import Select from 'react-select'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { selectStyleCardApplication } from '../../app/entities/select-style'
import { Button, Upload } from '../'
import { illustrations, passport } from '../../app/static/image'

const ProofCard = ({
  title,
  num,
  nameCard,
  approved,
  data = [
    { title: 'Issuing Country', other: 'Brazil' },
    { title: 'Passport Number', other: 'AJHKJDGKJGD' },
    { title: 'Expiry Date', other: '01/11/2025' }
  ]
}) => {
  const history = useHistory()

  const styles = {
    box: {
      paddingLeft: '0.625rem',
      paddingRight: '0.625rem',
      paddingTop: '0.125rem',
      paddingBottom: '0.125rem'
    },
    approved: {
      background: `rgba(84, 214, 44, 0.16)`,
      color: '#229A16'
    },
    send: {
      background: `#FFF2E2`,
      color: '#F2C94C'
    },
    reject: {
      background: `#FFF2E2`,
      color: '#EB5757'
    },
    upload: {
      background: `#F1F8F5`,
      color: '#4F4F4F'
    },
    select: selectStyleCardApplication
  }

  const options = [
    { value: 'Select Document', label: 'Select Document' },
    { value: 'Passport', label: 'Passport' },
    { value: 'Certificate', label: 'Certificate' }
  ]

  const [imgPreview, setImgPreview] = useState(false)

  return (
    <div className='mb-5'>
      {title && <p className='text-xs mb-2'>{`${num + 1}. ${title}`}</p>}
      <div className='border rounded-lg border-main-gray' style={{ width: 540, height: 311 }}>
        <div className='flex border-b border-main-gray justify-between items-center h-16'>
          {nameCard ? (
            <h2 className='text-2xl ml-5 font-medium'>{nameCard}</h2>
          ) : (
            <Select defaultValue={options[0]} styles={styles.select} options={options} />
          )}
          <div
            className='rounded-lg flex items-center justify-center mr-12 text-10px'
            style={Object.assign(
              approved === 'approved'
                ? styles.approved
                : approved === 'Send For Approval'
                ? styles.send
                : approved === 'Upload'
                ? styles.upload
                : styles.reject,
              styles.box
            )}
          >
            {approved}
          </div>
        </div>
        {approved !== 'Upload' ? (
          <div className='flex justify-center mt-5'>
            <img className='mr-28' style={{ width: '14.125rem', height: '10.063rem' }} src={passport} alt='' />
            <div>
              {data.map((item, key) => (
                <React.Fragment key={key}>
                  <p className='text-xs mb-1.5 mt-3'>{item.title}</p>
                  <p className='text-xs' style={{ color: '#8C9094' }}>
                    {item.other}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex justify-center mt-5'>
            <img
              style={{ width: '13.563rem', height: '10rem' }}
              src={imgPreview ? imgPreview : illustrations}
              alt='uploaded image'
            />
          </div>
        )}
        <div
          className={clsx('flex items-center mt-3.5', approved === 'Upload' ? 'justify-center' : 'justify-end mr-12')}
        >
          {approved === 'Upload' ? (
            <Upload
              customStyle={{ borderRadius: '0.25rem' }}
              text='Upload Image'
              id='image-upload'
              accept='image/*'
              imageChange={setImgPreview}
            />
          ) : (
            <Button
              text='Delete'
              buttonStyle='outlined'
              customStyle={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
            />
          )}
          <Button
            text={approved === 'Upload' ? 'Save' : 'Edit'}
            customStyle={{ paddingLeft: '3.438rem', paddingRight: '3.438rem', marginLeft: '1.25rem' }}
            onClick={approved === 'Upload' ? () => history.push('/application/fee-payment') : () => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default ProofCard

ProofCard.propTypes = {
  title: PropTypes.string,
  num: PropTypes.number,
  nameCard: PropTypes.string,
  approved: PropTypes.string
}
