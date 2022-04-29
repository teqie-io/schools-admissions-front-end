import React from 'react'
import PropTypes from 'prop-types'

import './topreferalsitem.scss'

const TopReferalsItem = ({ name, image, achievement, hexColor }) => {
  function hexToRgbA(hex, opacity) {
    let color

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      color = hex.substring(1).split('')
      color = '0x' + color.join('')
      color.length === 3 && [color[0], color[0], color[1], color[1], color[2], color[2]]

      return 'rgba(' + [(color >> 16) & 255, (color >> 8) & 255, color & 255, opacity].join(',')
    }
  }

  const styles = {
    trophy: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: hexToRgbA(hexColor, 0.1),
      borderRadius: '50%',
      minHeight: '2.5rem',
      minWidth: '2.5rem',
      marginLeft: 'auto'
    }
  }

  return (
    <li className='top-referals-item'>
      <img className='top-referals-item_avatar' src={image} alt='referal avatar' />
      <div className='top-referals-item_column'>
        <h4 className='top-referals-item_name'>{name}</h4>
        <small className='top-referals-item_achievement'>{achievement}</small>
      </div>
      <div className='top-referals-item_trophy' style={styles.trophy}>
        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H4V18H14V16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM14 7.82C15.16 7.4 16 6.3 16 5V4H14V7.82Z'
            fill={hexColor}
          />
        </svg>
      </div>
    </li>
  )
}

export default TopReferalsItem

TopReferalsItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  achievement: PropTypes.string,
  hexColor: PropTypes.string
}
