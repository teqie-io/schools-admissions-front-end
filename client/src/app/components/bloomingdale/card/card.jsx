import React from 'react'
import PropTypes from 'prop-types'

import Button from '@stories/button/button'

import './card.scss'
import { NavLink } from 'react-router-dom'

const BloomCard = ({ title, desc, btnName }) => {
  return (
    <div className='bloom-welcome-card'>
      <h4 className='bloom-welcome-card_title'>{title}</h4>
      <p className='bloom-welcome-card_desc'>{desc}</p>
      <NavLink to='/bloomingdale-cabinet' className='w-44'>
        <Button text={btnName} className='bloom-welcome-card_btn' />
      </NavLink>
    </div>
  )
}

BloomCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  btnName: PropTypes.string
}

BloomCard.defaultProps = {
  title: 'card text',
  desc: 'description text',
  btnName: 'button'
}

export default BloomCard
