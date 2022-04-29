import React, { useState } from 'react'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import { dataTabs, dataLinks } from '@entities/routes'
import { NavTabs, NavLinks } from '@components/header'
import { AcademicModal, AcademicYears } from '@components/campus-module'
import './academic-terms.scss'

export default function AcademicTerms({ burger }) {
  const [state, setState] = useState({
    onEdit: true,
    terms: [0]
  })

  const [term, setTerm] = useState([
    { name: 'Term 1', dateStart: 'Jul 13, 2021', dateEnd: 'Sep 13, 2021', lock: true },
    { name: 'Term 2', dateStart: 'Jul 13, 2021', dateEnd: 'Sep 13, 2021', lock: false }
  ])

  const onAddTerm = () => {
    term.length < 3 &&
      setTerm([
        ...term,
        { name: `Term ${term.length + 1}`, dateStart: 'Jul 25, 2021', dateEnd: 'Oct 15, 2021', lock: false }
      ])
  }

  const onAdd = () => {
    setState({
      ...state,
      terms: [...state.terms, state.terms + 1]
    })
  }

  const onModal = () => {
    setState({
      ...state,
      onEdit: !state.onEdit
    })
  }

  return (
    <div className={clsx('academ-terms', burger ? 'ml-80' : 'ml-40')}>
      <Fade clear duration={300}>
        <NavLinks urls={dataLinks.academLinks} />
        <h1 className='namepage'>Academic Years</h1>
        <NavTabs tabs={dataTabs.academTabs} />
      </Fade>
      {state.onEdit ? (
        <AcademicYears onAdd={onAdd} term={term} onModal={onModal} terms={state.terms} burger={burger} />
      ) : (
        <AcademicModal onModal={onModal} onAddTerm={onAddTerm} term={term} burger={burger} />
      )}
    </div>
  )
}

AcademicTerms.propTypes = {
  burger: PropTypes.bool
}
