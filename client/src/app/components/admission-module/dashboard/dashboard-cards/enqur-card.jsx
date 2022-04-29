import React from 'react'
import PropTypes from 'prop-types'

import './enqur-card.scss'

export default function EnqurCard({ enqiries, title, date }) {
  const styles = {
    enqiriesColor: (title.search('Active') !== -1 && { color: '#00AB55' }) ||
      (title.search('Failed') !== -1 && { color: '#FF4343' }) || { color: '#FFD964' },

    fillColor: (title.search('Failed') !== -1 && '#EB5757') || '#00AB55'
  }

  return (
    <div className='enqur-card'>
      <h2 className='text-xs'>{title}</h2>
      <p className='font-semibold text-base' style={styles.enqiriesColor}>
        {enqiries}
      </p>
      <div className='enqur-card-points'>
        <Trending fill={styles.fillColor} title={title} />
        {date}
      </div>
    </div>
  )
}

const Trending = ({ fill, title }) => {
  return (
    <div className={title.search('Conversion') !== -1 ? 'trending-rotate mr-1' : 'mr-1'}>
      <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
        <path
          d='M12.2501 4.08333C12.2556 4.04269 12.2556 4.00148 12.2501 3.96083C12.245 3.92659 12.2352 3.89321 12.2209 3.86167C12.2055 3.83316 12.1879 3.80586 12.1684 3.78C12.1462 3.74311 12.1187 3.70969 12.0867 3.68083L12.0167 3.64C11.983 3.61489 11.9456 3.59521 11.9059 3.58167H11.7892C11.7537 3.54725 11.7122 3.51958 11.6667 3.5H8.75005C8.42789 3.5 8.16672 3.76117 8.16672 4.08333C8.16672 4.4055 8.42789 4.66667 8.75005 4.66667H10.4009L8.06755 7.41417L5.54755 5.915C5.30097 5.76834 4.98435 5.82276 4.80089 6.04333L1.88422 9.54333C1.78502 9.66238 1.73726 9.81601 1.75149 9.97032C1.76572 10.1246 1.84076 10.2669 1.96005 10.3658C2.065 10.4528 2.19709 10.5003 2.33339 10.5C2.50689 10.5003 2.67151 10.4233 2.78255 10.29L5.37839 7.175L7.86922 8.66833C8.11311 8.81299 8.42571 8.7613 8.61005 8.54583L11.0834 5.65833V7C11.0834 7.32217 11.3446 7.58333 11.6667 7.58333C11.9889 7.58333 12.2501 7.32217 12.2501 7V4.08333Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

EnqurCard.propTypes = {
  enqiries: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
}

Trending.propTypes = {
  fill: PropTypes.string,
  title: PropTypes.string
}
