import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { iconbase } from '../../app/static/image'
import './prodcard.scss'

const ProdCard = ({ firstHeader, secondHeader, firstName, secondName, modal, opinio, access, crumbs }) => {
  return (
    <div className={clsx('prog-card', !access && 'prog-card_shadow')} style={access && opinio < 1 ? { bottom: 5 } : {}}>
      <div className='prog-card-row'>
        <div className='prog-card-row_text'>
          {firstHeader && <h5>{firstHeader}</h5>}
          {firstName && <p>{firstName}</p>}
        </div>
        {modal && <img className='prog-card-row_optn' src={iconbase} alt='options' />}
      </div>
      <div className='prog-card-row'>
        <div className='prog-card-row_text'>
          {secondHeader && <h5>{secondHeader}</h5>}
          {secondName && !access && <p>{secondName}</p>}
          {access ? (
            opinio > 0 && opinio < 5 ? (
              <div className='flex'>
                <div className={clsx('prog-card-row_opinion', `prog-card-row_opinion_${opinio}`)} />
                <div
                  className={clsx(
                    'prog-card-row_opinion',
                    opinio > 1 ? `prog-card-row_opinion_${opinio}` : `prog-card-row_opinion_none`
                  )}
                />
                <div
                  className={clsx(
                    'prog-card-row_opinion',
                    opinio > 2 ? `prog-card-row_opinion_${opinio}` : `prog-card-row_opinion_none`
                  )}
                />
                <div
                  className={clsx(
                    'prog-card-row_opinion',
                    opinio > 3 ? `prog-card-row_opinion_${opinio}` : `prog-card-row_opinion_none`
                  )}
                />
              </div>
            ) : null
          ) : null}
          {crumbs && (
            <div className='absolute -right-14 top-2 cursor-pointer border flex items-center justify-center w-7 h-7'>
              <Crumbs />
            </div>
          )}
        </div>

        {!access && opinio > 0 && opinio < 5 ? (
          <>
            <div className={clsx('prog-card-row_opinion', `prog-card-row_opinion_${opinio}`)} />
            <div
              className={clsx(
                'prog-card-row_opinion',
                opinio > 1 ? `prog-card-row_opinion_${opinio}` : `prog-card-row_opinion_none`
              )}
            />
            <div
              className={clsx(
                'prog-card-row_opinion',
                opinio > 2 ? `prog-card-row_opinion_${opinio}` : `prog-card-row_opinion_none`
              )}
            />
            <div
              className={clsx(
                'prog-card-row_opinion',
                opinio > 3 ? `prog-card-row_opinion_${opinio}` : `prog-card-row_opinion_none`
              )}
            />
          </>
        ) : null}
      </div>
    </div>
  )
}

ProdCard.propTypes = {
  firstHeader: PropTypes.string,
  secondHeader: PropTypes.string,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  modal: PropTypes.bool,
  opinio: PropTypes.number
}

ProdCard.defaultProps = {
  opinio: 1,
  modal: false,
  access: false,
  crumbs: false
}

export default ProdCard

const Crumbs = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.3335 3.33333C9.3335 4.06971 8.73654 4.66667 8.00016 4.66667C7.26378 4.66667 6.66683 4.06971 6.66683 3.33333C6.66683 2.59695 7.26378 2 8.00016 2C8.73654 2 9.3335 2.59695 9.3335 3.33333ZM9.3335 8C9.3335 8.73638 8.73654 9.33333 8.00016 9.33333C7.26378 9.33333 6.66683 8.73638 6.66683 8C6.66683 7.26362 7.26378 6.66667 8.00016 6.66667C8.73654 6.66667 9.3335 7.26362 9.3335 8ZM8.00016 14C8.73654 14 9.3335 13.403 9.3335 12.6667C9.3335 11.9303 8.73654 11.3333 8.00016 11.3333C7.26378 11.3333 6.66683 11.9303 6.66683 12.6667C6.66683 13.403 7.26378 14 8.00016 14Z'
        fill='#637381'
      />
    </svg>
  )
}
