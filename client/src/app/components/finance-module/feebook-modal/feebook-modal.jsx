import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { academicYear, program } from '@entities/data'
import { cancel } from '@image'
import { Select, Button, Checkbox } from '@stories'
import './feebook-modal.scss'

export default function FeeBookModal({ open, isOpen }) {
  const styles = {
    saveBtn: {
      backgroundColor: '#fff',
      color: '#202223',
      border: '1px solid #E1E3E5',
      marginRight: '0.5rem'
    },
    createBtn: { backgroundColor: '#008060' }
  }

  const [selectedAcademicYear, setSelectedAcademicYear] = useState(academicYear[0])
  const [selectedProgram, setSelectedProgram] = useState(program[0])

  const [academicOpen, setAcademicOpen] = useState(false)
  const [programOpen, setProgramOpen] = useState(false)

  const academicClose = () => {
    setAcademicOpen(!academicOpen)
  }

  const programClose = () => {
    setProgramOpen(!programOpen)
  }

  const allClose = () => {
    setAcademicOpen(false)
    setProgramOpen(false)
  }

  return (
    <div className={open ? 'feebooks-modal feebooks-modal-active' : 'feebooks-modal'}>
      <div
        className='feebooks-modal_bg'
        onClick={() => {
          isOpen()
          allClose()
        }}
      />
      <div className='feebooks-modal-card' onClick={academicOpen === true || programOpen === true ? allClose : null}>
        <div className='feebooks-modal-card-header'>
          <h2 className='text-2xl ml-6'>Create New Fee-Book</h2>
          <button
            className='mr-4'
            onClick={() => {
              isOpen()
              allClose()
            }}
          >
            <img src={cancel} alt='closed modal' />
          </button>
        </div>
        <div className='feebooks-modal-card-row'>
          <div className='feebooks-modal-card-row_label'>{selectedAcademicYear}</div>
          <div className='feebooks-modal-card-row_selects'>
            <Select
              closedSelect={academicClose}
              openSelect={academicOpen}
              title='Select Academic Year'
              titleClassName='-translate-x-3.5'
              className='ml-10 mb-6 mt-10'
              optionsArray={academicYear}
              selected={selectedAcademicYear}
              setSelected={setSelectedAcademicYear}
            />
            <Select
              closedSelect={programClose}
              openSelect={programOpen}
              title='Program'
              optionsArray={program}
              className='ml-10 mb-1'
              selected={selectedProgram}
              setSelected={setSelectedProgram}
            />
            <div className='flex items-center ml-10 mt-3.5'>
              <Checkbox customClass='checkbox-fix' />
              <span className='text-sm'>Use Previous years Fee Book</span>
            </div>
            <div className='feebooks-modal-card-row_selects_checkbox'></div>
          </div>
        </div>
        <div className='flex justify-end pt-4 pr-4'>
          <Button text='Save as Draft' customStyle={styles.saveBtn} />
          <Button text='Create' customStyle={styles.createBtn} />
        </div>
      </div>
    </div>
  )
}

FeeBookModal.propTypes = {
  open: PropTypes.bool,
  isOpen: PropTypes.func
}
