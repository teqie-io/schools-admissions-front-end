import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'

import { AcademicTable } from '@components/campus-module'
import { plus } from '@image'
import { Button } from '@stories'
import './academic-modal.scss'

export default function AcademicModal({ onModal, onAddTerm, term, burger }) {
  const styles = {
    termButton: { position: 'absolute', right: 0, width: 160 },
    saveButton: { marginRight: 20, paddingLeft: 20, paddingRight: 20 },
    cancelButton: { color: 'red', marginLeft: 5 }
  }

  return (
    <div className={clsx('academ-terms-modal', burger ? 'academ-terms-modal_full' : 'academ-terms-modal_min')}>
      <Fade clear duration={300}>
        <div className='flex'>
          <h1 className='academ-terms-modal_name pl-0'>July 2021 - May 2022</h1>
          <Button text='Add New Term' customStyle={styles.termButton} onClick={onAddTerm} icon={plus} />
        </div>
        <AcademicTable term={term} burger={burger} />
        <div className='academ-terms-modal-buttons'>
          <Button buttonSize='medium' customStyle={styles.saveButton} onClick={onModal} text='Save' /> or
          <Button
            buttonSize='medium'
            buttonStyle='text'
            onClick={onModal}
            customStyle={styles.cancelButton}
            text='Cancel'
          />
        </div>
      </Fade>
    </div>
  )
}

AcademicModal.propTypes = {
  onModal: PropTypes.func,
  onAddTerm: PropTypes.func,
  term: PropTypes.array,
  burger: PropTypes.bool
}
