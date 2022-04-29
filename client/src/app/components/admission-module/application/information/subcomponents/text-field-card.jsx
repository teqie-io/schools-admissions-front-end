import React from 'react'
import PropTypes from 'prop-types'

const TextFieldCard = ({ title, body }) => {
  const styles = { p: { color: '#6D7175' } }

  return (
    <div className='text-sm'>
      <p className='mb-4' style={styles.p}>
        {title}
      </p>
      <p className='mb-8'>{body}</p>
    </div>
  )
}

export default TextFieldCard

TextFieldCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}
