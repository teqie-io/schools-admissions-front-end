import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'

import { sort, icedit, plus } from '@image'
import { Button } from '@stories'

export default function AcademicYears({ onAdd, term, onModal, terms, burger }) {
  const [state, setState] = useState({
    date: 'July 2021 - May 2022',
    sort: false
  })

  const onSort = () => {
    setState({
      ...state,
      sort: !state.sort
    })
  }

  return (
    <Fade clear duration={300}>
      <div className='academ-terms-header'>
        <button onClick={onSort} className='academ-terms-header_sort'>
          <img src={sort} alt='sort' className={state.sort ? 'animate-sort_on' : 'animate-sort'} />
        </button>
        <Button text='Add Academic Year' onClick={onAdd} icon={plus} />
      </div>
      <div className='academ-terms-card'>
        <h3 className='academ-terms-card_text'>{state.date}</h3>
        {terms.map((item, key) => (
          <div
            key={key}
            className={clsx(
              'academ-terms-card_row',
              burger ? 'academ-terms-card_row_full' : 'academ-terms-card_row_min'
            )}
          >
            <div className='flex'>
              {term.map((term, key) => (
                <div key={key} className={clsx('term-box', `term-box_${key}`)}>
                  <h4 className='term-box_name'>{term.name}</h4>
                  <p className='term-box_date'>
                    {term.dateStart} - {term.dateEnd}
                  </p>
                </div>
              ))}
            </div>
            <Button
              buttonSize='small'
              onClick={onModal}
              icon={icedit}
              text='Edit'
              customStyle={{ backgroundColor: 'black' }}
            />
          </div>
        ))}
      </div>
    </Fade>
  )
}

AcademicYears.propTypes = {
  onAdd: PropTypes.func,
  term: PropTypes.array,
  onModal: PropTypes.func,
  terms: PropTypes.array,
  burger: PropTypes.bool
}
