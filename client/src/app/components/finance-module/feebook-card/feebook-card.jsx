import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { approved, pending, draft } from '../../../static/image'

export default function FeeBookCard({ title, date, variant, type, onClick }) {
  const history = useHistory()

  const imageVariant = () => {
    return (variant === 'approved' && approved) || (variant === 'pending' && pending) || (variant === 'draft' && draft)
  }

  return (
    <div
      className='flex flex-col items-center'
      onClick={() => type === 'book' && history.push('/finance/feebooks/edit')}
    >
      <div
        onClick={onClick}
        className={clsx('feebooks-card', `feebooks-card-${type}`, variant && `feebooks-card-${type}_${variant}`)}
      >
        <p className={clsx(type === 'button' && 'text-2xl')}>{type === 'book' ? title : '+'}</p>
        <p>{type === 'book' ? date : 'Add Year Book'}</p>
      </div>
      {variant && <img src={imageVariant()} className='w-22 mr-8 mb-10' />}
    </div>
  )
}

FeeBookCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

FeeBookCard.defaultProps = {
  type: 'book',
  onClick: () => {}
}
