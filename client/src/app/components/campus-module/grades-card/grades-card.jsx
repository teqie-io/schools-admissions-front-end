import React from 'react'

import { phstudent } from '@image'

export default function GradesCard() {
  const styles = {
    study: { color: '#404EED' },
    playgroup: { textTransform: 'uppercase' },
    section: { color: '#919eab' },
    yrs: { top: 1 }
  }

  return (
    <div className='grades-programs-row_card'>
      {[0, 1].map((item, key) => (
        <div key={key} className='prod-card-section'>
          <div className='prod-card-section_text'>
            <h5 style={styles.playgroup}>playgroup</h5>
            <p className='cursor-pointer' style={styles.study}>
              <img src={phstudent} alt='study' />
              20 per Section
            </p>
          </div>
          <div className='prod-card-section_text'>
            <p className='relative' style={styles.section}>
              5 Section
            </p>
            <p className='relative' style={styles.yrs}>
              2 - 2.5 yrs
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
