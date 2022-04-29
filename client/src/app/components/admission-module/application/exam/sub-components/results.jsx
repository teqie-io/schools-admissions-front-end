import React from 'react'

export default function Results() {
  const styles = {
    box: { width: '8.5rem', height: '2.25rem' },
    pass: { background: '#F1F8F5', border: '1px solid #AEE9D1', color: '#AEE9D1' },
    fail: { background: '#FFF4F4', border: '1px solid #D82C0D', color: '#D82C0D' }
  }

  return (
    <div className='exam-results'>
      <p className='text-main-black text-base font-semibold ml-6 mr-16'>Update Test Results</p>
      <div
        className='rounded flex items-center justify-center mr-8 cursor-pointer'
        style={Object.assign(styles.pass, styles.box)}
      >
        Pass
      </div>
      <div
        className='rounded flex items-center justify-center cursor-pointer mr-4'
        style={Object.assign(styles.fail, styles.box)}
      >
        Fail
      </div>
    </div>
  )
}
