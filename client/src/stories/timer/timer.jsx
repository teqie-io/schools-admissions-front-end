import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { pause, play } from '../../app/pages/tasks/image'

const Timer = ({ sec, allTime }) => {
  const [time, setTime] = useState(sec)
  const [start, setStart] = useState(false)

  useEffect(() => {
    let interval = null

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [start])

  const styles = { main: { width: '8.5rem', height: '2rem' } }

  return (
    <div className='border rounded flex items-center' style={styles.main}>
      <p className='text-xs ml-4 mr-4'>
        <span style={{ color: '#27C59A' }}>
          00:{Math.round(time / 1000) < 10 && sec < 10 ? '0' + Math.round(time / 1000) : sec + Math.round(time / 1000)}
        </span>{' '}
        / {allTime}
      </p>
      <button onClick={() => setStart(!start)}>
        <img src={start ? pause : play} />
      </button>
    </div>
  )
}

export default Timer

Timer.propTypes = {
  sec: PropTypes.number,
  allTime: PropTypes.string
}
