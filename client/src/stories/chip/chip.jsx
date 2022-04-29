import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './chip.scss'

const Chip = ({
  image,
  styleChip,
  deleteChip,
  label,
  customStyle,
  customClass,
  onClick,
  onDeleteClick,
  deleteIconFill,
  deleteIconSize,
  deleteIconStyle,
  chipAvatarStyle
}) => {
  return (
    <div className='inline-block mr-2'>
      <span onClick={onClick} className={clsx('chip group', `chip-${styleChip}`, customClass)} style={customStyle}>
        <span slot='avatar'>
          <span className='chip-avatar' style={chipAvatarStyle}>
            <img className='rounded-full' alt='A' src={image} />
          </span>
        </span>
        <span className={clsx('chip-label', !deleteChip && 'pr-3', styleChip === 'text' && 'pr-3')}>{label}</span>
        {deleteChip && styleChip !== 'text' && (
          <DeleteIcon
            deleteIconSize={deleteIconSize}
            onClick={onDeleteClick}
            deleteIconStyle={deleteIconStyle}
            fill={deleteIconFill ? deleteIconFill : styleChip === 'contained' ? 'white' : '#404eed'}
          />
        )}
      </span>
    </div>
  )
}

Chip.propTypes = {
  image: PropTypes.string,
  styleChip: PropTypes.string,
  label: PropTypes.string,
  customStyle: PropTypes.object,
  customClass: PropTypes.string,
  deleteChip: PropTypes.bool,
  onClick: PropTypes.func,
  deleteIconFill: PropTypes.string,
  onDeleteClick: PropTypes.func,
  deleteIconSize: PropTypes.number,
  deleteIconStyle: PropTypes.object
}

Chip.defaultProps = {
  styleChip: 'contained',
  label: 'Hello',
  deleteChip: false,
  deleteIconSize: 18
}

export default Chip

const DeleteIcon = ({ fill, deleteIconSize, deleteIconStyle, onClick }) => {
  return (
    <svg
      width={deleteIconSize}
      onClick={onClick}
      className='cursor-pointer opacity-70 transition-all hover:opacity-100'
      height={deleteIconSize}
      style={deleteIconStyle ? deleteIconStyle : { marginLeft: '0.375rem' }}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C10.9891 1.5 12.8968 2.29018 14.3033 3.6967C15.7098 5.10322 16.5 7.01088 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM11.2543 10.5C11.2543 10.3 11.1745 10.1083 11.0325 9.9675L10.0575 9L11.0325 8.0325C11.3266 7.73841 11.3266 7.26159 11.0325 6.9675C10.7384 6.67341 10.2616 6.67341 9.9675 6.9675L9 7.9425L8.0325 6.9675C7.73841 6.67341 7.26159 6.67341 6.9675 6.9675C6.67341 7.26159 6.67341 7.73841 6.9675 8.0325L7.9425 9L6.9675 9.9675C6.82552 10.1083 6.74565 10.3 6.74565 10.5C6.74565 10.7 6.82552 10.8917 6.9675 11.0325C7.10833 11.1745 7.30002 11.2543 7.5 11.2543C7.69998 11.2543 7.89167 11.1745 8.0325 11.0325L9 10.0575L9.9675 11.0325C10.1083 11.1745 10.3 11.2543 10.5 11.2543C10.7 11.2543 10.8917 11.1745 11.0325 11.0325C11.1745 10.8917 11.2543 10.7 11.2543 10.5Z'
          fill={fill}
        />
      </g>
    </svg>
  )
}
