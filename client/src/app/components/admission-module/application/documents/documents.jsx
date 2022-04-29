import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'

import { ProofCard } from '../../../../../stories'

export default function Documents() {
  const styles = {
    circle: buildStyles({
      textSize: '1.5rem',
      pathTransitionDuration: 5,
      pathColor: `#008060`,
      textColor: 'black',
      trailColor: 'rgba(226,226,226,0.2)',
      backgroundColor: '#3e98c7'
    })
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='mb-10'>
          <h3 className='font-medium text-2xl mb-3'>Documents</h3>
          <p className='text-xs' style={{ width: '17.375rem' }}>
            Please upload mandotary Documents The documents will be verified in 2 Working days
          </p>
        </div>
        <div className='w-20 h-20'>
          <CircularProgressbarWithChildren value={50} styles={styles.circle}>
            <div className='flex flex-col items-center text-xs' style={{ marginTop: '-0.313rem' }}>
              <strong>50%</strong>
              <p>Complete</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <ProofCard title='Proof of Identity' num={0} nameCard='Passport' approved='approved' />
      <ProofCard title='Transfer Certificate' num={1} nameCard='School Certificate' approved='Send For Approval' />
      <ProofCard title='Age Proof' num={2} nameCard='Date of Birth Certificate ' approved='Rejected' />
      <ProofCard num={3} approved='Upload' />
    </div>
  )
}
